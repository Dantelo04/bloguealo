import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

interface AccountButtonProps {
  avatarImage?: string | null;
  width: number;
  height: number;
  onClick?: () => void;
}

export const AccountButton = ({
  avatarImage,
  width,
  height,
  onClick,
}: AccountButtonProps) => {
  return (
    <Link href="/account" onClick={onClick} className="active:scale-90 transition-all duration-100">
      {avatarImage ? (
        <Image
          src={avatarImage}
          alt="avatar"
          width={width}
          height={height}
          className="rounded-full"
        />
      ) : (
        <div className="bg-primary-fade rounded-full flex items-center justify-center" style={{ width: `${width}px`, height: `${height}px` }}>
          <FaUser className="text-primary w-3 h-3" />
        </div>
      )}
    </Link>
  );
};
