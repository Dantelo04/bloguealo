import React from 'react'
import { CgSpinner } from 'react-icons/cg'

export const Loader = () => {
  return (
    <div className='flex justify-center items-center'>
        <CgSpinner className='animate-spin text-primary/50' size={40} />
    </div>
  )
}
