# 🌟 Nidhi Prajapati — Portfolio Website

A modern, interactive portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It features stunning animations, EmailJS-powered contact form, and a clean, responsive user interface.

---

## ✨ Features

- 🎨 **Modern UI** with animated 3D topology background
- ✨ **Smooth animations** and scroll-triggered reveal effects
- 📱 **Fully responsive** on all screen sizes
- 📧 **Contact form** powered by EmailJS
- 🚀 **Smooth navigation** between sections
- 💜 **Elegant purple gradient** theme
- ⚡ **Optimized performance** using the Next.js App Router

---

## 🛠 Tech Stack

| Category        | Technology                          |
|-----------------|-------------------------------------|
| **Framework**   | Next.js 14                          |
| **Language**    | TypeScript                          |
| **Styling**     | Tailwind CSS                        |
| **Animations**  | Vanta.js, custom CSS animations     |
| **Email**       | EmailJS                             |

---

## 🚀 Getting Started (Local Development)

If you want to run this project locally for learning or testing:

### Prerequisites

- Node.js **18+**
- **npm** or **yarn**

### 1. Clone the repository

git clone https://github.com/Nidhi0201/Nidhi-Prajapati-Portfolio.git
cd Nidhi-Prajapati-Portfolio### 2. Install dependencies

npm install### 3. Add environment variables

Create a `.env.local` file in the project root and add:

NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key### 4. Run the development server

npm run devThen open:

http://localhost:3000---

## 📁 Project Structure

├── app/                  # Next.js App Router entry + layout
├── components/           # Reusable React components
├── public/               # Images & static assets
├── styles/ (if present)  # Global styles / Tailwind base
└── ...config files       # tsconfig, next.config, tailwind, etc.---

## 🌐 Deployment

This portfolio is **deployed on Netlify**.

**Netlify Build Settings**

- **Build Command:** `npm run build`
- **Publish Directory:** `.next`

**Required Environment Variables**

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

---

## 📄 License

This project is licensed under the **MIT License**.  
You’re welcome to learn from or adapt parts of this code, but the **live site and branding remain owned and controlled by Nidhi Prajapati**.

---

## 🙌 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vanta.js](https://www.vantajs.com/) for animated background effects
- [EmailJS](https://www.emailjs.com/) for contact form integration
