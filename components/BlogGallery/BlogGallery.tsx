import React from "react";
import { BlogCard } from "../BlogCard/BlogCard";
import { TitleSection } from "../TitleSection/TitleSection";
import { Blog } from "@/lib/models/Blog";

interface BlogGalleryProps {
  blogs?: Blog[];
  title?: string;
  link?: string;
}

export const BlogGallery = ({
  blogs,
  title = "Últimas publicaciones",
  link,
}: BlogGalleryProps) => {
  return (
    <div className="flex flex-col gap-theme-sm w-full max-w-[var(--spacing-content-width)]">
      <TitleSection title={title} link={link} />
      {blogs && blogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-theme-sm mt-2">
        {blogs.map((blog, index) => (
            <BlogCard blog={blog} key={index}  />
          ))}
        </div>
      ) : (
        <div className="w-full min-h-10">
          <p className="text-black/50">No hay publicaciones</p>
        </div>
      )}
    </div>
  );
};
