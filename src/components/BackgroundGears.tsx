import { motion, useScroll, useTransform } from "framer-motion";

function GearSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
    >
      <path d="M50 10 L54 10 L56 18 C58 18.5 60 19 62 20 L68 14 L72 18 L66 24 C67 26 68 28 68.5 30 L76 32 L76 38 L68.5 40 C68 42 67 44 66 46 L72 52 L68 56 L62 50 C60 51 58 51.5 56 52 L54 60 L46 60 L44 52 C42 51.5 40 51 38 50 L32 56 L28 52 L34 46 C33 44 32 42 31.5 40 L24 38 L24 32 L31.5 30 C32 28 33 26 34 24 L28 18 L32 14 L38 20 C40 19 42 18.5 44 18 L46 10 Z M50 30 C38.95 30 30 38.95 30 50 C30 61.05 38.95 70 50 70 C61.05 70 70 61.05 70 50 C70 38.95 61.05 30 50 30 Z M50 40 C55.52 40 60 44.48 60 50 C60 55.52 55.52 60 50 60 C44.48 60 40 55.52 40 50 C40 44.48 44.48 40 50 40 Z" />
    </svg>
  );
}

export function BackgroundGears() {
  const { scrollYProgress } = useScroll();
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Large gear - top left */}
      <motion.div
        style={{ rotate: rotate1 }}
        className="absolute -top-20 -left-20 w-80 h-80 text-muted-foreground/[0.03]"
      >
        <GearSVG className="w-full h-full" />
      </motion.div>

      {/* Medium gear - right side */}
      <motion.div
        style={{ rotate: rotate2 }}
        className="absolute top-1/3 -right-10 w-52 h-52 text-primary/[0.05]"
      >
        <GearSVG className="w-full h-full" />
      </motion.div>

      {/* Small gear - bottom left */}
      <motion.div
        style={{ rotate: rotate3 }}
        className="absolute bottom-20 left-10 w-36 h-36 text-muted-foreground/[0.04]"
      >
        <GearSVG className="w-full h-full" />
      </motion.div>
    </div>
  );
}
