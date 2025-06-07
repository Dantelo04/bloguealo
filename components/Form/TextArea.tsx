import React from "react";

interface TextAreaProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  minHeight?: number;
  className?: string;
  required?: boolean;
}

export const TextArea = ({
  name,
  placeholder,
  value,
  onChange,
  minHeight,
  className,
  required,
}: TextAreaProps) => {
  return (
    <textarea
      className={`w-full border border-black rounded-md px-2 py-1 outline-none ${className}`}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      style={{ resize: "none", minHeight: `${minHeight}px` }}
    ></textarea>
  );
};
