import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users } from "lucide-react";

interface AboutData {
  bio: string;
  highlights: string[];
}

interface AboutSectionProps {
  data: AboutData;
}

const FEATURES = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices.",
  },
  {
    icon: Palette,
    title: "Design Eye",
    description: "Creating beautiful, intuitive user interfaces.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in cross-functional teams.",
  },
];

export function AboutSection({ data }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Passionate Developer
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bento-card"
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              {data.bio}
            </p>
            <ul className="space-y-3">
              {data.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bento-card text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
