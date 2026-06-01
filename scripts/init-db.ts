import dbConnect from './server/db/connect'
import User from './server/models/User'
import Blog from './server/models/Blog'

async function initializeDatabase() {
  try {
    console.log('Connecting to MongoDB...')
    await dbConnect()
    console.log('✓ Connected to MongoDB')

    // Create default admin user
    console.log('Creating default admin user...')
    
    const existingAdmin = await User.findOne({ username: 'admin' })
    
    if (existingAdmin) {
      console.log('✓ Admin user already exists')
    } else {
      const admin = new User({
        username: 'admin',
        password: 'admin123' // This will be hashed by the model
      })
      
      await admin.save()
      console.log('✓ Created admin user (username: admin, password: admin123)')
    }

    // Check if we have blogs
    const blogCount = await Blog.countDocuments()
    
    if (blogCount === 0) {
      console.log('Creating sample blog posts...')
      
      const sampleBlogs = [
        {
          title: 'How-To Guide for Putting a Grid on a Photo',
          slug: 'how-to-put-grid-on-photo',
          excerpt: 'Learn how to add grid to photo files digitally in seconds. Step-by-step tutorial for adding gridlines to any picture without complex software.',
          content: 'Full content here...',
          date: 'May 31, 2026',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
          published: true
        },
        {
          title: 'The Ultimate Guide to Grid Drawing',
          slug: 'the-ultimate-guide-to-grid-drawing',
          excerpt: 'Master the grid method for perfect proportions. Learn how to use grid drawing to train your eye and create accurate artwork every time.',
          content: 'Full content here...',
          date: 'May 29, 2026',
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
          published: true
        }
      ]
      
      for (const blog of sampleBlogs) {
        await new Blog(blog).save()
      }
      
      console.log('✓ Created sample blog posts')
    } else {
      console.log(`✓ ${blogCount} blog posts already exist`)
    }

    console.log('\n✅ Database initialization complete!')
    console.log('\nYou can now:')
    console.log('1. Start the dev server: npm run dev')
    console.log('2. Access admin panel: http://localhost:3000/admin/blogs')
    console.log('3. Login with: admin / admin123')
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

initializeDatabase()
