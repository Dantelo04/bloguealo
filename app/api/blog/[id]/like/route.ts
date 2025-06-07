import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/config/db";
import { Blog } from "@/lib/models/Blog";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Ensure database connection
    await connectDB();

    // Get the current user from the session
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const blogId = await params.id;
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Check if user has already liked the blog
    const userIndex = blog.likes.indexOf(session.user.id);
    
    if (userIndex === -1) {
      // User hasn't liked the blog yet, add their ID to likes array
      blog.likes.push(session.user.id);
    } else {
      // User has already liked the blog, remove their ID (unlike)
      blog.likes.splice(userIndex, 1);
    }

    // Save the updated blog
    await blog.save();

    return NextResponse.json(
      { 
        message: userIndex === -1 ? "Blog liked" : "Blog unliked",
        likes: blog.likes.length,
        liked: userIndex === -1
      }, 
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating blog likes:", error);
    return NextResponse.json(
      { error: "Failed to update blog likes" },
      { status: 500 }
    );
  }
}
