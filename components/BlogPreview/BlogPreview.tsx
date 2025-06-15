"use client";

import React from "react";
import { BlogContent } from "../BlogContent/BlogContent";
import { TitleSection } from "../TitleSection/TitleSection";

interface BlogPreviewProps {
  title: string;
  description: string;
  image: string;
  content: string;
}

export const BlogPreview = ({
  content,
}: BlogPreviewProps) => {
  return (
    <div className="flex flex-col gap-theme-lg w-full max-w-[var(--spacing-content-width)]">
      <TitleSection title="Vista previa del contenido" />
      <div className="flex lg:flex-row flex-col-reverse lg:justify-center justify-end w-full lg:gap-theme-xl gap-2 max-w-[var(--spacing-content-width)] relative">
        <BlogContent content={content} />
      </div>
    </div>
  );
};
