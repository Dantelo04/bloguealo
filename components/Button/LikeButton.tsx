import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'

interface LikeButtonProps {
    liked: boolean;
    onClick?: () => void;
    likes?: number;
}

export const LikeButton = ({ liked, onClick, likes }: LikeButtonProps) => {
  return (
    <div className='inline-flex items-center gap-2'>
        {likes && <span className='font-bold'>{likes}</span>}
        <button onClick={onClick ? onClick : undefined} className="cursor-pointer">
            {liked ? <FaHeart className='w-6 h-6 text-red-600'/> : <FaRegHeart className='w-6 h-6'/>}
        </button>
    </div>
  )
}
