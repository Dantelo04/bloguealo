import React from 'react'

interface ContentProps {
    children: React.ReactNode;
    minHeight?: string;
}

export const Content = ({ children, minHeight }: ContentProps) => {
  return (
    <main className={`flex flex-col gap-theme-xl w-full items-center py-theme-md px-horizontal-padding ${minHeight}`}>
        {children}
    </main>
  )
}
