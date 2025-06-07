"use client";

import { BlogGallery } from "@/components/BlogGallery/BlogGallery";
import { BlogHighlight } from "@/components/BlogHighlight/BlogHighlight";
import { Content } from "@/components/Content/Content";
import { Loader } from "@/components/Loader/Loader";
import { DEFAULT_BLOG_IMAGE } from "@/assets/constants";
import { getAllBlogs } from "@/lib/actions/getAllBlogs";
import { getUserById } from "@/lib/actions/getUserById";
import { Blog } from "@/lib/models/Blog";
import { User } from "better-auth";
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [firstBlog, setFirstBlog] = useState<Blog | null>(null);
  const [author, setAuthor] = useState<User | null>(null);

  const fetchBlogs = async () => {
    const blogs = await getAllBlogs();
    const author = await getUserById(blogs[0].author_id);
    setBlogs(blogs);
    setFirstBlog(blogs[0]);
    setAuthor(author);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Content minHeight="min-h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BlogHighlight
            title={firstBlog?.title || "No title"}
            description={firstBlog?.description || "No description"}
            image={firstBlog?.image || DEFAULT_BLOG_IMAGE}
            author={author}
            date={firstBlog?.createdAt ? new Date(firstBlog.createdAt).toISOString() : new Date().toISOString()}
            link={`/blog/${firstBlog?._id}`}
          />
          <BlogGallery link="/blog" blogs={blogs} />
        </>
      )}
    </Content>
  );
}
