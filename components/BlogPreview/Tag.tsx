import React from 'react'

interface TagProps {
    children: React.ReactNode;
}

export const Tag = ({ children }: TagProps) => {
  return (
    <div className='bg-gray-25 text-black/75 px-2 py-1 rounded-sm w-fit text-xs uppercase font-semibold'>
        {children}
    </div>
  )
}
