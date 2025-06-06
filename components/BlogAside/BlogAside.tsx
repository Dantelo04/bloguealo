import React, { useEffect, useState } from 'react'
import { SocialMediaButton } from '../Button/SocialMediaButton'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { LikeButton } from '../Button/LikeButton'
import { Author } from '../BlogHighlight/Author';
import { SimpleBlogList } from '../SimpleBlogList/SimpleBlogList';
import { getUserById } from '@/lib/actions/getUserById';
import { useQuery } from '@tanstack/react-query';

interface BlogAsideProps {
    likes: number;
    liked: boolean;
    onClick?: () => void;
    author?: string | null;
    date?: string;
}

export const BlogAside = ({ likes, liked, onClick, author, date }: BlogAsideProps) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['user', author],
    queryFn: () => getUserById(author || ""),
  });

  return (
    <div className='flex flex-col gap-theme-md w-full lg:w-[25%] sticky top-[94px] h-fit'>
        <hr className='lg:hidden border-black'/>
        <div className='inline-flex justify-between items-center'>
          {!isPending && data && <Author author={data} background={false} date={date}/> } 
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
