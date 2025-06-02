"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
}

export const Button = ({
  children,
  onClick,
  className,
  variant = "primary",
}: ButtonProps) => {
  const variantStyle =
    variant === "primary"
      ? "bg-primary text-secondary"
      : variant === "secondary"
      ? "bg-secondary border-tertiary border-1 hover:bg-tertiary/5 text-black"
      : variant === "tertiary"
      ? "bg-tertiary text-secondary"
      : "";

  return (
    <button
      className={`px-6 py-2 rounded-4xl ${variantStyle} cursor-pointer hover:bg-primary/75 transition-all duration-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
