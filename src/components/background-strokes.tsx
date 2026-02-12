"use client"

import { useEffect, useState } from "react"

interface Stroke {
  id: number
  left: string
  height: string
  width: string
  opacity: number
  duration: string
  delay: string
}

function generateStrokes(count: number): Stroke[] {
  const strokes: Stroke[] = []
  for (let i = 0; i < count; i++) {
    // ~30% dos traços são "destaque": mais visíveis e rápidos
    const isHighlight = Math.random() < 0.3
    strokes.push({
      id: i,
      left: `${Math.random() * 100}%`,
      height: `${40 + Math.random() * 100}px`,
      width: isHighlight ? `${3 + Math.random() * 2}px` : `${1 + Math.random() * 1.5}px`,
      opacity: isHighlight ? 0.5 + Math.random() * 0.3 : 0.06 + Math.random() * 0.12,
      duration: isHighlight ? `${2 + Math.random() * 2}s` : `${6 + Math.random() * 10}s`,
      delay: `${Math.random() * 8}s`,
    })
  }
  return strokes
}

export default function BackgroundStrokes() {
  const [strokes, setStrokes] = useState<Stroke[]>([])

  useEffect(() => {
    setStrokes(generateStrokes(18))
  }, [])

  if (strokes.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden">
      {strokes.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: s.left,
            bottom: `-${s.height}`,
            width: s.width,
            height: s.height,
            background: `linear-gradient(to top, transparent, rgba(255,140,0,0.5), transparent)`,
            opacity: 0,
            animation: `stroke-rise ${s.duration} ${s.delay} linear infinite`,
            "--stroke-opacity": s.opacity,
            "--stroke-height": s.height,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
