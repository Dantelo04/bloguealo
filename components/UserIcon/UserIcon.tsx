import React from "react";
import { FaUser } from "react-icons/fa";
import Image from "next/image";

interface UserIconProps {
  image?: string | null;
  width: number;
  height: number;
}

export const UserIcon = ({ image, width, height }: UserIconProps) => {
  return (
    <div className="bg-primary/10 rounded-full flex items-center justify-center" style={{ width: `${width}px`, height: `${height}px` }}>
      {image ? (
        <Image src={image} alt="user" width={width} height={height} />
      ) : (
        <FaUser className="text-primary w-3 h-3" />
      )}
    </div>
  );
};
