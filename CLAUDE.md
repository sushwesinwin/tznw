# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Architecture

This is a **Next.js 16** application using the **App Router** architecture with TypeScript and Tailwind CSS v4.

### Tech Stack
- **Framework**: Next.js 16.1.6 with React 19
- **Language**: TypeScript 5 (strict mode enabled)
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono (loaded via next/font/google)

### Key Architecture Points

**App Router Structure:**
- Routes are defined by the `app/` directory structure
- `app/layout.tsx` is the root layout that wraps all pages
- `app/page.tsx` is the homepage (route: `/`)
- Use Server Components by default; add `'use client'` directive only when needed

**TypeScript Configuration:**
- Path alias `@/*` maps to project root (e.g., `@/app/components`)
- Strict mode enabled with ES2017 target
- JSX pragma set to `react-jsx`

**Styling System:**
- Tailwind CSS v4 with `@tailwindcss/postcss` plugin
- CSS custom properties defined in `app/globals.css` for theming
- Dark mode support via `prefers-color-scheme` media query
- Theme tokens: `--color-background`, `--color-foreground`, `--font-sans`, `--font-mono`

**Font Loading:**
- Fonts are loaded in `app/layout.tsx` and exposed as CSS variables
- Variable fonts (Geist) are optimized automatically by Next.js

### File Locations
- **Pages/Routes**: `app/` directory
- **Global Styles**: `app/globals.css`
- **Static Assets**: `public/` directory (accessible from `/` in URLs)
- **TypeScript Config**: `tsconfig.json`
- **Next.js Config**: `next.config.ts`
- **ESLint Config**: `eslint.config.mjs`
