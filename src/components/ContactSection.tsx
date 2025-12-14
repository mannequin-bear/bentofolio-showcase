import { motion } from "framer-motion";
import { Mail, User } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-6 text-sm"
      >
        <div className="flex items-center gap-2">
          <User size={16} className="text-primary" />
          <span className="text-muted-foreground">Alex Chen</span>
        </div>
        <span className="text-border">|</span>
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-primary" />
          <a 
            href="mailto:alex.chen@example.com" 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            alex.chen@example.com
          </a>
        </div>
      </motion.div>
    </section>
  );
}