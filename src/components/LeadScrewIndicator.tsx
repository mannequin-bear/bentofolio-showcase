import { motion, useScroll, useTransform } from "framer-motion";

export function LeadScrewIndicator() {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to background position (0-1000px range for thread animation)
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  return (
    <motion.div
      className="fixed right-0 top-0 w-6 h-full z-40 hidden md:block"
      style={{
        background: `
          repeating-linear-gradient(
            180deg,
            hsl(var(--muted)) 0px,
            hsl(var(--muted-foreground) / 0.3) 2px,
            hsl(var(--foreground) / 0.1) 4px,
            hsl(var(--muted)) 8px,
            hsl(var(--secondary)) 12px,
            hsl(var(--muted-foreground) / 0.4) 14px,
            hsl(var(--muted)) 16px
          )
        `,
        backgroundPositionY,
        boxShadow: "inset 2px 0 8px hsl(var(--foreground) / 0.2), inset -2px 0 8px hsl(var(--foreground) / 0.1)",
      }}
    >
      {/* Metallic highlight strip */}
      <div 
        className="absolute left-1 top-0 w-1 h-full opacity-30"
        style={{
          background: "linear-gradient(180deg, transparent, hsl(var(--foreground) / 0.4), transparent)"
        }}
      />
      {/* Thread groove shadow */}
      <div 
        className="absolute right-1 top-0 w-1 h-full opacity-20"
        style={{
          background: "linear-gradient(180deg, transparent, hsl(var(--background)), transparent)"
        }}
      />
    </motion.div>
  );
}
