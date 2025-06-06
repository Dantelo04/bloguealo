import axios from "axios";

export const getBlogById = async (id: string) => {
  try {
    const { data } = await axios.get(`/api/blog/${id}`);
    return data;
  } catch (err) {
    console.error("Error fetching blog:", err);
    return null;
  }
};
