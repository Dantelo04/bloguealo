import React from 'react'
import { FaFileImage } from 'react-icons/fa'

interface UploadImageProps {
    onChange: (file: File | null) => void
    value: string
}

export const UploadImage = ({ onChange, value }: UploadImageProps) => {
  return (
    <div className={`relative w-full rounded-md lg:h-auto h-[150px] bg-primary/15 overflow-clip`}>
        <input type="file" accept="image/*" onChange={(e) => onChange(e.target.files?.[0] ?? null)} className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />
        <div className='w-full h-full flex items-center justify-center hover:opacity-85'>
            {value ? (
                <img src={value} alt="Uploaded" className='w-full h-full object-cover' />
            ) : (
                <div className='w-full h-full flex flex-col gap-2 items-center justify-center p-6'>
                    <FaFileImage className='size-6 color-primary'/>
                    <p className='text-sm text-primary capitalize'>Subir una imagen</p>
                </div>
            )}
        </div>
    </div>
  )
}