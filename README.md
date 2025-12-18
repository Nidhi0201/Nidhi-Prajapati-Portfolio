#🌟 Nidhi Prajapati — Portfolio Website
A modern, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring stunning animations, EmailJS contact integration, and a clean, responsive UI.

#✨ Features
🎨 Modern UI with animated 3D topology background
✨ Smooth animations and scroll-triggered effects
📱 Fully responsive layout for all screen sizes
📧 Functional contact form powered by EmailJS
🚀 Smooth section-based navigation
💜 Elegant purple gradient theme
⚡ Built for performance using Next.js App Router

#🛠 Tech Stack
Category	Technology
Framework	Next.js 14
Language	TypeScript
Styling	Tailwind CSS
Animations	Vanta.js, CSS animations
Email Service	EmailJS

#🚀 Getting Started (For Local Development)
If you want to run this project locally (for personal learning or experimentation):
Prerequisites
Node.js 18+
npm or yarn
1. Clone the repository
git clone https://github.com/N01/Nhijapati-Prajapati-Portfolio.git
Then navigate into the project:
cd Nhijapati-Prajapati-Portfolio
2. Install dependencies
npm install
3. Add environment variables
Create .env.local in the project root:
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
4. Run the development server
npm run dev

#Visit:
👉 http://localhost:3000
📁 Project Structure
├── app/                  # Next.js app router
├── components/           # Reusable components
├── public/               # Images & static files
├── styles/               # Tailwind/global styles
└── ...config files       # tsconfig, next.config, etc.

#🌐 Deployment
This portfolio is deployed on Netlify.
Netlify Build Settings:
Build Command: npm run build
Publish Directory: .next
Required Environment Variables:
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
Only the repository owner can push updates that trigger new deployments.

#📄 License
This project is licensed under the MIT License.
You are free to learn from the code or use it as inspiration — but the live site remains fully controlled by the owner.

#🙌 Acknowledgements
Next.js Team
Tailwind CSS
Vanta.js for animations
EmailJS for contact form service
