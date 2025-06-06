import React from 'react'
import { SocialMediaButton } from '../Button/SocialMediaButton'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { LikeButton } from '../Button/LikeButton'
import { Author } from '../BlogHighlight/Author';
import { SimpleBlogList } from '../SimpleBlogList/SimpleBlogList';

interface BlogAsideProps {
    likes: number;
    liked: boolean;
    onClick: () => void;
}

export const BlogAside = ({ likes, liked, onClick }: BlogAsideProps) => {
  return (
    <div className='flex flex-col gap-theme-md w-full lg:w-[25%] sticky top-[94px] h-fit'>
        <hr className='lg:hidden border-black'/>
        <div className='inline-flex justify-between items-center'>
          <Author name='John Doe' image='https://picsum.photos/500/500' background={false} date='2021-01-01'/>  
          <LikeButton liked={liked} likes={likes} onClick={onClick}/>
        </div>
        <hr className='border-black'/>
        <SimpleBlogList/>
        <hr className='border-black'/>
        <h4 className='lg:flex hidden'>Compartir</h4>
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
    </div>
  )
}
