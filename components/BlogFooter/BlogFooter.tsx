import React from 'react'
import { SocialMediaButton } from '../Button/SocialMediaButton'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { LikeButton } from '../Button/LikeButton'

interface BlogFooterProps {
    likes: number;
    liked: boolean;
    blogId: string;
}

export const BlogFooter = ({ likes, liked, blogId }: BlogFooterProps) => {
  return (
    <div className='lg:inline-flex hidden justify-between items-center w-full max-w-[var(--spacing-content-width)] py-theme-sm border-t border-black'>
        <div className='flex gap-theme-sm'>
            <SocialMediaButton onClick={() => {}}>
                <FaFacebook />
            </SocialMediaButton>
            <SocialMediaButton onClick={() => {}}>
                <FaTwitter />
            </SocialMediaButton>
            <SocialMediaButton onClick={() => {}}>
                <FaInstagram />
            </SocialMediaButton>
        </div>
        <LikeButton liked={liked} likes={likes} blogId={blogId}/>
    </div>
  )
}