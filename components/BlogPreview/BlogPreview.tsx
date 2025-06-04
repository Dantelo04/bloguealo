"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Tag } from "./Tag";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CustomLink } from "../CustomLink/CustomLink";
import { CgArrowRight } from "react-icons/cg";
import { Button } from "../Button/Button";


interface BlogPreviewProps {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  authorImage: string;
  likes: number;
  tag: string;
  id: number;
  liked: boolean;
}

export const BlogPreview = ({
  title,
  description,
  image,
  date,
  author,
  authorImage,
  likes,
  tag,
  id,
  liked,
}: BlogPreviewProps) => {
  const [like, setLiked] = useState(false);

  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-xl border w-full pb-theme-md">
      <div className="flex flex-col">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="object-cover w-full h-[180px] border-b border-black cursor-pointer"
          onClick={() => (window.location.href = `/blog/${id}`)}
        />
        <div className="flex flex-col gap-2 p-theme-md">
          <Tag>{tag}</Tag>
          <h4 className="w-fit">{title}</h4>
          <p>{description}</p>
        </div>
      </div>

      <div className="flex justify-between items-center px-theme-md pb-theme-md">
        <p className="text-sm text-gray-100">Made by {author}</p>
        <p className="flex items-center gap-2">
          <button onClick={() => setLiked(!like)} className="cursor-pointer">
            {like ? <FaHeart className='w-6 h-6 text-red-600'/> : <FaRegHeart className='w-6 h-6' />}
          </button>
          {likes}
        </p>
      </div>

      <div className="w-full flex items-center justify-between px-theme-md">
        <Button className="w-full rounded-md py-2">
          <span>Ver más</span>
        </Button>
      </div>
    </div>
  );
};
