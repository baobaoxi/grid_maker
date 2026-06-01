import { readBody } from 'h3'
import bcrypt from 'bcrypt'
import dbConnect from '~/server/db/connect.js'
import User from '~/server/models/User.js'

export default defineEventHandler(async (event) => {
  try {
    await dbConnect()
    const body = await readBody(event)
    const { username, password } = body
    
    if (!username || !password) {
      return { success: false, error: 'Username and password are required' }
    }
    
    if (password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters' }
    }
    
    const existingUser = await User.findOne({ username }).lean()
    if (existingUser) return { success: false, error: 'User already exists' }
    
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({ username, password: hashedPassword })
    
    return { success: true, message: 'User created successfully', user: { id: user._id, username: user.username } }
  } catch (error) {
    console.error('Registration error:', error)
    return { success: false, error: error.message || 'Registration failed' }
  }
})