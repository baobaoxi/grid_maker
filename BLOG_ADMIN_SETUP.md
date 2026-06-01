# Blog Management System Setup Guide

## Prerequisites

1. **MongoDB** - Make sure MongoDB is installed and running locally
   - Install MongoDB: https://www.mongodb.com/docs/manual/installation/
   - Start MongoDB: `mongod`

## Setup Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Initialize Database

This will create:
- Default admin user (username: `admin`, password: `admin123`)
- Sample blog posts

```bash
npm run init-db
```

### 3. Start Development Server

```bash
npm run dev
```

## Access

### Admin Panel
- URL: http://localhost:3000/admin/blogs
- Login: `admin` / `admin123`

### Features
- ✅ Create new blog posts
- ✅ Edit existing posts
- ✅ Delete posts
- ✅ View all posts
- ✅ Publish/Unpublish posts

## API Endpoints

### Blogs
- `GET /api/blogs` - Get all blogs
- `POST /api/blogs` - Create new blog
- `PUT /api/blogs/:id` - Update blog
- `DELETE /api/blogs/:id` - Delete blog

### Authentication
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Register new user

## Environment Variables

Copy `.env.example` to `.env` and configure:

```env
MONGODB_URI=mongodb://localhost:27017/grid-maker
JWT_SECRET=your-secret-key-change-in-production
```

## Security Notes

⚠️ **IMPORTANT**: Change the default admin password in production!
⚠️ **IMPORTANT**: Change the JWT_SECRET in production!

## File Structure

```
grid_maker/
├── server/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login.post.ts
│   │   │   └── register.post.ts
│   │   └── blogs/
│   │       ├── [id].delete.ts
│   │       ├── [id].put.ts
│   │       ├── get.ts
│   │       └── post.ts
│   ├── db/
│   │   └── connect.ts
│   └── models/
│       ├── Blog.ts
│       └── User.ts
├── pages/
│   └── admin/
│       └── blogs.vue
└── scripts/
    └── init-db.ts
```
