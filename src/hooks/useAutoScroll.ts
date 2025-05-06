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
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      frameId = requestAnimationFrame(scroll);
    };

    // Pause au toucher / clic
    const pause = () => {
      isPausedRef.current = true;
    };

    // Reprise automatique
    const resume = () => {
      isPausedRef.current = false;
    };

    // Événements compatibles mobile/desktop
    el.addEventListener('pointerdown', pause);
    el.addEventListener('pointerup', resume);
    el.addEventListener('pointercancel', resume);
    el.addEventListener('touchend', resume);
    el.addEventListener('mouseleave', resume);

    frameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(frameId);
      el.removeEventListener('pointerdown', pause);
      el.removeEventListener('pointerup', resume);
      el.removeEventListener('pointercancel', resume);
      el.removeEventListener('touchend', resume);
      el.removeEventListener('mouseleave', resume);
    };
  }, [speed]);

  return containerRef;
}