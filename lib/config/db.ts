import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const dbUrl = process.env.DB_URL;
    if (!dbUrl) {
      throw new Error('MongoDB connection URL not found in environment variables');
    }
    
    await mongoose.connect(dbUrl, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 10000,
    });
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

export const db = mongoose.connection;