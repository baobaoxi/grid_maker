<template>
  <section class="action-section">
    <div class="container">
      <div class="section-header">
        <h2>Grid Maker in Action</h2>
        <p>From portraits to product shots, explore how this online grid maker helps plan proportions, composition, and clean transfers.</p>
      </div>

      <div class="action-grid">
        <div class="action-card">
          <div class="action-image">
            <img src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400&h=300&fit=crop" alt="Wall mural painting with grid" />
            <div class="grid-overlay"></div>
          </div>
          <div class="action-content">
            <h3>Wall Murals</h3>
            <p>Scale up designs from small sketches to massive wall paintings with perfect proportions.</p>
          </div>
        </div>

        <div class="action-card">
          <div class="action-image">
            <img src="https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=300&fit=crop" alt="Abstract painting with grid" />
            <div class="grid-overlay"></div>
          </div>
          <div class="action-content">
            <h3>Abstract Art</h3>
            <p>Plan geometric compositions and balance visual elements in abstract paintings.</p>
          </div>
        </div>

        <div class="action-card">
          <div class="action-image">
            <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop" alt="Sketch drawing with grid" />
            <div class="grid-overlay"></div>
          </div>
          <div class="action-content">
            <h3>Sketching & Drawing</h3>
            <p>Master accurate proportions and perspective in pencil sketches and charcoal drawings.</p>
          </div>
        </div>

        <div class="action-card">
          <div class="action-image">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop" alt="Portrait drawing with grid" />
            <div class="grid-overlay"></div>
          </div>
          <div class="action-content">
            <h3>Portrait Drawing</h3>
            <p>Perfectly map facial features and proportions using grid lines for accurate sketching.</p>
          </div>
        </div>

        <div class="action-card">
          <div class="action-image">
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop" alt="Product photography with grid" />
            <div class="grid-overlay"></div>
          </div>
          <div class="action-content">
            <h3>Product Photography</h3>
            <p>Align products perfectly in frame for professional e-commerce shots.</p>
          </div>
        </div>

        <div class="action-card">
          <div class="action-image">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" alt="Cross stitch pattern with grid" />
            <div class="grid-overlay"></div>
          </div>
          <div class="action-content">
            <h3>Cross Stitch Patterns</h3>
            <p>Convert photos to pixel-perfect patterns for crafting and embroidery.</p>
          </div>
        </div>

        <div class="action-card">
          <div class="action-image">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" alt="Instagram grid layout" />
            <div class="grid-overlay"></div>
          </div>
          <div class="action-content">
            <h3>Social Media Grids</h3>
            <p>Plan and split images for cohesive Instagram feed layouts.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.action-section {
  padding: 80px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #1a1a2e;
  margin-bottom: 20px;
  font-weight: 700;
}

.section-header p {
  font-size: 1.1rem;
  color: #333;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.action-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.action-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.action-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.action-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.action-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(rgba(102, 126, 234, 0.4) 1px, transparent 1px),
    linear-gradient(90deg, rgba(102, 126, 234, 0.4) 1px, transparent 1px);
  background-size: 33.33% 33.33%;
}

.action-content {
  padding: 24px;
}

.action-content h3 {
  color: #1a1a2e;
  font-size: 1.3rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.action-content p {
  color: #555;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .section-header h2 {
    font-size: 1.8rem;
  }

  .section-header p {
    font-size: 1rem;
  }

  .action-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>