import React from "react";
import Image from "next/image";
import { Author } from "./Author";
import { CustomLink } from "../CustomLink/CustomLink";
import { CgArrowRight } from "react-icons/cg";
import { DEFAULT_BLOG_IMAGE } from "@/assets/constants";
import { Blog } from "@/lib/models/Blog";
import { getUserById } from "@/lib/actions/getUserById";

interface BlogHighlightProps {
  blog: Blog | null | undefined;
  rounded?: boolean;
  readonly?: boolean;
}

export const BlogHighlight = async ({
  blog,
  rounded = false,
  readonly = false,
}: BlogHighlightProps) => {
  const author = await getUserById(blog?.author_id || "");

  if(!blog) return;

  return (
    <div className={`flex flex-col gap-theme-xl w-full max-w-content-width relative ${rounded ? "rounded-md " : "lg:rounded-md"} overflow-hidden h-[500px]`}>
      <Image
        src={blog.image || DEFAULT_BLOG_IMAGE}
        alt="Blog Highlight"
        width={1200}
        height={500}
        className="object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-white gap-theme-sm px-horizontal-padding">
        <h1 className="text-4xl font-bold text-center max-w-[calc(var(--spacing-content-width)-64px)]">
          {blog?.title}
        </h1>
        <p className="text-lg text-center max-w-[800px]">{blog?.description}</p>
        {blog?.author_id && !readonly && <Author author={author} date={new Date(blog.createdAt).toISOString()} />}
        {blog?._id && !readonly && (
          <CustomLink href={`/blog/${blog?._id}`}>
            <span>Leer más</span>
            <CgArrowRight className="w-4 h-4" />
          </CustomLink>
        )}
      </div>
    </div>
  );
};
