import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowDown } from "lucide-react";

interface HeroData {
  name: string;
  tagline: string;
  role: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

interface HeroSectionProps {
  data: HeroData;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm font-medium mb-6">
            {data.role}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Hi, I'm{" "}
          <span className="gradient-text">{data.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          {data.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
          >
            View My Work
            <ArrowDown size={18} />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-all"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href={data.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href={data.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href={data.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
            aria-label="Twitter"
          >
            <Twitter size={22} />
          </a>
        </motion.div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10" />
    </section>
  );
}
