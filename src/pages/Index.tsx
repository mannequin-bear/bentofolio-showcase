import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechMarquee } from "@/components/TechMarquee";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ArticlesSection } from "@/components/ArticlesSection";
import { Footer } from "@/components/Footer";

// ============================================
// EDIT YOUR CONTENT HERE
// ============================================
const DATA = {
  hero: {
    name: "Alex Chen",
    tagline:
      "I craft beautiful, performant web experiences with modern technologies. Turning complex problems into elegant, user-friendly solutions.",
    role: "Frontend Developer",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },

  about: {
    bio: "With over 5 years of experience in web development, I specialize in building modern, responsive applications using React and TypeScript. I'm passionate about creating intuitive user interfaces that not only look great but also deliver exceptional performance and accessibility.",
    highlights: [
      "5+ years of professional development experience",
      "Led frontend architecture for 3 enterprise applications",
      "Open source contributor and tech community speaker",
      "Expertise in React, TypeScript, and modern CSS",
    ],
  },

  projects: [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      link: "https://example.com",
      github: "https://github.com",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard with interactive charts, data visualization, and custom reporting tools.",
      tech: ["React", "D3.js", "Node.js", "MongoDB"],
      link: "https://example.com",
      github: "https://github.com",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      title: "AI Writing Assistant",
      description:
        "An AI-powered writing tool that helps users create better content with grammar checking and style suggestions.",
      tech: ["React", "OpenAI", "Tailwind", "Vercel"],
      link: "https://example.com",
      github: "https://github.com",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management with real-time updates, team workspaces, and productivity analytics.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      link: "https://example.com",
      github: "https://github.com",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    },
    {
      title: "Weather Application",
      description:
        "Beautiful weather app with location-based forecasts, interactive maps, and severe weather alerts.",
      tech: ["React", "OpenWeather API", "MapBox"],
      link: "https://example.com",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Unified social media management with scheduling, analytics, and cross-platform publishing.",
      tech: ["Next.js", "GraphQL", "Prisma"],
      link: "https://example.com",
      github: "https://github.com",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    },
  ],

  articles: [
    {
      title: "Building Scalable React Applications in 2024",
      date: "October 2024",
      excerpt:
        "Exploring best practices for building maintainable React apps with modern tooling and architecture patterns.",
      link: "https://medium.com/@yourusername/building-scalable-react-apps",
    },
    {
      title: "The Power of TypeScript in Large Codebases",
      date: "September 2024",
      excerpt:
        "How TypeScript can save hours of debugging and improve team collaboration on enterprise projects.",
      link: "https://medium.com/@yourusername/power-of-typescript",
    },
    {
      title: "CSS-in-JS vs Tailwind: A Practical Comparison",
      date: "August 2024",
      excerpt:
        "An in-depth comparison of styling approaches with real-world examples and performance benchmarks.",
      link: "https://medium.com/@yourusername/css-in-js-vs-tailwind",
    },
    {
      title: "Optimizing React Performance: A Deep Dive",
      date: "July 2024",
      excerpt:
        "Techniques for identifying and fixing performance bottlenecks in React applications.",
      link: "https://medium.com/@yourusername/react-performance-deep-dive",
    },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection data={DATA.hero} />
      <TechMarquee />
      <AboutSection data={DATA.about} />
      <ProjectsSection projects={DATA.projects} />
      <ArticlesSection articles={DATA.articles} />
      <Footer />
    </div>
  );
};

export default Index;
