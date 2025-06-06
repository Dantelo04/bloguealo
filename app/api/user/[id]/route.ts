import { NextRequest, NextResponse } from "next/server";
import { connectDB, db } from "@/lib/config/db";
import { getNativeUserById } from "@/lib/services/getNativeUser";
import { ObjectId } from "mongodb";

// Type for the safe user response
type SafeUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string | null;
  phone?: string | null;
};

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Ensure database connection
    await connectDB();

    const { id } = await params;

    // Validate ID format
    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: "Invalid user ID format" },
        { status: 400 }
      );
    }

    // Get user data
    const user = await getNativeUserById(id);

    // Check if user exists
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Format safe user response
    const safeUser: SafeUser = {
      _id: user._id.toString(),
      name: user.name || "Unknown",
      email: user.email,
      role: user.role || "user",
      avatar: user.avatar || null,
      phone: user.phone || null,
    };

    return NextResponse.json({ user: safeUser }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}