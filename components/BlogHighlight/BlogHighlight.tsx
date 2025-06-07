import React from "react";
import Image from "next/image";
import { Author } from "./Author";
import { CustomLink } from "../CustomLink/CustomLink";
import { CgArrowRight } from "react-icons/cg";
import { User } from "better-auth";
import { DEFAULT_BLOG_IMAGE } from "@/assets/constants";
import { isValidUrl } from "@/lib/services/isValidUrl";

interface BlogHighlightProps {
  title: string;
  description: string;
  image: string;
  author?: User | null;
  date?: string;
  link?: string;
}

export const BlogHighlight = ({
  title,
  description,
  image,
  author,
  date,
  link,
}: BlogHighlightProps) => {
  return (
    <div className="flex flex-col gap-theme-xl w-full max-w-content-width relative rounded-md border overflow-hidden h-[500px] ">
      <Image
        src={isValidUrl(image) ? image : DEFAULT_BLOG_IMAGE}
        alt="Blog Highlight"
        width={1200}
        height={500}
        className="object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-white gap-theme-sm px-horizontal-padding">
        <h1 className="text-4xl font-bold text-center max-w-[calc(var(--spacing-content-width)-64px)]">
          {title}
        </h1>
        <p className="text-lg text-center max-w-[800px]">{description}</p>
        {author && <Author author={author} date={date} />}
        {link && (
          <CustomLink href={link}>
            <span>Leer más</span>
            <CgArrowRight className="w-4 h-4" />
          </CustomLink>
        )}
      </div>
    </div>
  );
};
