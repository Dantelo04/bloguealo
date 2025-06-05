import React from 'react'
import { SocialMediaButton } from '../Button/SocialMediaButton'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { LikeButton } from '../Button/LikeButton'

interface BlogFooterProps {
    likes: number;
    liked: boolean;
    onClick: () => void;
}

export const BlogFooter = ({ likes, liked, onClick }: BlogFooterProps) => {
  return (
    <div className='inline-flex justify-between items-center w-full max-w-[var(--spacing-content-width)] py-theme-sm border-t border-black'>
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
        <div className='flex items-center gap-2 px-theme-2'>
            <p>{likes}</p>
            <LikeButton liked={liked} onClick={onClick}/>
        </div>
    </div>
  )
}