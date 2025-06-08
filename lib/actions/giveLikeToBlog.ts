"use server";

import { connectDB } from "../config/db";
import { auth } from "../auth";
import { headers } from "next/headers";
import { Blog } from "../models/Blog";

export const giveLikeToBlog = async (blogId: string) => {
  try {
    // Ensure database connection
    await connectDB();

    // Get the current user from the session
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return null;
    }

    const blog = await Blog.findById(blogId);

    if (!blog) {
      return null;
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
  } catch (error) {
    console.error("Error giving like to blog:", error);
    return null;
  }
};