# NP Portfolio Website

A modern, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with animated 3D topology background
- ✨ Interactive animations and scroll-triggered effects
- 📱 Fully responsive design
- 📧 Contact form with EmailJS integration
- 🚀 Smooth scrolling navigation
- 💜 Beautiful purple gradient theme

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Vanta.js, Custom CSS animations
- **Email:** EmailJS

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/np-portfolio-website.git
cd np-portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/              # Next.js app directory
├── components/       # React components
├── public/           # Static assets
└── ...config files
```

## Deployment

This project can be deployed on Vercel, Netlify, or any platform that supports Next.js.

## License

MIT


