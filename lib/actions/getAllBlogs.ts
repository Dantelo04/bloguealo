"use server";

import { OBJECT_OPTIONS } from "@/assets/constants";
import { connectDB } from "../config/db";
import { Blog } from "../models/Blog";

interface GetAllBlogsParams {
  page?: number;
  limit?: number;
}

export const getAllBlogs = async ({
  page = 1,
  limit = 10,
}: GetAllBlogsParams = {}) => {
  try {
    await connectDB();

    const skip = (page - 1) * limit;

    const data = await Blog.find({})
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .maxTimeMS(5000); // Add timeout for the query itself

    if (!data) {
      throw new Error('No blogs found');
    }

    return data.map(doc => doc.toObject(OBJECT_OPTIONS));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error; // Re-throw the error so we can handle it in the UI
  }
};

