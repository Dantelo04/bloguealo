import Link from 'next/link'
import React from 'react'

interface CustomLinkProps {
    href: string
    children: React.ReactNode
}

export const CustomLink = ({ href, children }: CustomLinkProps) => {
  return (
    <Link href={href} className='flex items-center gap-1'>
        {children}
    </Link>
  )
}
