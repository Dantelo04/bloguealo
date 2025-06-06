import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

interface AccountButtonProps {
  avatarImage?: string | null;
  width: number;
  height: number;
}

export const AccountButton = ({
  avatarImage,
  width,
  height,
}: AccountButtonProps) => {
  return (
    <Link href="/account">
      {avatarImage ? (
        <Image
          src={avatarImage}
          alt="avatar"
          width={width}
          height={height}
          className="rounded-full"
        />
      ) : (
        <div className="bg-primary/10 rounded-full flex items-center justify-center" style={{ width: `${width}px`, height: `${height}px` }}>
          <FaUser className="text-primary w-3 h-3" />
        </div>
      )}
    </Link>
  );
};
