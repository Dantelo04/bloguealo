import React from "react";

interface SimpleBlogPreviewProps {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  index: number;
  borderBottom: boolean;
  link: string;
}

export const SimpleBlogPreview = ({
  title,
  description,
  image,
  date,
  author,
  index,
  borderBottom,
  link,
}: SimpleBlogPreviewProps) => {
  return (
    <div
      className={`flex flex-col gap-1 pb-3 cursor-pointer ${
        borderBottom ? "border-b border-black/15" : ""
      }`}
      onClick={() => {
        window.location.href = link;
      }}
    >
      <h5>{title}</h5>
      <div className="flex gap-2 text-sm text-black/75">
        <p>{author}</p>
        <p>|</p>
        <p>{date}</p>
      </div>
    </div>
  );
};
