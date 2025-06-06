import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/config/db";
import { Blog } from "@/lib/models/Blog";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getNativeUserById } from "@/lib/services/getNativeUser";
import { isValidUrl } from "@/lib/services/isValidUrl";
import { DEFAULT_BLOG_IMAGE } from "@/assets/constants";

// GET all blogs
export async function GET(request: NextRequest) {
  try {
    // Ensure database connection
    await connectDB();

    const { searchParams } = new URL(request.url);
    
    // Get pagination parameters from query string
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;
    const skip = searchParams.get('skip') ? parseInt(searchParams.get('skip')!) : 0;

    // Validate pagination parameters
    if (limit !== undefined && limit <= 0) {
      return NextResponse.json(
        { error: "Limit must be greater than 0" },
        { status: 400 }
      );
    }

    if (skip !== undefined && skip < 0) {
      return NextResponse.json(
        { error: "Skip must be greater than or equal to 0" },
        { status: 400 }
      );
    }

    // Build the query
    let query = Blog.find({}).sort({ createdAt: -1 });
    
    // Apply pagination if limit is provided
    if (limit !== undefined) {
      query = query.limit(limit);
    }
    if (skip !== undefined && skip > 0) {
      query = query.skip(skip);
    }

    const blogs = await query.exec();

    // Get total count for pagination info
    const total = await Blog.countDocuments();

    const blogsWithAuthor = await Promise.all(
      blogs.map(async (blog) => {
        const author = await getNativeUserById(blog.author_id);

        return {
          ...blog.toObject(),
          author: {
            id: author?._id,
            name: author?.name || blog.author_name || "Unknown",
            email: author?.email || "No email",
          },
        };
      })
    );

    return NextResponse.json({
      blogs: blogsWithAuthor,
      pagination: {
        total,
        limit: limit || total,
        skip,
        hasMore: skip + blogs.length < total
      }
    }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);

    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

// POST new blog
export async function POST(request: NextRequest) {
  try {
    // Ensure database connection
    await connectDB();

    // Get blog data from request body
    const { title, content, description, tags, image } = await request.json();

    // Validate required fields
    if (!title || !content || !description || !tags) {
      return NextResponse.json(
        { error: "Title, content, description and tags are required" },
        { status: 400 }
      );
    }

    if (image && image !== DEFAULT_BLOG_IMAGE && !isValidUrl(image)) {
      return NextResponse.json({ error: "Formato de imagen inválido, utiliza picsum.photos o dejalo en blanco" }, { status: 400 });
    }

    // Get the current user from the session
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get author details from the native MongoDB collection
    const author = await getNativeUserById(session.user.id);

    console.log("Author data:", {
      id: session.user.id,
      authorFromDB: author,
      name: author?.name,
    });

    //find blogs with the same author_id
    const blogs = await Blog.find({ author_id: session.user.id });

    const limit =
      author?.role === "admin"
        ? 100
        : author?.role === "premium"
        ? 30
        : author?.role === "user"
        ? 10
        : 1;

    const tag_limit = 3;

    const role_limit_message = {
      admin: "You have reached the maximum number of blogs",
      premium: "You have reached the maximum number of blogs",
      user: "You have reached the maximum number of blogs, consider upgrading to a premium plan",
      default:
        "You have reached the maximum number of blogs, verify your account to create more blogs",
    };

    if (blogs.length < limit) {
      try {
        const blogData = {
          title,
          content,
          author_id: session.user.id,
          author_name: author?.name || "Unknown",
          description,
          tags: tags.length > tag_limit ? tags.slice(0, tag_limit) : tags,
          image,
        };

        const newBlog = await Blog.create(blogData);

        return NextResponse.json(
          {
            message: "Blog created",
            blog: newBlog,
          },
          { status: 201 }
        );
      } catch (error) {
        console.error("Error creating blog:", error);
        return NextResponse.json(
          {
            error: "Failed to create blog",
            details: error instanceof Error ? error.message : "Unknown error",
          },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        {
          error: "Haz alcanzado el límite de blogs, considera aumentar tu plan para crear más",
          details: role_limit_message[author?.role as keyof typeof role_limit_message],
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}
