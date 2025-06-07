import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { connectDB, db } from "./config/db";
import { DEFAULT_ROLE } from "@/assets/constants";

await connectDB();

if (!db) throw new Error("Database connection not established");

export const auth = betterAuth({
    database: mongodbAdapter(db.getClient().db()),
    emailAndPassword: {
        enabled: true,
    },
    user: {
        additionalFields: {
            phone: {
                type: "string",
                required: false,
                defaultValue: null,
                input: true,
            },
            role: {
                type: "string",
                required: false,
                defaultValue: DEFAULT_ROLE,
                input: true,
            },
            avatar: {
                type: "string",
                required: false,
                defaultValue: null,
                input: true,
            },
        },
    },
    trustedOrigins: [
        process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "",
        "http://localhost:3000",
    ]
});

