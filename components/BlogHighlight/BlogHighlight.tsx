import React from 'react'
import Image from 'next/image'
import { Author } from './Author'
import { CustomLink } from '../CustomLink/CustomLink'
import { CgArrowRight } from 'react-icons/cg'

export const BlogHighlight = () => {
  return (
    <div className='flex flex-col gap-theme-xl w-full max-w-content-width relative rounded-xl border overflow-hidden h-[500px]'>
        <Image src="https://picsum.photos/1200/500" alt="Blog Highlight" width={1200} height={500} className='object-cover w-full h-full'/>
        <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-white gap-theme-sm px-horizontal-padding'>
            <h2>Importance of AI in the future</h2>
            <p className='text-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            <Author name='John Doe' image='https://picsum.photos/50/50' date='2021-01-01' />
            <CustomLink href='/blog/importance-of-ai-in-the-future'>
                <span>Read More</span>
                <CgArrowRight className='w-4 h-4'/>
            </CustomLink>
        </div>
    </div>
  )
}