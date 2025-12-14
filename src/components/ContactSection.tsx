import { motion } from "framer-motion";
import { Mail, User, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Get In Touch
          </h2>
        </motion.div>

        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bento-card max-w-md w-full"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Send size={20} className="text-primary" />
              Let's Connect
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="p-3 rounded-full bg-primary/20">
                  <User size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">Alex Chen</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="p-3 rounded-full bg-primary/20">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href="mailto:alex.chen@example.com" 
                    className="font-medium hover:text-primary transition-colors"
                  >
                    alex.chen@example.com
                  </a>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-sm mt-6">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}