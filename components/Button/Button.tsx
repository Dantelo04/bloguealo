"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

export const Button = ({
  children,
  className = "px-4 py-2 rounded-md",
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
  href,
}: ButtonProps) => {
  const variantStyle =
    variant === "primary"
      ? "bg-primary text-secondary"
      : variant === "secondary"
      ? "bg-transparent border-tertiary border-1 hover:bg-tertiary/5 text-black"
      : variant === "tertiary"
      ? "bg-tertiary text-secondary"
      : variant === "danger"
      ? "border-error text-error border-1 bg-error/15"
      : "";

  return (
    <button
      className={`${className} ${variantStyle} ${disabled ? "opacity-50 cursor-not-allowed" : ""} cursor-pointer hover:bg-opacity-75 transition-all duration-100 active:scale-95 active:bg-opacity-75`}
      onClick={onClick && !href ? onClick : href ? () => window.location.href = href : undefined}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
