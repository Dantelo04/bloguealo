import axios from "axios";

export const deleteBlogById = async (blog_id: string) => {
  try {
    const res = await axios.delete(`/api/blog/${blog_id}`);
    return res.data;
  } catch (err) {
    console.error("Error deleting blog:", err);
    return null;
  }
};