'use client'

import { Content } from '@/components/Content/Content'
import { BlogGallery } from '@/components/BlogGallery/BlogGallery'
import React, { useState } from 'react'
import { SearchInput } from '@/components/SearchInput/SearchInput'
import { Tag } from '@/components/BlogPreview/Tag'
import { BLOG_TAGS } from '../assets/constants'

export default function Blog() {
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState(BLOG_TAGS)
  const [selectedTag, setSelectedTag] = useState<string[] | null>(null)

  const handleTagClick = (tag: string) => {
    if (selectedTag?.includes(tag)) {
      setSelectedTag(selectedTag.filter((t) => t !== tag))
    } else {
      setSelectedTag([...(selectedTag || []), tag])
    }
  }

  return (
    <Content minHeight='min-h-screen' gap='gap-1'>
      <div className='flex flex-col gap-theme-sm w-full max-w-[var(--spacing-content-width)]'>
        <SearchInput value={search} onChange={(e) => setSearch(e.target.value)}/>
        <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <Tag key={tag} selected={selectedTag?.includes(tag)} onClick={() => handleTagClick(tag)}>{tag}</Tag>
            ))}
        </div>
      </div>
      <BlogGallery title=''/>
    </Content>
  )
}
