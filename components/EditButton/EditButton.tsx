import React from "react";
import { BiSolidPencil } from "react-icons/bi";

interface EditButtonProps {
  blog_id: string;
}

export const EditButton = ({ blog_id }: EditButtonProps) => {
  return (
    <a
      href={`edit/${blog_id}`}
      className="absolute top-2 right-14 bg-neutral-500/20 border-neutral-200 backdrop-blur border text-neutral-200 p-2 rounded-md cursor-pointer hover:bg-neutral-200/30 active:scale-90 transition-all duration-100 active:bg-neutral-200/30 z-20"
    >
      <BiSolidPencil className="lg:size-4 size-5" />
    </a>
  );
};
