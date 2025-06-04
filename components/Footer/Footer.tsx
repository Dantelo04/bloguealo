import React from 'react'
import { Logo } from '../Logo/Logo'

export const Footer = () => {
  return (
    <div className='w-full bg-primary py-theme-lg text-white flex justify-center'>
        <div className='w-full max-w-[calc(var(--spacing-content-width)+32px)] px-horizontal-padding'>
            <div className='flex justify-between items-center'>
                    <Logo />
                    <p>Derechos reservados &copy; {new Date().getFullYear()} por <a href="https://dantelo.dev" target='_blank' className='text-white/75'>Dante</a></p>
            </div>
        </div>
    </div>
  )
}
