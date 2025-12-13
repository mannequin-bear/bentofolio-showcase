import { useEffect, useRef, useState, useCallback } from "react";

export function useScrollSound() {
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  useEffect(() => {
    // Placeholder URL - replace with actual mechanical sound
    audioRef.current = new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Play/pause audio based on scrolling and sound enabled state
  useEffect(() => {
    if (!audioRef.current) return;

    if (isSoundEnabled && isScrolling) {
      audioRef.current.play().catch(() => {
        // Audio play was prevented - this is expected if user hasn't interacted yet
      });
    } else {
      audioRef.current.pause();
    }
  }, [isSoundEnabled, isScrolling]);

  const toggleSound = useCallback(() => {
    setIsSoundEnabled((prev) => !prev);
  }, []);

  return { isSoundEnabled, toggleSound, isScrolling };
}
