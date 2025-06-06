import React, { useState } from "react";
import { blogsSample } from "../BlogGallery/BlogGallery";
import { SimpleBlogPreview } from "./SimpleBlogPreview";

export const SimpleBlogList = () => {
  const [blogs, setBlogs] = useState(blogsSample.slice(0, 3));

  return (
    <div className="flex flex-col gap-theme-sm">
      <h4>Ultimos Blogs</h4>
      <div className="flex flex-col gap-theme-sm">
        {blogs.map((blog, index) => (
          <SimpleBlogPreview
            key={blog.id}
            index={index}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            date={blog.date}
            author={blog.author}
            borderBottom={index !== blogs.length - 1}
            link={`/blog/${blog.id}`}
          />
        ))}
      </div>
    </div>
  );
};
