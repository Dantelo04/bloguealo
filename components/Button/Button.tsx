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
  className = "px-4 py-2 rounded-md",
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
      className={`${className} ${variantStyle} cursor-pointer hover:bg-primary/75 transition-colors duration-200`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
