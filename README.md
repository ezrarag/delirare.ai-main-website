# Delirare™ - High-Fashion Landing Page

A sleek, editorial-style landing page built with Next.js, TailwindCSS, and Framer Motion. The design embodies the aesthetic of Vogue × Tesla × Nike with provocative, sensual, and luxury elements.

## Features

- **Hero Section**: Full-screen editorial-style hero with bold serif + modern sans typography
- **Interactive Tiles**: Grid of clickable sections that expand on hover with smooth animations
- **Carousel**: Sleek horizontal carousel for case studies with swipable transitions
- **Typography**: Mix of elegant serif (Playfair Display) for headlines + minimalist sans (Inter) for body
- **Colors**: Black/white with strong contrast, luxury accents (deep charcoal, metallic gold/silver)
- **Animations**: Smooth, cinematic animations using Framer Motion
- **Mobile Responsive**: Looks sharp on both desktop and mobile devices

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **Keen Slider** for carousel functionality

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── Hero.tsx             # Hero section with editorial typography
│   ├── InteractiveTiles.tsx # Service tiles with hover animations
│   └── Carousel.tsx         # Case studies carousel
├── tailwind.config.js       # Tailwind configuration with custom fonts/colors
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Design Philosophy

The design follows these key principles:

- **Provocative**: Bold typography and striking visual elements
- **Sensual**: Smooth animations and fluid interactions
- **Sleek**: Clean lines and minimalist aesthetics
- **High-Fashion**: Editorial-style layouts and premium feel
- **Luxury**: Metallic accents and sophisticated color palette
- **Intellectual**: Thoughtful content hierarchy and typography
- **Mysterious**: Subtle reveals and interactive elements
- **Elite**: Premium materials and attention to detail
- **Modern**: Contemporary design patterns and technologies

## Customization

### Colors
The color palette is defined in `tailwind.config.js`:
- `charcoal`: Deep grays for backgrounds
- `metallic`: Silver tones for accents
- `luxury`: Gold, silver, and platinum for premium touches

### Typography
- **Headlines**: Playfair Display (serif) for editorial feel
- **Body Text**: Inter (sans) for modern readability

### Animations
All animations use Framer Motion with custom easing curves for smooth, cinematic feel.

## Image Integration

The carousel component includes placeholder image URLs. To integrate real images:

1. Add images to the `public/` directory
2. Update the `image` property in the `caseStudies` array in `components/Carousel.tsx`
3. Configure Next.js image domains in `next.config.js` if using external images

## Performance

- Optimized images with Next.js Image component
- Lazy loading for animations
- Reduced motion support for accessibility
- Efficient bundle splitting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Delirare. All rights reserved.
