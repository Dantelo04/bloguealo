import mongoose, { Schema, Document } from 'mongoose';

export interface Comment extends Document {
  content: string;
  author_id: string;
  blog_id: string;
  createdAt: Date;
  updatedAt: Date;
}

const commentSchema = new Schema<Comment>(
    {
        content: {
            type: String,
            required: true,
        },
        author_id: {
            type: String,
            required: true,
        },
        blog_id: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)