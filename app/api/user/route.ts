import { NextResponse } from 'next/server';
import { connectDB, db } from '@/lib/config/db';

export async function GET() {
  try {
    // Ensure database connection
    await connectDB();

    const collection = db.collection('user');
    const user = await collection.find({}).toArray();

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}
