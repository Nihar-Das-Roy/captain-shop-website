"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  offset?: number
}

export default function ParallaxSection({ children, offset = 50 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [translateY, setTranslateY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrolled = window.scrollY
        const elementOffset = ref.current.offsetTop

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setTranslateY((scrolled - elementOffset) * 0.5)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={ref} style={{ transform: `translateY(${translateY}px)` }} className="transition-transform duration-100">
      {children}
    </div>
  )
}
