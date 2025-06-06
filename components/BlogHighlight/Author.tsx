import React from "react";
import Image from "next/image";

interface AuthorProps {
  name: string;
  image: string;
  date?: string;
  onClick?: () => void;
  background?: boolean;
}

export const Author = ({
  name,
  image,
  date,
  onClick,
  background = true,
}: AuthorProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex gap-theme-sm items-center w-fit rounded-4xl hover:bg-white/20 transition-colors duration-300 cursor-pointer ${background ? 'bg-white/15 py-2 pl-3 pr-6' : 'bg-transparent pl-0 pr-0 py-0'}`}
    >
      <Image
        src={image}
        alt={name}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <h1>{name}</h1>
        <p className={`text-sm ${background ? 'text-white/50' : 'text-black/50'}`}>{date}</p>
      </div>
    </button>
  );
};
