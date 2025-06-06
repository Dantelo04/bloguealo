import { db } from "@/lib/config/db";
import { ObjectId } from "mongodb";

export async function getNativeUserById(id: string) {
  const userCollection = db.collection("user");
  return await userCollection.findOne({ _id: new ObjectId(id) });
}
