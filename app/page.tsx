'use client'

import { BlogGallery } from "@/components/BlogGallery/BlogGallery";
import { BlogHighlight } from "@/components/BlogHighlight/BlogHighlight";
import { Content } from "@/components/Content/Content";
import { getAllBlogs } from "@/lib/actions/getAllBlogs";
import { Blog } from "@/lib/models/Blog";
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlogs = async () => {
    const blogs = await getAllBlogs();
    setBlogs(blogs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Content minHeight="min-h-screen">
      <BlogHighlight
        title="Importance of AI in the future"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        image="https://picsum.photos/1200/500"
        author="John Doe"
        date="2021-01-01"
        link="/blog/1"
      />
      <BlogGallery link="/blog" blogs={blogs} />
    </Content>
  );
}
