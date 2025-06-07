"use client";

import React, { useState } from "react";
import { Input } from "./Input";
import { Button } from "../Button/Button";
import { TextArea } from "./TextArea";
import { BlogPreview } from "../BlogPreview/BlogPreview";
import { Tag } from "../BlogCard/Tag";
import { BLOG_TAGS, MIN_TAGS, TAG_LIMIT } from "@/assets/constants";
import { Error } from "./Error";
import axios from "axios";
import { useRouter } from "next/navigation";

export const CreateBlogForm = () => {
  const router = useRouter();
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    title: "",
    content: "",
    description: "",
    image: "",
    tags: tags,
  });

  const handleTagClick = (tag: string) => {
    if (tags.includes(tag)) {
      const newTags = tags.filter((t) => t !== tag);
      setTags(newTags);
      setData((prev) => ({ ...prev, tags: newTags }));
    } else {
      const newTags = [...tags, tag];
      setTags(newTags);
      setData((prev) => ({ ...prev, tags: newTags }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    if (tags.length > TAG_LIMIT ) {
      setError(`Limite de tags alcanzado, puedes tener hasta ${TAG_LIMIT} tags`);
      return;
    } else if (tags.length < MIN_TAGS) {
      setError(`Debe tener al menos un tag`);
      return;
    }

    setError("");
    setLoading(true);

    try {
      const payload = {
        title: data.title,
        content: data.content,
        description: data.description,
        tags: tags,
        image: data.image !== "" ? data.image : "/default-background.webp",
      };

      await axios.post("/api/blog", payload);

      setData({
        title: "",
        content: "",
        description: "",
        image: "",
        tags: [],
      });
      setTags([]);
      setError(null);

      router.push("/");
      router.refresh();
    } catch (err) {
      if (axios.isAxiosError(err)) {        
        setError(err.response?.data?.error || "Error al crear la publicación");
      } else {
        setError("Error al crear la publicación");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-theme-xl w-full max-w-[var(--spacing-content-width)]">
      <form
        className="flex flex-col lg:flex-row gap-theme-xl w-full max-w-[var(--spacing-content-width)]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-theme-md w-full">
          <div className="flex flex-col gap-theme-md h-full">
            <Input
              type="text"
              name="title"
              placeholder="Título*"
              value={data.title}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="image"
              placeholder="URL de la imagen (opcional)"
              value={data.image}
              onChange={handleChange}
            />
            <TextArea
              name="description"
              placeholder="Descripción*"
              value={data.description}
              onChange={handleChange}
              className="h-full"
              required
            />
            <div className="flex flex-wrap gap-2">
              {BLOG_TAGS.map((tag) => (
                <Tag
                  key={tag}
                  selected={tags.includes(tag)}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Creando..." : "Crear publicación"}
          </Button>
          {error && <Error error={error} />}
        </div>
        <div className="flex flex-col gap-theme-md w-full">
          <TextArea
            name="content"
            placeholder="Contenido*"
            value={data.content}
            onChange={handleChange}
            minHeight={500}
            required
          />
        </div>
        
      </form>
      <BlogPreview
        title={data.title}
        description={data.description}
        image={data.image}
        content={data.content}
      />
    </div>
  );
};
