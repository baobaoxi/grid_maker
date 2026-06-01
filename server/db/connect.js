import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || process.env.VERCEL_MONGODB_URI || 'mongodb+srv://Vercel-Admin-atlas-byzantine-horizon:4feGD1EEf0VxwFN2@atlas-byzantine-horizon.mtnc8ax.mongodb.net/grid-maker?retryWrites=true&w=majority'
const MONGODB_DB = process.env.MONGODB_DB || process.env.VERCEL_MONGODB_DATABASE || 'grid-maker'

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in .env')
}

let cached = global.mongoose
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) return cached.conn
  
  if (!cached.promise) {
    const opts = {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10
    }
    
    cached.promise = mongoose.connect(MONGODB_URI, opts)
      .then(mongoose => {
        console.log('✅ MongoDB connected to', MONGODB_DB)
        return mongoose
      })
      .catch(err => {
        console.error('❌ MongoDB connection error:', err.message)
        cached.promise = null
        throw err
      })
  }
  
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect
export { MONGODB_DB }