'use client'
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { giveLikeToBlog } from '@/lib/actions/giveLikeToBlog';
import { authClient } from '@/lib/auth-client';

interface LikeButtonProps {
    liked: boolean;
    likes?: number;
    blogId: string | null;
}

export const LikeButton = ({ liked, likes, blogId }: LikeButtonProps) => {
  const [like, setLike] = useState(liked);
  const [likesCount, setLikesCount] = useState(likes || 0);
  const { data: session, isPending: isSessionPending } = authClient.useSession();

  const { mutate: giveLikeToBlogMutation, isPending } = useMutation({
    mutationFn: giveLikeToBlog,
    onSuccess: () => {
      setLike(!like);
      setLikesCount(like ? likesCount - 1 : likesCount + 1);
    },
    onError: () => {
      setLike(!like);
      setLikesCount(likesCount);
    },
  });

  return (
    <div className={`inline-flex items-center gap-2 ${!blogId || isSessionPending || !session ? "opacity-50" : ""}`}>
        {likesCount && <span className='font-bold'>{likesCount}</span>}
        <button onClick={blogId && session ? () => giveLikeToBlogMutation(blogId) : undefined} className={isPending || !blogId || !session || isSessionPending ? "cursor-not-allowed" : "cursor-pointer"} disabled={isPending || !blogId || !session || isSessionPending}>
            {like ? <FaHeart className='w-6 h-6 text-red-600'/> : <FaRegHeart className='w-6 h-6'/>}
        </button>
    </div>
  )
}
