"use client";

import React from "react";
import Image from "next/image";
import { Author } from "./Author";
import { CustomLink } from "../CustomLink/CustomLink";
import { CgArrowRight } from "react-icons/cg";
import { User } from "better-auth";
import { DEFAULT_BLOG_IMAGE } from "@/assets/constants";
import { isValidUrl } from "@/lib/services/isValidUrl";
import { Blog } from "@/lib/models/Blog";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "@/lib/actions/getUserById";

interface BlogHighlightProps {
  blog: Blog;
  rounded?: boolean;
}

export const BlogHighlight = ({
  blog,
  rounded = false,
}: BlogHighlightProps) => {
  const { data: author, isLoading } = useQuery({
    queryKey: ["author", blog.author_id],
    queryFn: () => getUserById(blog.author_id),
  });

  return (
    <div className={`flex flex-col gap-theme-xl w-full max-w-content-width relative ${rounded ? "rounded-md " : "lg:rounded-md"} overflow-hidden h-[500px]`}>
      <Image
        src={isValidUrl(blog.image || "") ? blog.image || DEFAULT_BLOG_IMAGE : DEFAULT_BLOG_IMAGE}
        alt="Blog Highlight"
        width={1200}
        height={500}
        className="object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-white gap-theme-sm px-horizontal-padding">
        <h1 className="text-4xl font-bold text-center max-w-[calc(var(--spacing-content-width)-64px)]">
          {blog.title}
        </h1>
        <p className="text-lg text-center max-w-[800px]">{blog.description}</p>
        {blog.author_id && !isLoading && <Author author={author} date={new Date(blog.createdAt).toISOString()} />}
        {blog._id && (
          <CustomLink href={`/blog/${blog._id}`}>
            <span>Leer más</span>
            <CgArrowRight className="w-4 h-4" />
          </CustomLink>
        )}
      </div>
    </div>
  );
};
