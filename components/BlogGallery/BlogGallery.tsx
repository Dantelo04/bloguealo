import React from 'react'
import { CustomLink } from '../CustomLink/CustomLink'
import { CgArrowRight } from 'react-icons/cg'
import { BlogPreview } from '../BlogPreview/BlogPreview'

const blogsSample = [
  //generate 10 blogs with random data
  {
    id: 1,
    title: 'Blog 1',
    description: 'Description 1',
    image: 'https://picsum.photos/200/300',
    date: '2021-01-01',
    author: 'John Doe',
    authorImage: 'https://picsum.photos/50/50',
    likes: 10,
    tag: 'Technology',
    liked: false,
  },
  {
    id: 2,
    title: 'Blog 2',
    description: 'Description 2',
    image: 'https://picsum.photos/200/300',
    date: '2021-01-01',
    author: 'John Doe',
    authorImage: 'https://picsum.photos/50/50',
    likes: 10,
    tag: 'Technology',
    liked: false,
  },
  {
    id: 3,
    title: 'Blog 3',
    description: 'Description 3',
    image: 'https://picsum.photos/200/300',
    date: '2021-01-01',
    author: 'John Doe',
    authorImage: 'https://picsum.photos/50/50',
    likes: 10,
    tag: 'Technology',
    liked: false,
  },
  {
    id: 4,
    title: 'Blog 4',
    description: 'Description 4',
    image: 'https://picsum.photos/200/300',
    date: '2021-01-01',
    author: 'John Doe',
    authorImage: 'https://picsum.photos/50/50',
    likes: 10,
    tag: 'Technology',
    liked: false,
  },
  {
    id: 5,
    title: 'Blog 5',
    description: 'Description 5',
    image: 'https://picsum.photos/200/300',
    date: '2021-01-01',
    author: 'John Doe',
    authorImage: 'https://picsum.photos/50/50',
    likes: 10,
    tag: 'Technology',
    liked: false,
  },
  {
    id: 6,
    title: 'Blog 6',
    description: 'Description 6',
    image: 'https://picsum.photos/200/300',
    date: '2021-01-01',
    author: 'John Doe',
    authorImage: 'https://picsum.photos/50/50',
    likes: 10,
    tag: 'Technology',
    liked: false,
  },
  {
    id: 7,
    title: 'Blog 7',
    description: 'Description 7',
    image: 'https://picsum.photos/200/300',
    date: '2021-01-01',
    author: 'John Doe',
    authorImage: 'https://picsum.photos/50/50',
    likes: 10,
    tag: 'Technology',
    liked: false,
  },
  {
    id: 8,
    title: 'Blog 8',
    description: 'Description 8',
    image: 'https://picsum.photos/200/300',
    date: '2021-01-01',
    author: 'John Doe',
    authorImage: 'https://picsum.photos/50/50',
    likes: 10,
    tag: 'Technology',
    liked: false,
  },
  {
    id: 9,
    title: 'Blog 9',
    description: 'Description 9',
    image: 'https://picsum.photos/200/300',
    date: '2021-01-01',
    author: 'John Doe',
    authorImage: 'https://picsum.photos/50/50',
    likes: 10,
    tag: 'Technology',
    liked: false,
  },
  {
    id: 10,
    title: 'Blog 10',
    description: 'Description 10',
    image: 'https://picsum.photos/200/300',
    date: '2021-01-01',
    author: 'John Doe',
    authorImage: 'https://picsum.photos/50/50',
    likes: 10,
    tag: 'Technology',
    liked: false,
  },
]

interface BlogGalleryProps {
  blogs?: any[];
  title?: string;
  link?: string;
}

export const BlogGallery = ({ blogs = blogsSample, title = 'Últimas publicaciones', link }: BlogGalleryProps) => {
  return (
    <div className='flex flex-col gap-theme-sm w-full max-w-[calc(var(--spacing-content-width)+32px)] px-horizontal-padding'>
        <div className='inline-flex justify-between items-center'>
            <h3>{title}</h3>
            {link && 
            <CustomLink href={link}>
                <span>Ver todas</span>
                <CgArrowRight className='w-4 h-4'/>
            </CustomLink>
            }
        </div>
        <hr className='w-full border-t border-black'/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-theme-sm mt-2'>
            {blogs.map((blog, index) => (
                <BlogPreview key={blog.id} {...blog} />
            ))}
        </div>
    </div>
  )
}