import React from 'react'

interface TagProps {
    children: React.ReactNode;
    onClick?: () => void;
    selected?: boolean;
}

export const Tag = ({ children, onClick, selected }: TagProps) => {
  return (
    <button className={`bg-primary/15 text-primary px-2 py-1 rounded-sm w-fit text-xs uppercase font-semibold ${selected ? 'bg-primary/100 text-white' : ''} ${onClick ? 'cursor-pointer' : ''}`} onClick={onClick}>
        {children}
    </button>
  )
}
