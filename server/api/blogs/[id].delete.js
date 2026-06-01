import dbConnect from '~/server/db/connect.js'
import Blog from '~/server/models/Blog.js'

export default defineEventHandler(async (event) => {
  try {
    await dbConnect()
    const { id } = event.context.params || {}
    
    if (!id) {
      return { success: false, error: 'Blog ID is required' }
    }
    
    const deleted = await Blog.findByIdAndDelete(id).lean()
    if (!deleted) return { success: false, error: 'Blog not found' }
    
    return { success: true, message: 'Blog deleted successfully' }
  } catch (error) {
    console.error('Error deleting blog:', error)
    return { success: false, error: error.message || 'Failed to delete blog' }
  }
})