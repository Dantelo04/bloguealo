import React from "react";
import Image from "next/image";
import { DateFormat } from "@/assets/constants";
import { User } from "better-auth";
import { UserIcon } from "../UserIcon/UserIcon";

interface AuthorProps {
  date?: string;
  onClick?: () => void;
  background?: boolean;
  author?: User | null;
}

export const Author = ({
  author,
  date,
  onClick,
  background = true,
}: AuthorProps) => {
  return (
    <button
      onClick={onClick || (() => {})}
      className={`flex gap-theme-sm items-center w-fit rounded-4xl hover:bg-white/20 transition-colors duration-300 cursor-pointer ${background ? 'bg-white/15 py-2 pl-3 pr-6' : 'bg-transparent pl-0 pr-0 py-0'}`}
    >
      <UserIcon image={author?.image} width={40} height={40} />
      <div className="flex flex-col text-start">
        <h6 className="text-start">{author?.name || "John Doe"}</h6>
        <p className={`text-sm ${background ? 'text-white/50' : 'text-black/50 text-start'}`}>{DateFormat(date || "")}</p>
      </div>
    </button>
  );
};
