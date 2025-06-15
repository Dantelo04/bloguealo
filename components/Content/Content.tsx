import React from 'react'

interface ContentProps {
    children: React.ReactNode;
    minHeight?: string;
    gap?: string;
}

export const Content = ({ children, minHeight, gap = 'gap-theme-xl' }: ContentProps) => {
  return (
    <main className={`flex flex-col ${gap} w-full items-center py-theme-md px-horizontal-padding ${minHeight} bg-secondary`}>
        {children}
    </main>
  )
}
