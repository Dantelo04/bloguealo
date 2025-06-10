'use client'

import React, { useEffect, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { giveLikeToBlog } from '@/lib/actions/giveLikeToBlog';
import { authClient } from '@/lib/auth-client';

interface LikeButtonProps {
    likes?: string[];
    blogId: string | null;
}

export const LikeButton = ({ likes, blogId }: LikeButtonProps) => {
  const [like, setLike] = useState(false);
  const [likesCount, setLikesCount] = useState(likes?.length || 0);
  const { data: session, isPending: isSessionPending } = authClient.useSession();
  const [isPending, setIsPending] = useState(false);

  const handleLike = async () => {
    setIsPending(true);
    await giveLikeToBlog(blogId || "");
    setIsPending(false);
    setLike(!like);
    setLikesCount(like ? likesCount - 1 : likesCount + 1);
  }

  useEffect(() => {
    setLike(likes?.includes(session?.user?.id || "") || false);
  }, [likes, session]);



  return (
    <div className={`inline-flex items-center gap-2 active:scale-80 transition-all duration-100 ${!blogId || isSessionPending || !session ? "opacity-50" : ""}`}>
        {likesCount && <span className='font-bold'>{likesCount}</span>}
        <button onClick={blogId && session ? () => handleLike() : undefined} className={isPending || !blogId || !session || isSessionPending ? "cursor-not-allowed animate-pulse" : "cursor-pointer"} disabled={isPending || !blogId || !session || isSessionPending}>
            {like ? <FaHeart className='w-6 h-6 text-red-600'/> : <FaRegHeart className='w-6 h-6'/>}
        </button>
    </div>
  )
}
