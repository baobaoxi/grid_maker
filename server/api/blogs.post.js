import { readBody } from 'h3'
import dbConnect from '~/server/db/connect.js'
import Blog from '~/server/models/Blog.js'

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default defineEventHandler(async (event) => {
  try {
    await dbConnect()
    const body = await readBody(event)
    
    if (!body.title || !body.slug || !body.content) {
      return { success: false, error: 'Title, slug, and content are required' }
    }
    
    const blogData = {
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt || '',
      content: body.content,
      date: body.date || formatDate(new Date()),
      image: body.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      published: body.published !== false
    }
    
    const blog = await Blog.create(blogData)
    
    return { success: true, data: blog }
  } catch (error) {
    console.error('Error creating blog:', error)
    return { success: false, error: error.message || 'Failed to create blog' }
  }
})