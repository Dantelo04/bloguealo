import React from 'react'
import { SocialMediaButton } from '../Button/SocialMediaButton'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { LikeButton } from '../Button/LikeButton'

interface BlogFooterProps {
    likes: string[];
    blogId: string;
}

export const BlogFooter = ({ likes, blogId }: BlogFooterProps) => {
  return (
    <div className='lg:inline-flex hidden justify-between items-center w-full max-w-[var(--spacing-content-width)] py-theme-sm border-t border-black'>
        <div className='flex gap-theme-sm'>
            <SocialMediaButton link='https://www.facebook.com'>
                <FaFacebook />
            </SocialMediaButton>
            <SocialMediaButton link='https://www.twitter.com'>
                <FaTwitter />
            </SocialMediaButton>
            <SocialMediaButton link='https://www.instagram.com'>
                <FaInstagram />
            </SocialMediaButton>
        </div>
        <LikeButton likes={likes} blogId={blogId}/>
    </div>
  )
}