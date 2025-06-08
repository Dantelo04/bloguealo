"use server";

import { Blog } from "../models/Blog";
import { connectDB } from "../config/db";
import { OBJECT_OPTIONS } from "@/assets/constants";

export const getBlogById = async (id: string) => {
  try {
    await connectDB();

    const blog = await Blog.findById(id);

    if (!blog) {
      return null;
    }

    return blog.toObject(OBJECT_OPTIONS);
  } catch (err) {
    console.error("Error fetching blog:", err);
    return null;
  }
};
