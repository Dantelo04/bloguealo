import { Content } from "@/components/Content/Content";
import React from "react";
import { BlogHighlight } from "@/components/BlogHighlight/BlogHighlight";
import { BlogFooter } from "@/components/BlogFooter/BlogFooter";
import { BlogAside } from "@/components/BlogAside/BlogAside";
import { BlogContent } from "@/components/BlogContent/BlogContent";
import { getBlogById } from "@/lib/actions/getBlogById";
import { CONTENT_MIN_HEIGHT } from "@/assets/constants";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const blog = await getBlogById(id);

  return (
    <>
      <div className="w-full flex justify-center lg:pt-theme-sm">
        {blog && <BlogHighlight blog={blog} />}
      </div>
      <Content
        minHeight={CONTENT_MIN_HEIGHT}
        gap="lg:gap-theme-lg gap-theme-md"
      >
        <div className="flex lg:flex-row flex-col-reverse w-full lg:gap-theme-xl gap-2 max-w-[var(--spacing-content-width)] lg:min-h-screen lg:justify-start justify-end relative">
          <BlogAside
            likes={blog?.likes || []}
            author={blog?.author_id || null}
            date={
              blog?.createdAt instanceof Date
                ? blog.createdAt.toISOString()
                : new Date().toISOString()
            }
            blogId={blog?._id || ""}
          />
          <BlogContent content={blog?.content || ""} />
        </div>
        <BlogFooter
          likes={blog?.likes || []}
          blogId={blog?._id || ""}
        />
      </Content>
    </>
  );
}
