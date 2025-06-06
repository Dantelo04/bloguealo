import React from "react";
import { IoAlertCircleOutline } from "react-icons/io5";

interface ErrorProps {
  error: string;
}

export const Error = ({ error }: ErrorProps) => {
  return (
    <div className="text-red-500 border border-red-500 text-sm inline-flex items-center gap-2 p-2 bg-red-500/5 rounded-md">
      <IoAlertCircleOutline className="w-5 h-5" />
      {error}
    </div>
  );
};
