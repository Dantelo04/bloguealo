import React from "react";
import { BlogCard } from "../BlogCard/BlogCard";
import { TitleSection } from "../TitleSection/TitleSection";
import { Blog } from "@/lib/models/Blog";
import { authClient } from "@/lib/auth-client";

interface BlogGalleryProps {
  blogs?: Blog[];
  title?: string;
  link?: string;
  editable?: boolean;
}

export const BlogGallery = ({
  blogs = [],
  title = "Últimas publicaciones",
  link,
  editable = false,
}: BlogGalleryProps) => {
  const safeBlogs = blogs || [];
  const { data: session, isPending } = authClient.useSession();

  return (
    <div className="flex flex-col gap-theme-sm w-full max-w-[var(--spacing-content-width)]">
      <TitleSection title={title} link={link} />
      {safeBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-theme-sm mt-2">
          {safeBlogs.map((blog, index) => {
            return (
              <BlogCard
                blog={blog}
                key={index}
                editable={
                  isPending || !editable ? false : session?.user?.id === blog.author_id
                }
              />
            );
          })}
        </div>
      ) : (
        <div className="w-full min-h-10">
          <p className="text-black/50">No hay publicaciones</p>
        </div>
      )}
    </div>
  );
};
