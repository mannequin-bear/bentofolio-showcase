import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function SilkBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const waveOffset1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const waveOffset2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const waveOffset3 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // Generate random dots
  const dots = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.3 + 0.1,
    delay: Math.random() * 5,
  }));

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Animated wavy silk layers */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="silk-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.08" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="silk-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.04" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.06" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="silk-gradient-3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.03" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Wave layer 1 */}
        <motion.path
          d="M0,300 C200,200 400,400 600,300 C800,200 1000,350 1200,280 C1400,210 1440,350 1440,350 L1440,900 L0,900 Z"
          fill="url(#silk-gradient-1)"
          style={{ translateY: waveOffset1 }}
        />

        {/* Wave layer 2 */}
        <motion.path
          d="M0,400 C150,300 350,500 550,380 C750,260 950,450 1150,350 C1350,250 1440,400 1440,400 L1440,900 L0,900 Z"
          fill="url(#silk-gradient-2)"
          style={{ translateY: waveOffset2 }}
        />

        {/* Wave layer 3 */}
        <motion.path
          d="M0,500 C180,400 380,550 580,480 C780,410 980,520 1180,450 C1380,380 1440,500 1440,500 L1440,900 L0,900 Z"
          fill="url(#silk-gradient-3)"
          style={{ translateY: waveOffset3 }}
        />
      </motion.svg>

      {/* Floating dots */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
            opacity: dot.opacity,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [dot.opacity, dot.opacity * 1.5, dot.opacity],
          }}
          transition={{
            duration: 4 + dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}

      {/* Additional flowing curves */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M-100,600 Q200,400 500,550 T1100,450 T1600,500"
          stroke="hsl(var(--primary))"
          strokeWidth="1"
          fill="none"
          strokeOpacity="0.2"
          animate={{
            d: [
              "M-100,600 Q200,400 500,550 T1100,450 T1600,500",
              "M-100,550 Q200,450 500,500 T1100,500 T1600,450",
              "M-100,600 Q200,400 500,550 T1100,450 T1600,500",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M-100,700 Q300,500 600,650 T1200,550 T1600,600"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          fill="none"
          strokeOpacity="0.15"
          animate={{
            d: [
              "M-100,700 Q300,500 600,650 T1200,550 T1600,600",
              "M-100,650 Q300,550 600,600 T1200,600 T1600,550",
              "M-100,700 Q300,500 600,650 T1200,550 T1600,600",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}