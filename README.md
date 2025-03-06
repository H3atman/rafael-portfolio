# Rafael's Portfolio

A modern, responsive portfolio website built with Next.js 15 and React 19, showcasing my skills, projects, and professional experience.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Modern UI Components**: Built with Radix UI and styled with Tailwind CSS
- **Optimized Performance**: Leverages Next.js 15 and Turbopack for fast development and production builds
- **Type Safety**: Written in TypeScript for better developer experience and code quality
- **Form Handling**: Contact form with validation using React Hook Form and Zod
- **Animations**: Smooth transitions and animations for enhanced user experience

## 📋 Sections

- **Hero**: Introduction and call-to-action
- **About**: Personal background and professional summary
- **Skills**: Technical skills and competencies with progress indicators
- **Projects**: Showcase of recent work with descriptions and links
- **Experience**: Professional experience and career timeline
- **Testimonials**: Feedback and recommendations from colleagues and clients
- **Contact**: Contact form and social media links

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Component Library**: Radix UI (Primitives)
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Carousel**: Embla Carousel
- **Notifications**: Sonner
- **Theming**: next-themes

### Development Tools
- **Language**: TypeScript 5
- **Linting**: ESLint 9
- **Build Tool**: Turbopack
- **Package Manager**: npm

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
src/
├── app/                # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── sections/       # Main page sections
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── TestimonialsSection.tsx
│   ├── ui/             # UI components (buttons, cards, etc.)
│   ├── Header.tsx      # Site header with navigation
│   └── Footer.tsx      # Site footer
└── lib/                # Utility functions and shared logic
```

## 🚢 Deployment

This portfolio is configured for easy deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Frafael-portfolio)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
