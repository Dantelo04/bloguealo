import { deleteBlogById } from "@/lib/actions/deleteBlogById";
import React from "react";
import { FaTrash } from "react-icons/fa";

interface DeleteButtonProps {
  blog_id: string;
}

export const DeleteButton = ({ blog_id }: DeleteButtonProps) => {

  const handleDelete = async () => {
    await deleteBlogById(blog_id);
    window.location.reload();
  };

  return (
    <button className="absolute top-2 right-2 bg-red-500/20 border-red-500 border text-red-500 p-2 rounded-md cursor-pointer hover:bg-red-500/30" onClick={handleDelete}>
      <FaTrash className="w-4 h-4" />
    </button>
  );
};
