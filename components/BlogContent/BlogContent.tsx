"use client";

import React from "react";
import DOMPurify from "isomorphic-dompurify";
import styles from "./BlogContent.module.css";

interface BlogContentProps {
  content: string;
}

export const BlogContent = ({ content }: BlogContentProps) => {
  return (
    <article
      className={`prose prose-lg w-full lg:w-[75%] flex flex-col gap-theme-md ${styles.blogContent}`}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content ? content : "Write your content here") }}
    />
  );
};
