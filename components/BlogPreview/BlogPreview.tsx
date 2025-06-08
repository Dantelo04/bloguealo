

import React from "react";
import { BlogContent } from "../BlogContent/BlogContent";
import { BlogHighlight } from "../BlogHighlight/BlogHighlight";
import { BlogAside } from "../BlogAside/BlogAside";
import { TitleSection } from "../TitleSection/TitleSection";
import { authClient } from "@/lib/auth-client";
import { DEFAULT_BLOG_IMAGE } from "@/assets/constants";
import { Blog } from "@/lib/models/Blog";
interface BlogPreviewProps {
  title: string;
  description: string;
  image: string;
  content: string;
}

export const BlogPreview = ({
  title,
  description,
  image,
  content,
}: BlogPreviewProps) => {
  const { data: session } = authClient.useSession();
  const today = new Date().toISOString();
  
  return (
    <div className="flex flex-col gap-theme-lg w-full max-w-[var(--spacing-content-width)]">
      <TitleSection title="Vista previa" />
      <div className="flex lg:flex-row flex-col-reverse w-full lg:gap-theme-xl gap-2 max-w-[var(--spacing-content-width)] min-h-screen relative">
          <BlogAside
            blogId={""}
            likes={0}
            liked={false}
            author={session?.user?.id || null}
            date={today}
          />
        <BlogContent content={content} />
      </div>
    </div>
  );
};
