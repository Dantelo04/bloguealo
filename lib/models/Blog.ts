import mongoose, { Schema, Document } from 'mongoose';

export interface Blog extends Document {
  _id: string;
  title: string;
  content: string;
  author_id: string;
  author_name: string;
  description: string;
  image: string | null;
  likes: string[];
  comments: string[];
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
}

const blogSchema = new Schema<Blog>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    author_id: {
      type: String,
      required: true,
    },
    author_name: {
      type: String,
      required: true,
      trim: true,
      default: "Unknown"
    },
    image: {
      type: String,
      required: false,
      default: null,
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    tags: [{ type: String, max: 3 }],
  },
  { timestamps: true }
);

// Add index on createdAt field for faster sorting
blogSchema.index({ createdAt: -1 });

if (mongoose.models.Blog) {
  delete mongoose.models.Blog;
}

export const Blog = mongoose.model<Blog>('Blog', blogSchema); 