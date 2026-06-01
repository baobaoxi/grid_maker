import { readBody } from 'h3'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dbConnect from '~/server/db/connect.js'
import User from '~/server/models/User.js'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

export default defineEventHandler(async (event) => {
  try {
    await dbConnect()
    const body = await readBody(event)
    const { username, password } = body
    
    if (!username || !password) {
      return { success: false, error: 'Username and password are required' }
    }
    
    const user = await User.findOne({ username }).lean()
    if (!user) return { success: false, error: 'Invalid credentials' }
    
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return { success: false, error: 'Invalid credentials' }
    
    const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, { expiresIn: '7d' })
    return { success: true, token, user: { id: user._id, username: user.username } }
  } catch (error) {
    console.error('Login error:', error)
    return { success: false, error: error.message || 'Login failed' }
  }
})