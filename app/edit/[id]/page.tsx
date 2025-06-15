import { CONTENT_MIN_HEIGHT } from "@/assets/constants";
import { Content } from "@/components/Content/Content";
import { CreateBlogForm } from "@/components/Form/CreateBlogForm";
import { TitleSection } from "@/components/TitleSection/TitleSection";
import { getBlogById } from "@/lib/actions/getBlogById";
import { notFound } from "next/navigation";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const blog = await getBlogById(id);

  if (!blog) {
    return notFound();
  }

  return (
    <Content minHeight={CONTENT_MIN_HEIGHT} gap="lg:gap-theme-lg gap-theme-md">
      <TitleSection title="Editar publicación" />
      <CreateBlogForm blog={blog}/>
    </Content>
  );
}
