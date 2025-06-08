"use client";

import { BlogGallery } from "@/components/BlogGallery/BlogGallery";
import { BlogHighlight } from "@/components/BlogHighlight/BlogHighlight";
import { Content } from "@/components/Content/Content";
import { Loader } from "@/components/Loader/Loader";
import { CONTENT_MIN_HEIGHT } from "@/assets/constants";
import { getAllBlogs } from "@/lib/actions/getAllBlogs";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  });

  return (
    <Content minHeight={CONTENT_MIN_HEIGHT}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BlogHighlight
            blog={blogs?.[0]}
            rounded
          />
          <BlogGallery link="/blog" blogs={blogs} />
        </>
      )}
    </Content>
  );
}
