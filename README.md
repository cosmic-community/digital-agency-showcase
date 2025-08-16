# Digital Agency Showcase

![App Preview](https://imgix.cosmicjs.com/0e4fe8e0-7a6c-11f0-a051-23c10f41277a-photo-1460925895917-afdab827c52f-1755326494939.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional digital agency website built with Next.js 15 and Cosmic CMS. Features services, case studies, team profiles, and client testimonials in a clean, conversion-focused design.

## ✨ Features

- **Service Portfolio** - Dynamic service listings with pricing and key features
- **Case Study Gallery** - Detailed project showcases with results and metrics
- **Team Directory** - Professional team member profiles with social links
- **Client Testimonials** - Star ratings and client feedback with photos
- **Responsive Design** - Mobile-first with seamless cross-device experience
- **SEO Optimized** - Clean URLs, meta tags, and structured content
- **Performance Focused** - Optimized images and fast loading times

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=68a0278ff45d4ab57d5fbc8a&clone_repository=68a02963f45d4ab57d5fbcaf)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> Create a content model for a digital agency company website with services, team members, testimonials, and case studies

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless content management
- **Bun** - Package management and runtime

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set up your environment variables (automatically configured when you clone this bucket)
4. Run the development server:
   ```bash
   bun run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📡 Cosmic SDK Examples

### Fetching Services
```typescript
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Case Studies
```typescript
const { objects: caseStudies } = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Team Members
```typescript
const { objects: teamMembers } = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## 🎨 Cosmic CMS Integration

This website leverages four main content types from your Cosmic bucket:

- **Services** - Service offerings with pricing and features
- **Case Studies** - Project portfolios with challenges, solutions, and results
- **Team Members** - Staff profiles with photos and social links  
- **Testimonials** - Client feedback with ratings and company details

All content is dynamically fetched from your Cosmic bucket and rendered with optimized performance.

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add your Cosmic environment variables
3. Deploy with automatic builds

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `out` or `.next`
4. Add environment variables

### Manual Deployment
```bash
bun run build
bun run start
```

For production, set these environment variables in your hosting platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`
<!-- README_END -->