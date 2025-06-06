import axios from "axios";

export const getUserById = async (id: string) => {
  try {
    const { data } = await axios.get(`/api/user/${id}`);
    return data;
  } catch (err) {
    console.error("Error fetching user:", err);
    return null;
  }
};