'use client'
import { useEffect, useRef } from 'react'

export function useAutoScroll(speed = 0.3) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const isPausedRef = useRef(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let frameId: number

    const scroll = () => {
        console.log('scrolling')
      if (!isPausedRef.current) {
        el.scrollLeft += speed
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0
        }
      }
      frameId = requestAnimationFrame(scroll)
    }

    const pause = () => (isPausedRef.current = true)
    const resume = () => (isPausedRef.current = false)

    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)
    el.addEventListener('touchstart', pause)
    el.addEventListener('touchend', resume)

    frameId = requestAnimationFrame(scroll)
    return () => {
      cancelAnimationFrame(frameId)
      el.removeEventListener('mouseenter', pause)
      el.removeEventListener('mouseleave', resume)
      el.removeEventListener('touchstart', pause)
      el.removeEventListener('touchend', resume)
    }
  }, [speed])

  return containerRef
}

