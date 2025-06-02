import React from 'react'

interface ContentProps {
    children: React.ReactNode
}

export const Content = ({ children }: ContentProps) => {
  return (
    <div className='flex flex-col gap-theme-xl w-full items-center py-theme-md'>
        {children}
    </div>
  )
}
