import React from 'react'
import Image from 'next/image'
import { Author } from './Author'
import { CustomLink } from '../CustomLink/CustomLink'
import { CgArrowRight } from 'react-icons/cg'

interface BlogHighlightProps {
    title: string;
    description: string;
    image: string;
    author: string;
    date: string;
    link?: string;
}

export const BlogHighlight = ({ title, description, image, author, date, link }: BlogHighlightProps) => {
  return (
    <div className='flex flex-col gap-theme-xl w-full max-w-content-width relative rounded-xl border overflow-hidden h-[500px] '>
        <Image src="https://picsum.photos/1200/500" alt="Blog Highlight" width={1200} height={500} className='object-cover w-full h-full'/>
        <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-white gap-theme-sm px-horizontal-padding'>
            <h1 className='text-4xl font-bold text-center max-w-[calc(var(--spacing-content-width)-64px)]'>{title}</h1>
            <p className='text-lg text-center max-w-[500px]'>{description}</p>
            <Author name={author} image={image} date={date} />
            {link && <CustomLink href={link}>
                <span>Read More</span>
                <CgArrowRight className='w-4 h-4'/>
            </CustomLink>}
        </div>
    </div>
  )
}