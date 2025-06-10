import React from 'react'
import { FaSearch } from 'react-icons/fa'

interface SearchInputProps {
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

export const SearchInput = ({ placeholder = 'Buscar', onChange, value }: SearchInputProps) => {
  return (
    <div className='inline-flex items-center relative w-full'>
        <input type="text" placeholder={placeholder} className='w-full rounded-md border border-border p-2 outline-primary' onChange={onChange} value={value}/>
        <FaSearch className='absolute right-3 top-1/2 -translate-y-1/2 text-black' />
    </div>
  )
}
