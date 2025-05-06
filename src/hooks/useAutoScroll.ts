'use client';
import { useEffect, useRef } from 'react';

export function useAutoScroll(speed = 0.3) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let frameId: number;

    const scroll = () => {
      if (!isPausedRef.current && el.scrollWidth > el.clientWidth) {
        el.scrollLeft += speed;

        // Looping back
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
        }
      }
      frameId = requestAnimationFrame(scroll);
    };

    const pause = () => (isPausedRef.current = true);
    const resume = () => (isPausedRef.current = false);

    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);

    // Touch interactions for mobile
    el.addEventListener('touchstart', pause);
    el.addEventListener('touchend', resume);

    // Start scrolling
    frameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(frameId);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', resume);
    };
  }, [speed]);

  return containerRef;
}