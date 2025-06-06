import React, { useState } from "react";
import { CgEye } from "react-icons/cg";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hideButton?: boolean;
}

export const Input = ({
  type,
  placeholder,
  name,
  value,
  hideButton,
  onChange,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative border-b border-black w-full">
      <input
        className="py-2 w-full outline-none"
        type={type === "password" && showPassword ? "text" : type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {hideButton && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-0 top-2.5"
        >
          <CgEye
            className={`w-5 h-5 cursor-pointer ${
              showPassword ? "text-primary" : "text-primary/50"
            }`}
          />
        </button>
      )}
    </div>
  );
};
