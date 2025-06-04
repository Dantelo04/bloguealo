import { Content } from '@/components/Content/Content'
import { BlogGallery } from '@/components/BlogGallery/BlogGallery'
import React from 'react'

export default function Blog() {
  return (
    <Content minHeight='min-h-screen'>
        <BlogGallery title='Todos los blogs'/>
    </Content>
  )
}
