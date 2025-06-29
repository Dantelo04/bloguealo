"use server";

import { OBJECT_OPTIONS } from "@/assets/constants";
import { connectDB } from "../config/db";
import { Blog } from "../models/Blog";

interface GetAllBlogsParams {
  page?: number;
  limit?: number;
  search?: string;
  tags?: string[];
}

export const getAllBlogs = async ({
  page = 1,
  limit = 10,
  search = "",
  tags = [],
}: GetAllBlogsParams = {}) => {
  try {
    await connectDB();

    const skip = (page - 1) * limit;

    const query: any = {};

    const searchConditions = [];

    if (search) {
      searchConditions.push(
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } }
      );
    }

    const tagsCondition = tags.length > 0 ? { tags: { $in: tags } } : null;

    if (searchConditions.length > 0 && tagsCondition) {
      query.$and = [
        { $or: searchConditions },
        tagsCondition
      ];
    } else if (searchConditions.length > 0) {
      query.$or = searchConditions;
    } else if (tagsCondition) {
      Object.assign(query, tagsCondition);
    }

    const data = await Blog.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip)
      .maxTimeMS(5000);

    if (!data) {
      throw new Error('No blogs found');
    }

    return data.map(doc => doc.toObject(OBJECT_OPTIONS));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

