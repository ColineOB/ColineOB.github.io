'use client';
import { useEffect, useRef } from 'react';

export function useAutoScroll(speed = 0.3) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isPausedRef = useRef(false);
  const isTouchingRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let frameId: number;

    const scroll = () => {
      if (!isPausedRef.current && !isTouchingRef.current && el.scrollWidth > el.clientWidth) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
        }
      }
      frameId = requestAnimationFrame(scroll);
    };

    const pause = () => {
      isPausedRef.current = true;
    };

    const resume = () => {
      isPausedRef.current = false;
    };

    const onTouchStart = () => {
      isTouchingRef.current = true;
    };

    const onTouchEnd = () => {
      isTouchingRef.current = false;
    };

    el.addEventListener('mouseenter', pause);
    el.addEventListener('mouseleave', resume);
    el.addEventListener('touchstart', onTouchStart);
    el.addEventListener('touchend', onTouchEnd);

    frameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(frameId);
      el.removeEventListener('mouseenter', pause);
      el.removeEventListener('mouseleave', resume);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [speed]);

  return containerRef;
}
