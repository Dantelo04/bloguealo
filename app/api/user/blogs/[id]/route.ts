import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/config/db";
import { getNativeUserById } from "@/lib/services/getNativeUser";
import { ObjectId } from "mongodb";
import { Blog } from "@/lib/models/Blog";

// Type for the safe user response
type SafeUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string | null;
  phone?: string | null;
};

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();

    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const includeBlogs = searchParams.get("includeBlogs") === "true";

    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid user ID format" }, { status: 400 });
    }

    const user = await getNativeUserById(id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const safeUser: SafeUser = {
      _id: user._id.toString(),
      name: user.name || "Unknown",
      email: user.email,
      role: user.role || "user",
      avatar: user.avatar || null,
      phone: user.phone || null,
    };

    if (includeBlogs) {
      const userBlogs = await Blog.find({ author_id: new ObjectId(id) })
        .select("title description image tags createdAt updatedAt author_name likes _id content author_id _id")
        .sort({ createdAt: -1 })
        .exec();

      return NextResponse.json({ user: safeUser, blogs: userBlogs }, { status: 200 });
    }

    return NextResponse.json({ user: safeUser }, { status: 200 });

  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
}
