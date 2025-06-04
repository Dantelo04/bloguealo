import React from 'react'
import Image from 'next/image'

interface AuthorProps {
    name: string
    image: string
    date?: string
    onClick?: () => void
}

export const Author = ({ name, image, date, onClick }: AuthorProps) => {
  return (
    <button onClick={onClick} className='flex gap-theme-sm items-center w-fit py-2 pl-3 pr-6 bg-white/15 rounded-4xl hover:bg-white/20 transition-colors duration-300 cursor-pointer'>
        <Image src={image} alt={name} width={35} height={35} className='rounded-full'/>
        <div className='flex flex-col'>
            <h1>{name}</h1>
            <p className='text-sm text-white/50'>{date}</p>
        </div>
    </button>
  )
}
