"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

function AnimatedCounter({ target, duration = 2, delay = 0 }: { target: number; duration?: number; delay?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!isInView || hasStarted.current) return
    hasStarted.current = true

    const timeout = setTimeout(() => {
      let startTime: number | null = null
      let animationFrame: number

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * target))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        }
      }

      animationFrame = requestAnimationFrame(step)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [isInView, target, duration, delay])

  return <span ref={ref} className="inline-block tabular-nums">{count}</span>
}

export default function QuatrocentosMilhoesSection() {
  return (
    <section className="w-full py-8 md:py-12 bg-red-600">
      <div className="container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            + R$<AnimatedCounter target={400} delay={0.7} /> Milhões
          </h2>
          <p className="mt-2 text-lg md:text-xl font-medium text-white/80">
            Contribuídos em Receita
          </p>
        </motion.div>
      </div>
    </section>
  )
}
