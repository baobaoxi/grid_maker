import bcrypt from 'bcryptjs'
import fs from 'fs/promises'

async function createAdmin() {
  try {
    const password = 'admin123'
    const hashedPassword = await bcrypt.hash(password, 10)
    
    console.log('🔐 Generated password hash:', hashedPassword)
    console.log('\n📝 Copy this hash to server/data/users.json:')
    console.log(hashedPassword)
    
    // Also update the file directly
    const users = [
      {
        "_id": Date.now().toString(),
        "username": "admin",
        "password": hashedPassword,
        "createdAt": new Date().toISOString()
      }
    ]
    
    await fs.writeFile(
      './server/data/users.json', 
      JSON.stringify(users, null, 2)
    )
    
    console.log('\n✅ Admin user created successfully!')
    console.log('\n📌 Credentials:')
    console.log('   Username: admin')
    console.log('   Password: admin123\n')
    
  } catch (error) {
    console.error('❌ Error:', error)
  }
}

createAdmin()
