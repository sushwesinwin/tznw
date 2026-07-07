# Thazin Nwe Win Portfolio

A modern portfolio and booking website for **Thazin Nwe Win** — television presenter, host, MC, and actress based in Yangon, Myanmar.

Built with **Next.js 16**, **React 19**, and **TypeScript**, the site is designed to present her profile, showcase featured media and photography, and provide a polished booking and contact experience through a responsive, visually engaging interface.

## Live Demo

🔗 [tznw.vercel.app](https://tznw.vercel.app/)

---

## Overview

This project is a personal brand portfolio website created to strengthen Thazin Nwe Win’s online presence with a clean, modern, and media-focused presentation. It combines structured content sections, interactive visuals, and reusable UI components to deliver a smooth browsing experience across devices.

The website includes key sections for introduction, biography, featured work, gallery, social presence, and booking-related information, making it both a showcase platform and a contact touchpoint.

---

## Features

- Responsive portfolio website optimized for desktop, tablet, and mobile
- Modern landing page with a clean section-based layout
- Biography and profile presentation
- Featured media or television program highlights
- Photo gallery and visual showcase sections
- Booking-focused call-to-action and contact flow
- Social links integration
- Dedicated **Terms & Conditions** page
- Reusable UI components for easier maintenance and scalability
- Interactive visual effects and animations for a more polished experience

---

## Tech Stack

### Core

- **Next.js 16**
- **React 19**
- **TypeScript**

### Styling & UI

- **Tailwind CSS v4**
- **clsx**
- **tailwind-merge**
- **Lucide React**

### Animation & Effects

- **GSAP**
- **Motion**
- **OGL**

### Tooling

- **ESLint**
- **Prettier**
- **Husky**
- **lint-staged**

---

## Project Structure

```bash
.
├── app/                        # App Router pages, layout, and global styles
│   ├── terms-and-conditions/   # Terms & Conditions page
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/                 # Shared and reusable UI components
│   ├── pages/                  # Homepage-specific sections
│   ├── AnimatedContent.tsx
│   ├── BlurText.tsx
│   ├── CircularGallery.jsx
│   ├── CircularGallery.css
│   ├── Footer.tsx
│   ├── GlareHover.tsx
│   ├── GlareHover.css
│   ├── Navbar.tsx
│   └── ScrollToTop.tsx
│
├── lib/                        # Constants, content configuration, and utilities
│   ├── constants/
│   ├── constants.tsx
│   └── utils.ts
│
├── public/                     # Static images and public assets
├── .husky/                     # Git hooks
├── components.json             # shadcn/ui configuration
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sushwesinwin/tznw.git
cd tznw
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Build the app for production
npm run start    # Start the production server
npm run lint     # Run ESLint
```

---

## Development Notes

- Built with the **Next.js App Router**
- Styled using **Tailwind CSS v4**
- Uses **GSAP**, **Motion**, and **OGL** for animated and interactive UI elements
- Code formatting and quality checks are handled with **Prettier**, **ESLint**, **Husky**, and **lint-staged**
- Organized with reusable components and centralized constants/utilities for easier updates

---

## Deployment

This project is deployed on **Vercel**.

**Production URL:**  
[https://tznw.vercel.app/](https://tznw.vercel.app/)

---

## Author

**Su Shwe Sin Win**  
GitHub: [@sushwesinwin](https://github.com/sushwesinwin)
