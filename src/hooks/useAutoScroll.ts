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
      if (!isPausedRef.current && el.scrollWidth > el.clientWidth) {
        el.scrollLeft += speed

        // Rebouclage quand on atteint la fin
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0
        }
      }
      frameId = requestAnimationFrame(scroll)
    }

    // Petit hack pour forcer un scroll initial (sinon rien ne démarre)
    
setTimeout(() => {
  el.scrollLeft = 1
  scroll()
}, 100)

    const pause = () => (isPausedRef.current = true)
    const resume = () => (isPausedRef.current = false)

    el.addEventListener('mouseenter', pause)
    el.addEventListener('mouseleave', resume)
    el.addEventListener('touchstart', pause)
    el.addEventListener('touchend', resume)

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