import { readBody } from 'h3'
import dbConnect from '~/server/db/connect.js'
import Blog from '~/server/models/Blog.js'

export default defineEventHandler(async (event) => {
  try {
    await dbConnect()
    const body = await readBody(event)
    const { id } = event.context.params || {}
    
    if (!id) {
      return { success: false, error: 'Blog ID is required' }
    }
    
    const updates = {}
    if (body.title) updates.title = body.title
    if (body.slug) updates.slug = body.slug
    if (body.excerpt) updates.excerpt = body.excerpt
    if (body.content) updates.content = body.content
    if (body.date) updates.date = body.date
    if (body.image) updates.image = body.image
    if (body.published != null) updates.published = body.published
    updates.updatedAt = Date.now()
    
    const blog = await Blog.findByIdAndUpdate(id, updates, { new: true }).lean()
    if (!blog) return { success: false, error: 'Blog not found' }
    
    return { success: true, data: blog }
  } catch (error) {
    console.error('Error updating blog:', error)
    return { success: false, error: error.message || 'Failed to update blog' }
  }
})