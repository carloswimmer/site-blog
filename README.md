# 🚀 Site.set - Modern Blog & Landing Page Platform

A beautiful, modern blog and landing page platform built with Next.js, featuring a seamless content management system, elegant UI components, and powerful features for creating engaging online experiences.

![Next.js](https://img.shields.io/badge/Next.js-16.0.8-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 📝 Content Management
- **Markdown-based Blog Posts** - Write your content in Markdown with frontmatter support
- **Contentlayer Integration** - Type-safe content management with automatic type generation
- **Author Management** - Built-in author profiles with avatars and metadata
- **SEO Optimized** - Full Open Graph and metadata support for better social sharing

### 🎨 User Interface
- **Modern Landing Page** - Beautiful hero section, features showcase, customer stories, and call-to-action sections
- **Responsive Design** - Fully responsive layouts that work seamlessly on all devices
- **Dark Mode** - Elegant dark theme with carefully crafted color palette
- **Smooth Animations** - Powered by Framer Motion for delightful user interactions

### 🔍 Blog Features
- **Blog Listing** - Grid-based post listing with search functionality
- **Post Search** - Real-time search with URL-based query parameters
- **Social Sharing** - Share posts across multiple social media platforms
- **Breadcrumb Navigation** - Easy navigation with breadcrumb trails
- **Markdown Rendering** - Full markdown support with GitHub Flavored Markdown (GFM)

### 🛠️ Developer Experience
- **TypeScript** - Full type safety across the entire codebase
- **React Compiler** - Optimized React performance with the React Compiler
- **Biome** - Fast linter and formatter for code quality
- **Component Architecture** - Modular, reusable component structure
- **Custom Hooks** - Reusable hooks for clipboard, sharing, and event handling

## 🏗️ Tech Stack

### Core
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development

### Content & Styling
- **[Contentlayer](https://www.contentlayer.dev/)** - Type-safe content management
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### UI Components
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[React Markdown](https://remarkjs.github.io/react-markdown/)** - Markdown rendering

### Development Tools
- **[Biome](https://biomejs.dev/)** - Fast formatter and linter
- **[Babel React Compiler](https://react.dev/learn/react-compiler)** - React optimization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended), npm, or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd site-blog
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
site-blog/
├── posts/                    # Markdown blog posts
│   ├── first-post.md
│   └── second-post.md
├── public/                   # Static assets
│   ├── assets/              # Post images
│   └── *.svg, *.png        # Site assets
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── blog/           # Blog routes
│   │   │   ├── [slug]/     # Dynamic post pages
│   │   │   └── page.tsx    # Blog listing
│   │   ├── page.tsx        # Landing page
│   │   └── layout.tsx      # Root layout
│   ├── components/          # Reusable components
│   │   ├── avatar/         # Avatar component
│   │   ├── layout/         # Header & Footer
│   │   ├── markdown/       # Markdown renderer
│   │   ├── search/         # Search component
│   │   └── ui/             # UI primitives
│   ├── hooks/              # Custom React hooks
│   │   ├── use-clipboard/  # Clipboard functionality
│   │   ├── use-share/      # Social sharing
│   │   └── use-mocked-events/
│   ├── templates/          # Page templates
│   │   ├── blog/           # Blog templates
│   │   └── landing-page/   # Landing page sections
│   └── lib/                # Utilities
└── contentlayer.config.ts  # Contentlayer configuration
```

## 📝 Creating Blog Posts

Create a new markdown file in the `posts/` directory with the following frontmatter:

```markdown
---
title: Your Post Title
description: A brief description of your post
date: 2024/12/20 10:20:00
image: /assets/your-image.png
author: 
    name: Author Name
    avatar: /customer-04.png
---

Your markdown content here...
```

The post will automatically appear in the blog listing!

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  blue: { /* ... */ },
  cyan: { /* ... */ },
  gray: { /* ... */ },
}
```

### Typography

Custom font sizes and families are defined in `tailwind.config.ts`:

- **Headings**: PT Sans Caption
- **Body**: Inter

### Components

All components are modular and can be easily customized in the `src/components/` directory.

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome linter
- `pnpm format` - Format code with Biome

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build

The project is also compatible with other platforms that support Next.js.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### Contentlayer

Content configuration is managed in `contentlayer.config.ts`. Modify the `Post` document type to add custom fields.

## 📚 Key Features Explained

### Search Functionality
The blog includes a real-time search feature that filters posts based on URL query parameters, providing instant results as you type.

### Social Sharing
Posts can be shared across multiple platforms using the `useShare` hook, which supports various social media providers.

### Markdown Support
Full GitHub Flavored Markdown support with syntax highlighting and extended markdown features.

### Responsive Design
All components are built with mobile-first approach, ensuring perfect experience on all screen sizes.

## 🧪 Testing & Performance

### Open Graph Metadata Testing

This project includes comprehensive Open Graph metadata for optimal social media sharing. To verify your Open Graph tags are working correctly:

#### Using OpenGraph.xyz
1. Visit [OpenGraph.xyz](https://www.opengraph.xyz/)
2. Enter your page URL
3. View a visual preview of how your content appears when shared
4. Check all Open Graph tags including:
   - `og:title` - Page title
   - `og:description` - Page description
   - `og:image` - Preview image URL
   - `og:url` - Canonical URL
   - `og:type` - Content type (website, article, etc.)
   - `og:site_name` - Site name
   - `og:locale` - Language/locale

OpenGraph.xyz provides a clean, visual interface to preview how your pages will look when shared on social media platforms.

### Web Vitals & Performance Testing

Monitor your site's performance and Core Web Vitals using [PageSpeed Insights](https://pagespeed.web.dev/):

#### Using PageSpeed Insights
1. Visit [PageSpeed Insights](https://pagespeed.web.dev/)
2. Enter your website URL
3. Click "Analyze" to get a comprehensive performance report

The tool provides:
- **Performance Score** - Overall performance rating (0-100)
- **Core Web Vitals** - Key metrics that affect user experience:
  - **Largest Contentful Paint (LCP)** - Loading performance (should be < 2.5s)
  - **First Input Delay (FID)** - Interactivity (should be < 100ms)
  - **Cumulative Layout Shift (CLS)** - Visual stability (should be < 0.1)
- **Field Data** - Real-world performance from Chrome User Experience Report
- **Lab Data** - Synthetic performance metrics
- **Opportunities** - Specific recommendations to improve performance
- **Diagnostics** - Additional insights and potential issues

#### Performance Best Practices
This project is optimized for performance with:
- **Next.js Image Optimization** - Automatic image optimization and lazy loading
- **Code Splitting** - Automatic code splitting for optimal bundle sizes
- **Static Generation** - Pre-rendered pages for faster load times
- **React Compiler** - Optimized React performance
- **Tailwind CSS** - Utility-first CSS for minimal bundle size

#### Regular Performance Monitoring
- Test your site regularly, especially after major updates
- Monitor both mobile and desktop performance
- Check individual blog post pages for optimal metadata
- Verify image optimization and loading performance

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Content managed with [Contentlayer](https://www.contentlayer.dev/)
- Icons by [Lucide](https://lucide.dev/)

---

Made with ❤️ using Next.js and TypeScript
