import React from "react";
import { Blog } from "@/lib/models/Blog";
import { DateFormat } from "@/assets/constants";

interface SimpleBlogPreviewProps {
  blog: Blog;
  borderBottom: boolean;
}

export const SimpleBlogPreview = ({
  blog,
  borderBottom,
}: SimpleBlogPreviewProps) => {
  return (
    <div
      className={`flex flex-col gap-1 pb-3 cursor-pointer ${
        borderBottom ? "border-b border-black/15" : ""
      }`}
      onClick={() => {
        window.location.href = `/blog/${blog._id}`;
      }}
    >
      <h5>{blog.title}</h5>
      <div className="flex gap-2 text-sm text-black/75">
        <p>{blog.author_name}</p>
        <p>|</p>
        <p>{DateFormat(new Date(blog.createdAt).toISOString())}</p>
      </div>
    </div>
  );
};
