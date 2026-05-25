<template>
  <div class="page-container">
    <AppHeader 
      title="Blog"
      subtitle="Tips, tutorials, and updates"
    />
    
    <nav class="blog-nav">
      <a href="/" class="nav-link">← Back to Home</a>
    </nav>
    
    <main class="page-content">
      <div class="blog-list">
        <article 
          v-for="post in blogPosts" 
          :key="post.slug"
          class="blog-card"
          @click="navigateToPost(post.slug)"
        >
          <div class="blog-image">
            <img :src="post.image" :alt="post.title" />
          </div>
          <div class="blog-content">
            <span class="blog-date">{{ post.date }}</span>
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
            <span class="read-more">Read More →</span>
          </div>
        </article>
      </div>
    </main>
    
    <AppFooter 
      company="Photo Grid App"
      @navigate="handleNavigate"
    />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

const blogPosts = [
  {
    slug: 'grid-maker-cross-stitch-pixel-art',
    title: 'DIY Crafting Guide: How to Use a Grid Maker for Cross Stitch & Pixel Art',
    excerpt: 'Turn any custom image into an easy-to-follow crafting pattern. Discover how our digital grid maker for cross stitch helps crafters map out pixels and threads perfectly.',
    date: 'May 30, 2026',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  },
  {
    slug: 'photo-grid-overlay-improve-composition',
    title: 'How to Use a Photo Grid Overlay Tool to Improve Image Composition',
    excerpt: 'Need to analyze photography composition or add aesthetic alignment lines to your designs? Learn how to use our free online photo grid overlay tool seamlessly.',
    date: 'May 29, 2026',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  },
  {
    slug: 'split-images-instagram-without-losing-quality',
    title: 'How to Split Images for Instagram Without Losing Quality (No Crop)',
    excerpt: 'Don\'t let Instagram compress or awkwardly crop your panorama photos. Use our free online image splitter for Instagram to slice photos perfectly into a crisp 3x3 grid.',
    date: 'May 28, 2026',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  },
  {
    slug: 'instagram-grid-maker-for-stunning-feeds',
    title: 'Boost Your Engagement: How to Use an Instagram Grid Maker for Stunning Feeds',
    excerpt: 'Want your profile to stand out? Discover creative Instagram grid layout ideas and learn how to use a 3x3 grid splitter to create cohesive viral banners effortlessly.',
    date: 'May 27, 2026',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  },
  {
    slug: 'grid-method-template-create-customize-online',
    title: 'Looking for a Grid Method Template? Create and Customize Your Own Online',
    excerpt: 'Stop downloading static grid method templates that don\'t fit your canvas ratio. Use our free drawing grid online tool to generate a custom printable drawing grid for any photo size.',
    date: 'May 26, 2026',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  },
  {
    slug: 'how-to-master-proportions-beginners-guide',
    title: 'How to Master Proportions: A Beginner\'s Guide to Using a Grid Maker for Drawing',
    excerpt: 'Struggle with drawing accurate proportions? Learn how to use a digital grid maker for drawing to master the traditional grid method in 5 minutes.',
    date: 'May 25, 2026',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  },
  {
    slug: 'how-to-use-grid-overlays-for-drawing',
    title: 'How to Use Grid Overlays for Drawing',
    excerpt: 'Learn how to use grid overlays to improve your drawing accuracy and proportions. Step-by-step guide for artists of all skill levels.',
    date: 'May 20, 2026',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  },
  {
    slug: '10-composition-techniques-for-photographers',
    title: '10 Composition Techniques Every Photographer Should Know',
    excerpt: 'Master the art of photo composition with these essential techniques. From rule of thirds to leading lines, elevate your photography skills.',
    date: 'May 15, 2026',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  }
]

const navigateToPost = (slug: string) => {
  window.location.href = `/blog/${slug}`
}

const handleNavigate = (link: { label: string; url: string }) => {
  window.location.href = link.url
}
</script>

<style scoped>
.page-container {
  min-height: 100vh;
}

.blog-nav {
  max-width: 1000px;
  margin: 0 auto;
  padding: 15px 20px;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #667eea;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #764ba2;
  text-decoration: underline;
}

.page-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

.blog-list {
  display: grid;
  gap: 30px;
}

.blog-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
}

.blog-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.blog-content {
  padding: 25px;
}

.blog-date {
  color: #888;
  font-size: 0.85rem;
  margin-bottom: 10px;
  display: block;
}

.blog-content h3 {
  color: #333;
  margin-bottom: 12px;
  font-size: 1.4rem;
}

.blog-content p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}

.read-more {
  color: #667eea;
  font-weight: 600;
  font-size: 0.9rem;
}

@media (min-width: 768px) {
  .blog-card {
    display: grid;
    grid-template-columns: 350px 1fr;
  }
  
  .blog-image {
    height: auto;
    min-height: 250px;
  }
  
  .blog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>