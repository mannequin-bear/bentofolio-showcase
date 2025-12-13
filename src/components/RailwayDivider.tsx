import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Train } from "lucide-react";

interface RailwayDividerProps {
  direction?: "left-to-right" | "right-to-left";
}

// Smoke particle component
function SmokeParticle({ delay, offsetX, offsetY }: { delay: number; offsetX: number; offsetY: number }) {
  return (
    <motion.div
      className="absolute w-3 h-3 rounded-full bg-muted-foreground/40"
      initial={{ opacity: 0.6, scale: 0.5, x: offsetX, y: offsetY }}
      animate={{
        opacity: [0.6, 0.3, 0],
        scale: [0.5, 1.2, 1.8],
        y: [offsetY, offsetY - 20, offsetY - 35],
        x: [offsetX, offsetX + (Math.random() - 0.5) * 15, offsetX + (Math.random() - 0.5) * 25],
      }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

export function RailwayDivider({ direction = "left-to-right" }: RailwayDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to train position based on direction
  const trainProgress = useTransform(
    scrollYProgress, 
    [0.2, 0.8], 
    direction === "left-to-right" ? [0, 100] : [100, 0]
  );

  // Flip train icon based on direction
  const trainScaleX = direction === "right-to-left" ? -1 : 1;

  return (
    <div ref={containerRef} className="relative w-full py-8 overflow-hidden">
      <svg
        viewBox="0 0 1200 120"
        className="w-full h-auto"
        preserveAspectRatio="none"
        style={{ minHeight: "80px" }}
      >
        <defs>
          {/* Sleeper pattern */}
          <pattern
            id="sleepers"
            patternUnits="userSpaceOnUse"
            width="40"
            height="60"
            patternTransform="rotate(0)"
          >
            <rect
              x="16"
              y="20"
              width="8"
              height="20"
              fill="hsl(var(--muted-foreground))"
              opacity="0.4"
              rx="1"
            />
          </pattern>
          
          {/* Curved path for the railway */}
          <path
            id="railPath"
            d="M 0 60 Q 300 20, 600 60 T 1200 60"
            fill="none"
          />
        </defs>

        {/* Sleepers background strip */}
        <path
          d="M 0 40 Q 300 0, 600 40 T 1200 40 L 1200 80 Q 900 120, 600 80 T 0 80 Z"
          fill="url(#sleepers)"
          opacity="0.5"
        />

        {/* Bottom rail */}
        <path
          d="M 0 68 Q 300 28, 600 68 T 1200 68"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="3"
          fill="none"
          opacity="0.7"
        />

        {/* Top rail */}
        <path
          d="M 0 52 Q 300 12, 600 52 T 1200 52"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="3"
          fill="none"
          opacity="0.7"
        />

        {/* Rail highlights */}
        <path
          d="M 0 51 Q 300 11, 600 51 T 1200 51"
          stroke="hsl(var(--foreground))"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M 0 67 Q 300 27, 600 67 T 1200 67"
          stroke="hsl(var(--foreground))"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        />

        {/* Cross ties / sleepers on rails */}
        {Array.from({ length: 30 }).map((_, i) => {
          const x = (i * 40) + 20;
          // Calculate Y position along the curve
          const t = x / 1200;
          const y = 60 + Math.sin(t * Math.PI * 2) * -20;
          return (
            <rect
              key={i}
              x={x - 3}
              y={y - 12}
              width="6"
              height="24"
              fill="hsl(var(--muted-foreground))"
              opacity="0.3"
              rx="1"
              transform={`rotate(${Math.cos(t * Math.PI * 2) * 5}, ${x}, ${y})`}
            />
          );
        })}
      </svg>

      {/* Animated Train with Smoke */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2"
        style={{
          left: useTransform(trainProgress, (v) => `${v}%`),
          x: "-50%",
        }}
      >
        {/* Smoke particles - positioned behind the train */}
        <div 
          className="absolute top-1/2 -translate-y-1/2"
          style={{ 
            [direction === "left-to-right" ? "right" : "left"]: "100%",
            marginRight: direction === "left-to-right" ? "5px" : undefined,
            marginLeft: direction === "right-to-left" ? "5px" : undefined,
          }}
        >
          <SmokeParticle delay={0} offsetX={0} offsetY={-5} />
          <SmokeParticle delay={0.2} offsetX={-5} offsetY={-3} />
          <SmokeParticle delay={0.4} offsetX={5} offsetY={-7} />
          <SmokeParticle delay={0.6} offsetX={-3} offsetY={-4} />
          <SmokeParticle delay={0.8} offsetX={3} offsetY={-6} />
        </div>

        <motion.div
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary shadow-lg"
          style={{
            rotate: useTransform(scrollYProgress, [0.2, 0.5, 0.8], [-5, 0, 5]),
            scaleX: trainScaleX,
          }}
        >
          <Train className="w-5 h-5 text-primary-foreground" />
        </motion.div>
      </motion.div>
    </div>
  );
}
