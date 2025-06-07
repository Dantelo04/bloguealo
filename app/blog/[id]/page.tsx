"use client";

import { Content } from "@/components/Content/Content";
import { useParams } from "next/navigation";
import React from "react";
import { BlogHighlight } from "@/components/BlogHighlight/BlogHighlight";
import { BlogFooter } from "@/components/BlogFooter/BlogFooter";
import { BlogAside } from "@/components/BlogAside/BlogAside";
import { BlogContent } from "@/components/BlogContent/BlogContent";
import { getBlogById } from "@/lib/actions/getBlogById";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@/components/Loader/Loader";

export default function BlogPost() {
  const { id } = useParams();
  const { data, isPending, error } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => getBlogById(id as string),
  });

  return (
    <Content minHeight="min-h-screen" gap="lg:gap-theme-lg gap-theme-md">
      {isPending ? <Loader /> : data && (
        <>
          <BlogHighlight
            title={data?.title || ""}
            description={data?.description || ""}
            image={data?.image || ""}
          />
          <div className="flex lg:flex-row flex-col-reverse w-full lg:gap-theme-xl gap-2 max-w-[var(--spacing-content-width)] min-h-screen relative">
              <BlogAside
                likes={data?.likes.length || 0}
                liked={false}
                author={data?.author_id || null}
                date={data?.createdAt instanceof Date ? data.createdAt.toISOString() : new Date().toISOString()}
                onClick={() => {}}
              />
              <BlogContent content={data?.content || ""} />
          </div>
          <BlogFooter likes={100} liked={false} onClick={() => {}} />
        </>
      )}
    </Content>
  );
}
