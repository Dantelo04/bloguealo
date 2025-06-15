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
  const [mounted, setMounted] = useState(false);
  const [like, setLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const { data: session, isPending: isSessionPending } = authClient.useSession();
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLikesCount(likes?.length || 0);
  }, [likes]);

  useEffect(() => {
    if (mounted) {
      setLike(likes?.includes(session?.user?.id || "") || false);
    }
  }, [likes, session, mounted]);

  const handleLike = async () => {
    setIsPending(true);
    await giveLikeToBlog(blogId || "");
    setIsPending(false);
    setLike(!like);
    setLikesCount(like ? likesCount - 1 : likesCount + 1);
  }

  if (!mounted) {
    return (
      <div className="inline-flex items-center gap-2 opacity-50">
        {likes && likes.length > 0 && <span className='font-bold'>{likes.length}</span>}
        <button disabled className="cursor-not-allowed">
          <FaRegHeart className='w-6 h-6'/>
        </button>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 active:scale-80 transition-all duration-100 ${!blogId || isSessionPending || !session ? "opacity-50" : ""}`}>
        {likesCount > 0 && <span className='font-bold'>{likesCount}</span>}
        <button onClick={blogId && session ? () => handleLike() : undefined} className={isPending || !blogId || !session || isSessionPending ? "cursor-not-allowed animate-pulse" : "cursor-pointer"} disabled={isPending || !blogId || !session || isSessionPending}>
            {like ? <FaHeart className='w-6 h-6 text-red-600'/> : <FaRegHeart className='w-6 h-6'/>}
        </button>
    </div>
  )
}
