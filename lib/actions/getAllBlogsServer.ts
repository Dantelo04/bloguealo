import { connectDB } from "../config/db";
import { Blog } from "../models/Blog";

export const getAllBlogsServer = async () => {
    try {
        await connectDB;

        const blogs = await Blog.find({}).sort({ createdAt: -1 })
        .limit(10)
        .skip(0);

        const totalBlogs = await Blog.countDocuments({});

        const blogsWithTotal = {
            blogs,
        };

        return blogsWithTotal;
    } catch (error) {
        console.error(error);
        return [];
    }
};