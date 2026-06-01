import dbConnect from '~/server/db/connect.js'
import Blog from '~/server/models/Blog.js'

export default defineEventHandler(async () => {
  try {
    await dbConnect()
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 }).lean()
    return { success: true, data: blogs }
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return { success: false, error: error.message, data: [] }
  }
})