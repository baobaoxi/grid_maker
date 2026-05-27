<template>
  <section class="hero-section">
    <div class="hero-background">
        <!-- Background demo image showing grid overlay effect -->
        <div class="demo-image">
          <img 
          src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=960&h=540&fit=crop" 
          alt="Grid Maker for people to draw artist" 
          width="960" 
          height="540"
          fetchpriority="high"
        />
          <div class="grid-overlay"></div>
        </div>
        <!-- Gradient overlay to ensure text readability -->
        <div class="overlay-gradient"></div>
      </div>
    
    <div class="hero-content">
      <h1 class="hero-title">
        Grid Maker for People Who Can’t Draw.
      </h1>
      
      <p class="hero-subtitle">
        Grid Maker is the best online grid maker tool that helps you create precise grids for your artistic works. 
        This grid maker allows you to upload any image and overlay customizable grid lines. 
        Whether you're a beginner or a professional artist, this grid maker tool will perfect your proportions and composition.
      </p>
      
      
      
      <div class="hero-social-proof">
        <div class="user-avatars">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
            alt="User avatar" 
            width="100" 
            height="100"
            loading="lazy"
          />
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" 
            alt="User avatar" 
            width="100" 
            height="100"
            loading="lazy"
          />
          <img 
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" 
            alt="User avatar" 
            width="100" 
            height="100"
            loading="lazy"
          />
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
            alt="User avatar" 
            width="100" 
            height="100"
            loading="lazy"
          />
          <img 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop" 
            alt="User avatar" 
            width="100" 
            height="100"
            loading="lazy"
          />
        </div>
        <div class="rating">
          <div class="stars">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <p>Trusted by 999+ artists worldwide</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToUpload = () => {
  const uploadArea = document.querySelector('.upload-area')
  if (uploadArea) {
    uploadArea.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToFeatures = () => {
  const featuresSection = document.querySelector('.features-section')
  if (featuresSection) {
    featuresSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.demo-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.demo-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.6) 2px, transparent 2px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.6) 2px, transparent 2px);
  background-size: 100px 100px;
  mix-blend-mode: overlay;
}

.overlay-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.85) 0%,
    rgba(118, 75, 162, 0.8) 50%,
    rgba(102, 126, 234, 0.85) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  text-align: center;
  color: white;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 16px;
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.5px;
}

.hero-subtitle {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 30px;
  opacity: 0.98;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
}

.hero-cta {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 30px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn-primary {
  background: white;
  color: #667eea;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
}

.hero-social-proof {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.user-avatars {
  display: flex;
}

.user-avatars img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid white;
  margin-left: -10px;
  object-fit: cover;
}

.user-avatars img:first-child {
  margin-left: 0;
}

.rating {
  text-align: left;
}

.stars {
  display: flex;
  gap: 3px;
  margin-bottom: 5px;
}

.stars span {
  color: #FFD700;
  font-size: 1.2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.rating p {
  font-size: 0.9rem;
  opacity: 0.95;
  margin: 0;
}

.hero-feature {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 24px 32px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.hero-feature h2 {
  font-size: 1.5rem;
  margin-bottom: 8px;
  font-weight: 700;
}

.hero-feature p {
  font-size: 0.95rem;
  opacity: 0.95;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 180px;
    padding: 20px;
  }
  
  .hero-title {
    font-size: 1.5rem;
  }
  
  .hero-subtitle {
    display: none;
  }
  
  .hero-cta {
    display: none;
  }
  
  .hero-social-proof {
    display: none;
  }
  
  .hero-feature {
    display: none;
  }
  
  .demo-image {
    display: none;
  }
  
  .grid-overlay {
    display: none;
  }
  
  .overlay-gradient {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%);
  }
}
</style>