import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

interface TeacupMascotProps {
  isSoundEnabled: boolean;
  onSoundToggle: () => void;
}

const EXPRESSIONS = [
  { emoji: "☕", mood: "Hot Cup", bubble: "Fresh brew!" },
  { emoji: "🍵", mood: "Tea Cup", bubble: "*sip* *sip*" },
  { emoji: "🕺", mood: "Dancing", bubble: "Feeling groovy~" },
  { emoji: "🥵", mood: "Hot Face", bubble: "Too hot!" },
];

export function TeacupMascot({ isSoundEnabled, onSoundToggle }: TeacupMascotProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % EXPRESSIONS.length);
      setShowBubble(true);
      
      // Hide bubble after 3 seconds
      setTimeout(() => setShowBubble(false), 3000);
    }, 10000);

    // Show initial bubble
    setShowBubble(true);
    setTimeout(() => setShowBubble(false), 3000);

    return () => clearInterval(interval);
  }, []);

  const current = EXPRESSIONS[currentIndex];

  return (
    <div className="flex items-center gap-2">
      {/* Sound Toggle */}
      <button
        onClick={onSoundToggle}
        className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
        aria-label={isSoundEnabled ? "Disable sound" : "Enable sound"}
      >
        {isSoundEnabled ? (
          <Volume2 size={16} className="text-primary" />
        ) : (
          <VolumeX size={16} className="text-muted-foreground" />
        )}
      </button>

      {/* Teacup Container */}
      <div className="relative">
        <motion.div
          key={currentIndex}
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="text-2xl cursor-pointer select-none"
          title={current.mood}
        >
          {current.emoji}
        </motion.div>

        {/* Speech Bubble */}
        <AnimatePresence>
          {showBubble && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 5 }}
              className="absolute -bottom-12 right-0 min-w-max px-3 py-1.5 rounded-lg bg-secondary border border-border text-xs text-foreground shadow-lg"
            >
              <div className="absolute -top-1.5 right-3 w-3 h-3 bg-secondary border-l border-t border-border rotate-45" />
              <span className="relative z-10">{current.bubble}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
