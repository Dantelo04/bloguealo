'use client'

import { deleteBlogById } from "@/lib/actions/deleteBlogById";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

interface DeleteButtonProps {
  blog_id: string;
}

export const DeleteButton = ({ blog_id }: DeleteButtonProps) => {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(()=> {
    setLoading(false);
    setMounted(true);
  }, [loading])

  const handleDelete = async () => {
    setLoading(true);
    await deleteBlogById(blog_id);
    window.location.reload();
  };

  if(!mounted) return;

  return (
    <button className="absolute top-2 right-2 bg-red-500/20 border-red-500 backdrop-blur border text-red-500 p-2 rounded-md cursor-pointer hover:bg-red-500/30 active:scale-90 transition-all duration-100 active:bg-red-500/30 z-20" onClick={handleDelete} disabled={loading}>
      {!loading && <FaTrash className="lg:size-4 size-5" />}
      {loading && <FaTrash className="lg:size-4 size-5 opacity-80 animate-pulse cursor-not-allowed" />}
    </button>
  );
};
