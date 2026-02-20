# Alexander Balaban's Blog

Personal blog built with Next.js, featuring a minimal technical aesthetic with dark/light theme support.

## Features

- 🌓 Dark/Light theme toggle
- 📝 Markdown-based blog posts
- 🎨 Clean, technical design
- 📱 Responsive layout
- 🚀 Static site generation
- 🔗 Open Graph images

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Adding Posts

Create a new `.md` file in the `/posts` directory:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A brief description of your post"
---

# Your content here...
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on every push to `main`.

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Markdown parsing with gray-matter and remark
