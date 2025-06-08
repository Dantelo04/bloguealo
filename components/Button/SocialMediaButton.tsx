import Link from 'next/link';
import React from 'react'

interface SocialMediaButtonProps {
    children: React.ReactNode;
    link?: string;
}

export const SocialMediaButton = ({ children, link }: SocialMediaButtonProps) => {
  return (
    <Link className='rounded-full p-2 border border-black cursor-pointer' href={link || ""}>
        {children}
    </Link>
  )
}
