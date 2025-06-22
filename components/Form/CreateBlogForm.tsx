"use client";

import React, { useEffect, useState } from "react";
import { Input } from "./Input";
import { Button } from "../Button/Button";
import { TextArea } from "./TextArea";
import { BlogPreview } from "../BlogPreview/BlogPreview";
import { Tag } from "../BlogCard/Tag";
import { BLOG_TAGS, MIN_TAGS, PLACEHOLDER_BLOG, TAG_LIMIT } from "@/assets/constants";
import { Error } from "./Error";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UploadImage } from "../UploadImage/UploadImage";
import { Blog } from "@/lib/models/Blog";

interface CreateBlogFormProps {
  blog?: Blog;
}

export const CreateBlogForm = ({
  blog
}: CreateBlogFormProps) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false); 
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    title: "" ,
    content: PLACEHOLDER_BLOG,
    description: "",
    image: "",
    tags: tags,
  });

  useEffect(()=> {
    setMounted(true);
  }, [mounted])


  useEffect(()=> {
    if (blog) {
      setTags(blog.tags)
      setData({
        title: blog.title,
        content: blog.content,
        description: blog.description,
        image: blog.image || "",
        tags: blog.tags
      })
    }
    setLoading(false);
  }, [blog])

  

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

  const handleImageChange = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData({ ...data, image: reader.result as string });
      }
      reader.readAsDataURL(file);
    }
  }

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
        image: data.image,
      };

      console.log("Payload:", payload);

      if(blog && !loading) {
        await axios.put("/api/blog", {
          id: blog._id,
          ...payload
        });
      } else {
        await axios.post("/api/blog", payload);
      }

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
            <UploadImage value={data.image} onChange={handleImageChange} />
          
            <Input
              type="text"
              name="title"
              placeholder="Título*"
              value={data.title}
              onChange={handleChange}
              required
            />
            
            <TextArea
              name="description"
              placeholder="Descripción*"
              value={data.description}
              onChange={handleChange}
              className="h-full"
              maxLength={130}
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
            {!blog && (loading ? "Creando..." : "Crear publicación")}
            {blog && (loading ? "Actualizando..." : "Editar publicación")}
          </Button>
          {error && <Error error={error} />}
        </div>
        <div className="flex flex-col gap-theme-md w-full">
          <label htmlFor="content">Contenido*</label>
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
