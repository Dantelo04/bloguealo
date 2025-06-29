import React from "react";
import { FaSearch } from "react-icons/fa";

interface SearchInputProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onSearch?: () => void;
  loading?: boolean;
}

export const SearchInput = ({
  placeholder = "Buscar",
  onChange,
  value,
  onSearch,
  loading,
}: SearchInputProps) => {
  if (loading)
    return (
      <div className="inline-flex items-center relative w-full animate-pulse brightness-75 cursor-wait">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full rounded-md border border-border p-2 outline-primary"
          onChange={onChange}
          value={value}
        />
        <FaSearch
          className="absolute right-3 top-1/2 -translate-y-1/2 text-black"
          onClick={onSearch}
        />
      </div>
    );

  return (
    <div className="inline-flex items-center relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-md border border-border p-2 outline-primary"
        onChange={onChange}
        value={value}
      />
      <FaSearch
        className="absolute right-3 top-1/2 -translate-y-1/2 text-black cursor-pointer"
        onClick={onSearch}
      />
    </div>
  );
};
