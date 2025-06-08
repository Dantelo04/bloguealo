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
import { CONTENT_MIN_HEIGHT } from "@/assets/constants";

export default function BlogPost() {
  const { id } = useParams();

  const { data: session, isPending: isSessionPending } =
    authClient.useSession();

  const { data: blog, isLoading } = useQuery({
    queryKey: ["blog", { id }, { session }],
    queryFn: () => getBlogById(id as string),
  });

  return (
    <>
      <div className="w-full flex justify-center lg:pt-theme-sm">
        {blog && <BlogHighlight blog={blog} />}
      </div>
      <Content
        minHeight={CONTENT_MIN_HEIGHT}
        gap="lg:gap-theme-lg gap-theme-md"
      >
        {isLoading || isSessionPending ? (
          <Loader />
        ) : (
          blog && (
            <>
              <div className="flex lg:flex-row flex-col-reverse w-full lg:gap-theme-xl gap-2 max-w-[var(--spacing-content-width)] lg:min-h-screen lg:justify-start justify-end relative">
                <BlogAside
                  likes={blog?.likes.length || 0}
                  liked={blog?.likes.includes(session?.user?.id || "")}
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
                likes={blog?.likes.length || 0}
                liked={blog?.likes.includes(session?.user?.id || "")}
                blogId={blog?._id || ""}
              />
            </>
          )
        )}
      </Content>
    </>
  );
}
