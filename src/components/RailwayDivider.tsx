import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Train } from "lucide-react";

export function RailwayDivider() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to train position (0% to 100%)
  const trainProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 100]);

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

      {/* Animated Train */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2"
        style={{
          left: useTransform(trainProgress, (v) => `${v}%`),
          x: "-50%",
        }}
      >
        <motion.div
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary shadow-lg"
          style={{
            rotate: useTransform(scrollYProgress, [0.2, 0.5, 0.8], [-5, 0, 5]),
          }}
        >
          <Train className="w-5 h-5 text-primary-foreground" />
        </motion.div>
      </motion.div>
    </div>
  );
}
