import React from 'react'

interface SocialMediaButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

export const SocialMediaButton = ({ children, onClick }: SocialMediaButtonProps) => {
  return (
    <button className='rounded-full p-2 border border-black cursor-pointer' onClick={onClick}>
        {children}
    </button>
  )
}
