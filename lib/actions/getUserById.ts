import { getNativeUserById } from "../services/getNativeUser";
import { connectDB } from "../config/db";
import { User } from "better-auth/types";


export const getUserById = async (id: string | null): Promise<User | null> => {
  try {
    await connectDB;

    if(!id) {
      return null;
    }

    const user = await getNativeUserById(id);

    if (!user) {
      return null;
    }

    return user as unknown as User;
  } catch (err) {
    console.error("Error fetching user:", err);
    return null;
  }
};