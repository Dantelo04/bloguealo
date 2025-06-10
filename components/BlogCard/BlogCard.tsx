import React from "react";
import Image from "next/image";
import { Tag } from "./Tag";
import { Button } from "../Button/Button";
import { LikeButton } from "../Button/LikeButton";
import { Blog } from "@/lib/models/Blog";
import { DeleteButton } from "../DeleteButton/DeleteButton";

interface BlogCardProps {
  blog: Blog;
  editable: boolean;
}

export const BlogCard = ({
  blog,
  editable = false,
}: BlogCardProps) => {
  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-md border border-border w-full pb-theme-md">
      <div className="flex flex-col relative">
        <Image
          src={blog.image || ""}
          alt={blog.title}
          width={300}
          height={300}
          className="object-cover w-full h-[180px] border-b border-border"
        />
        {editable && <DeleteButton blog_id={blog._id}/>}
        <div className="flex flex-col gap-2 p-theme-md">
          <div className="inline-flex gap-2 w-full overflow-x-auto">
            {blog.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <h4 className="w-fit">{blog.title}</h4>
          <p>{blog.description}</p>
        </div>
      </div>

      <div className="flex flex-col gap-theme-md">
      <div className="flex justify-between items-center px-theme-md">
        <p className="text-sm text-gray-100">Hecho por {blog.author_name}</p>
          <LikeButton
            likes={blog.likes}
            blogId={blog._id}
          />
      </div>

      <div className="w-full flex items-center justify-between px-theme-md">
        <Button
          className="w-full rounded-md py-2"
          onClick={() => (window.location.href = `/blog/${blog._id}`)}
        >
          <span>Leer más</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
