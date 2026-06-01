import { createUser, createBlog, getAllUsers, getAllBlogs } from '../server/utils/fileStorage'
import bcrypt from 'bcryptjs'

async function initializeData() {
  try {
    console.log('🔄 Initializing blog data...\n')

    // Create default admin user
    console.log('👤 Creating default admin user...')
    const existingUsers = await getAllUsers()
    
    if (existingUsers.length === 0) {
      const hashedPassword = await bcrypt.hash('admin123', 10)
      await createUser({
        username: 'admin',
        password: hashedPassword
      })
      console.log('   ✅ Admin user created')
      console.log('   📝 Username: admin')
      console.log('   📝 Password: admin123\n')
    } else {
      console.log('   ℹ️  Admin user already exists\n')
    }

    // Create sample blogs
    console.log('📝 Creating sample blog posts...')
    const existingBlogs = await getAllBlogs()
    
    if (existingBlogs.length === 0) {
      const sampleBlogs = [
        {
          title: 'How-To Guide for Putting a Grid on a Photo',
          slug: 'how-to-put-grid-on-photo',
          excerpt: 'Learn how to add grid to photo files digitally in seconds. Step-by-step tutorial for adding gridlines to any picture without complex software.',
          content: '<h2>Step-by-Step Guide: How to Put a Grid on a Picture for Drawing</h2><p>The hardest part of starting a new project should not be preparing your reference photo...</p>',
          date: 'May 31, 2026',
          image: 'https://6a1650b35d38b1b9b092a71f.imgix.net/blog1.png',
          published: true
        },
        {
          title: 'The Ultimate Guide to Grid Drawing',
          slug: 'the-ultimate-guide-to-grid-drawing',
          excerpt: 'Master the grid method for perfect proportions. Learn how to use grid drawing to train your eye and create accurate artwork every time.',
          content: '<h2>The Grid Method: How to Use Grid Drawing for Perfect Proportions</h2><p>Have you ever spent hours on a sketch, only to step back and realize the proportions are completely warped?</p>',
          date: 'May 29, 2026',
          image: 'https://6a1650b35d38b1b9b092a71f.imgix.net/blog1.png',
          published: true
        }
      ]

      for (const blog of sampleBlogs) {
        await createBlog(blog)
      }
      console.log(`   ✅ Created ${sampleBlogs.length} sample blog posts\n`)
    } else {
      console.log(`   ℹ️  ${existingBlogs.length} blog posts already exist\n`)
    }

    console.log('✅ Initialization complete!\n')
    console.log('📌 Next steps:')
    console.log('   1. Start the dev server: npm run dev')
    console.log('   2. Go to: http://localhost:3000/admin/blogs')
    console.log('   3. Login with: admin / admin123\n')

  } catch (error) {
    console.error('❌ Error:', error)
  }
}

initializeData()
