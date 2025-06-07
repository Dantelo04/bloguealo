import React, { useState } from "react";
import { SimpleBlogPreview } from "./SimpleBlogPreview";
import { Blog } from "@/lib/models/Blog";

interface SimpleBlogListProps {
  blogs: Blog[];
}

export const SimpleBlogList = ({ blogs }: SimpleBlogListProps) => {
  return (
    <div className="flex flex-col gap-theme-sm">
      <h4>Ultimos Blogs</h4>
      <div className="flex flex-col gap-theme-sm">
        {blogs.map((blog, index) => (
          <SimpleBlogPreview
            key={blog._id}
            blog={blog}
            borderBottom={index !== blogs.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
