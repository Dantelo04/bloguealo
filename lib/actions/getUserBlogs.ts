import { connectDB } from "../config/db";
import { getNativeUserById } from "../services/getNativeUser";
import { OBJECT_OPTIONS } from "@/assets/constants";
import { Blog } from "../models/Blog";
import { ObjectId } from "mongodb";

export const getUserBlogs = async (userId: string) => {
  try {
    await connectDB();

    const user = await getNativeUserById(userId);

    if (!user) {
      return null;
    }

    const userBlogs = await Blog.find({ author_id: new ObjectId(userId) })
      .select(
        "title description image tags createdAt updatedAt author_name likes _id content author_id _id"
      )
      .sort({ createdAt: -1 })
      .exec();

    return userBlogs.map((blog) => blog.toObject(OBJECT_OPTIONS));
  } catch (err) {
    console.error("Error fetching user blogs:", err);
    return [];
  }
};
