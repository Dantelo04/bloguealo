"use client";

import { Content } from "@/components/Content/Content";
import { useParams } from "next/navigation";
import React from "react";
import { BlogHighlight } from "@/components/BlogHighlight/BlogHighlight";
import { BlogFooter } from "@/components/BlogFooter/BlogFooter";
import { BlogAside } from "@/components/BlogAside/BlogAside";
import { BlogContent } from "@/components/BlogContent/BlogContent";
import { SampleBlog } from "@/components/BlogContent/SampleBlog";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <Content minHeight="min-h-screen" gap="lg:gap-theme-lg gap-theme-md">
      <BlogHighlight
        title={`The Future of Web Development: Trends to Watch in 2024`}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        image="https://picsum.photos/1200/500"
        author="John Doe"
        date="2021-01-01"
      />
      <div className="flex lg:flex-row flex-col-reverse w-full lg:gap-theme-xl gap-2 max-w-[var(--spacing-content-width)] min-h-screen relative">
        <BlogAside likes={100} liked={false} onClick={() => {}} />
        <BlogContent content={SampleBlog}/>
      </div>
      <BlogFooter likes={100} liked={false} onClick={() => {}} />
    </Content>
  );
}
