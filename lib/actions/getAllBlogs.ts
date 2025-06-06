import axios from "axios";

export const getAllBlogs = async () => {
  try {
    const { data } = await axios.get("/api/blog");
    return data.blogs;
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return [];
  }
};
