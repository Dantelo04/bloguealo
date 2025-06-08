import axios from "axios";

export const getAllUsers = async () => {
  const baseUrl =
    process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000";
  const response = await axios.get(`${baseUrl}/api/user`);
  return response.data.user;
};
