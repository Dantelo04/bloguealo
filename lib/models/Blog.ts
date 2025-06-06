import mongoose, { Schema, Document } from 'mongoose';

export interface Blog extends Document {
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema = new Schema<Blog>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Blog = mongoose.models.Blog || mongoose.model<Blog>('Blog', blogSchema); 