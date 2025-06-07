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
import { authClient } from "@/lib/auth-client";

export default function BlogPost() {
  const { id } = useParams();
  const { data: blog, isPending, error } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => getBlogById(id as string),
  });

  const { data: session, isPending: isSessionPending } = authClient.useSession();

  return (
    <Content minHeight="min-h-screen" gap="lg:gap-theme-lg gap-theme-md">
      {isPending || isSessionPending ? <Loader /> : blog && (
        <>
          <BlogHighlight
            title={blog?.title || ""}
            description={blog?.description || ""}
            image={blog?.image || ""}
          />
          <div className="flex lg:flex-row flex-col-reverse w-full lg:gap-theme-xl gap-2 max-w-[var(--spacing-content-width)] min-h-screen relative">
              <BlogAside
                likes={blog?.likes.length || 0}
                liked={blog?.likes.includes(session?.user?.id || "")}
                author={blog?.author_id || null}
                date={blog?.createdAt instanceof Date ? blog.createdAt.toISOString() : new Date().toISOString()}
                blogId={blog?._id || ""}
              />
              <BlogContent content={blog?.content || ""} />
          </div>
          <BlogFooter likes={blog?.likes.length || 0} liked={blog?.likes.includes(session?.user?.id || "")} blogId={blog?._id || ""} />
        </>
      )}
    </Content>
  );
}
