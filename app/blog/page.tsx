'use client'

import { Content } from '@/components/Content/Content'
import { BlogGallery } from '@/components/BlogGallery/BlogGallery'
import React, { useEffect, useState } from 'react'
import { SearchInput } from '@/components/SearchInput/SearchInput'
import { Tag } from '@/components/BlogCard/Tag'
import { BLOG_TAGS } from '../../assets/constants'
import { getAllBlogs } from '@/lib/actions/getAllBlogs'
import { Loader } from '@/components/Loader/Loader'
import { CONTENT_MIN_HEIGHT } from '@/assets/constants'
import { Blog } from '@/lib/models/Blog'

export default function BlogPage() {
  const [search, setSearch] = useState('')
  const [selectedTag, setSelectedTag] = useState<string[] | null>(null)
  const [data, setData] = useState<Blog[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true)
      const blogs = await getAllBlogs()
      setData(blogs)
      setIsLoading(false)
    }
    fetchBlogs()
  }, [])

  const handleTagClick = (tag: string) => {
    if (selectedTag?.includes(tag)) {
      setSelectedTag(selectedTag.filter((t) => t !== tag))
    } else {
      setSelectedTag([...(selectedTag || []), tag])
    }
  }

  return (
    <Content minHeight={CONTENT_MIN_HEIGHT} gap='gap-1'>
      <div className='flex flex-col gap-theme-sm w-full max-w-[var(--spacing-content-width)]'>
        <SearchInput value={search} onChange={(e) => setSearch(e.target.value)}/>
        <div className='flex flex-wrap gap-2'>
            {BLOG_TAGS.map((tag) => (
              <Tag key={tag} selected={selectedTag?.includes(tag)} onClick={() => handleTagClick(tag)}>{tag}</Tag>
            ))}
        </div>
      </div>
      {isLoading ? <Loader /> : <BlogGallery title='' blogs={data}/>}
    </Content>
  )
}
