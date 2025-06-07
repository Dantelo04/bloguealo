import axios from "axios";

export const giveLikeToBlog = async (blogId: string) => {
  try {
    const res = await axios.post(`/api/blog/${blogId}/like`);
    return res.data.message;
  } catch (error) {
    console.error("Error giving like to blog:", error);
    return null;
  }
};