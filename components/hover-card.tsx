"use client"

import type { ReactNode } from "react"

interface HoverCardProps {
  children: ReactNode
  className?: string
}

export default function HoverCard({ children, className = "" }: HoverCardProps) {
  return (
    <div
      className={`transition-all duration-300 hover:scale-105 hover:shadow-2xl ${className}`}
      style={{
        transformOrigin: "center",
      }}
    >
      {children}
    </div>
  )
}
