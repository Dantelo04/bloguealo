import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'

interface LikeButtonProps {
    liked: boolean;
    onClick: () => void;
}

export const LikeButton = ({ liked, onClick }: LikeButtonProps) => {
  return (
    <button onClick={onClick} className="cursor-pointer">
        {liked ? <FaHeart className='w-6 h-6 text-red-600'/> : <FaRegHeart className='w-6 h-6'/>}
    </button>
  )
}
