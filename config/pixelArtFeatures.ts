export interface StepItem {
  title: string
  description: string
}

export interface GuideSection {
  id: string
  title: string
  steps: StepItem[]
}

export const pixelArtGuide: GuideSection = {
  title: 'How to generate pixel art images',
  steps: [
    {
      title: 'Upload Your Image',
      description: 'Upload any photo, avatar, or picture to our Pixel Art Generator and instantly turn an image into pixel art.'
    },
    {
      title: 'Customize Pixel Style',
      description: 'Choose pixel size, color palette, and retro styles like 8-bit or 16-bit pixel art.'
    },
    {
      title: 'Generate & Download',
      description: 'Click generate to create stunning pixel art online and download your image in seconds — free and no signup required.'
    }
  ]
}

export const pixelArtFaq = [
  {
    question: 'What is a Pixel Art Generator?',
    answer: 'A pixel art generator is an online tool that converts images or text prompts into retro-style pixel art. You can create 8-bit, 16-bit, sprite-based, or game-style pixel graphics instantly without design skills.'
  },
  {
    question: 'How do I turn an image into pixel art?',
    answer: 'Simply upload a photo, avatar, or picture, choose the pixel size, color palette, and style, then instantly convert your image into pixel art online.'
  },
  {
    question: 'Is this Pixel Art Generator free?',
    answer: 'Yes. Our free pixel art generator lets you create pixel art online with no signup, no watermark, and instant download.'
  },
  {
    question: 'Can I generate pixel art from text prompts?',
    answer: 'Yes. Our AI pixel art generator can turn text prompts into unique pixel characters, retro scenes, game sprites, and pixel avatars.'
  },
  {
    question: 'What image formats are supported?',
    answer: 'You can upload PNG, JPG, JPEG, and WebP files and instantly transform them into pixel art.'
  },
  {
    question: 'Can I create pixel art for games?',
    answer: 'Absolutely. Many indie game developers use our tool to generate pixel sprites, tilesets, character assets, and retro game graphics.'
  },
  {
    question: 'Can I customize pixel size and color palette?',
    answer: 'Yes. You can adjust pixel resolution, block size, color count, and retro palettes to create authentic 8-bit or 16-bit pixel art.'
  },
  {
    question: 'Does the tool work on mobile?',
    answer: 'Yes. Our browser-based pixel art maker works on desktop, tablet, and mobile devices without downloading software.'
  },
  {
    question: 'Is my image private?',
    answer: 'Yes. Your images are processed locally in your browser whenever possible and are never permanently stored.'
  },
  {
    question: 'Can I use generated pixel art commercially?',
    answer: 'Yes, you can use generated pixel art for games, social media, NFTs, websites, and commercial projects, depending on your licensing terms.'
  }
]

export interface FeatureSection {
  id: string
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  items: FeatureItem[]
}

export const pixelArtFeatures: FeatureSection[] = [
  {
    id: 'image-converter',
    title: 'Image to Pixel Art Converter',
    description: 'Turn any image, selfie, or photo into stunning pixel art in seconds.',
    imageUrl: 'https://6a1925960bc623d413aeb142.imgix.net/p.PNG',
    imageAlt: 'Image to Pixel Art Converter',
    items: [
      { label: 'Upload PNG/JPG/WebP' },
      { label: 'Adjustable pixel size' },
      { label: 'One-click download' }
    ]
  },
  {
    id: 'retro-presets',
    title: 'Retro Style Presets',
    description: 'Choose between classic styles:',
    imageUrl: 'https://6a1925960bc623d413aeb142.imgix.net/p2.PNG',
    imageAlt: 'Retro Style Presets',
    items: [
      { label: '8-bit' },
      { label: '16-bit' },
      { label: 'Game Boy' },
      { label: 'Retro arcade' },
      { label: 'Anime pixel style' }
    ]
  },
  {
    id: 'custom-settings',
    title: 'Custom Pixel Resolution & Palette',
    description: 'Fine-tune every detail.',
    imageUrl: 'https://6a1925960bc623d413aeb142.imgix.net/p3.PNG',
    imageAlt: 'Custom Pixel Resolution & Palette',
    items: [
      { label: 'Pixel density' },
      { label: 'Color count' },
      { label: 'Retro palettes' },
      { label: 'Dithering effects' }
    ]
  }
]