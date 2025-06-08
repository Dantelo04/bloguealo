import axios from "axios";

export const getAllBlogsWithLimit = async (limit: number, skip?: number) => {
  try {
    const res = await axios.get(`/api/blog?limit=${limit}&skip=${skip || 0}`);
    return res.data.blogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};
