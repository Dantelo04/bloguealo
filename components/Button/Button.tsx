"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  children,
  className = "px-4 py-2 rounded-md",
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) => {
  const variantStyle =
    variant === "primary"
      ? "bg-primary text-secondary"
      : variant === "secondary"
      ? "bg-transparent border-tertiary border-1 hover:bg-tertiary/5 text-black"
      : variant === "tertiary"
      ? "bg-tertiary text-secondary"
      : "";

  return (
    <button
      className={`${className} ${variantStyle} ${disabled ? "opacity-50 cursor-not-allowed" : ""} cursor-pointer hover:bg-primary/75 transition-colors duration-200 `}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
