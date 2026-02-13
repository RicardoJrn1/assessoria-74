"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const specialistNames = [
  "Especialista em tráfego pago",
  "Estrategista de marketing",
  "Designer criativo",
  "Especialista em vendas",
  "Produtor audiovisual",
  "Analista de dados",
]

export default function HeroSection() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex min-h-screen flex-col items-center">
          {/* Topo do Hero */}
          <div className="pt-28 md:pt-36 text-center max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl leading-[1.05] font-extrabold tracking-tight text-white"
            >
              Nós entregamos{" "}
              <span className="bg-gradient-to-r from-orange-400 via-orange-100 to-orange-400 bg-[length:200%_auto] bg-clip-text text-transparent inline-block animate-shimmer">
                marketing
              </span>
              <br />
              que gera{" "}
              <span className="bg-gradient-to-r from-orange-400 via-orange-100 to-orange-400 bg-[length:200%_auto] bg-clip-text text-transparent inline-block animate-shimmer">
                oportunidades
              </span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-white/80 text-base md:text-lg"
            >
              +21.000 oportunidades geradas
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6"
            >
              <a
                href="https://wa.me/554699007494?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Assessoria%2074."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 md:gap-3 rounded-full bg-orange-500 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-white shadow-lg shadow-orange-500/25 ring-1 ring-white/10 transition-all hover:bg-orange-600 hover:shadow-orange-500/40 hover:scale-105"
              >
                QUERO MAIS INFORMAÇÕES
                <span className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-white text-orange-600 transition-transform group-hover:translate-x-1">
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                    <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                  </svg>
                </span>
              </a>
            </motion.div>

            {/* Fotos abaixo do botão */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-24 flex justify-center -space-x-6"
            >
              {[1, 2, 3, 4].map((num) => (
                <Image
                  key={num}
                  src={`/hero-foto-conj-${num}.avif`}
                  alt={`Membro ${num} da equipe Assessoria 74`}
                  width={128}
                  height={128}
                  priority
                  className={`h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-[#050505] shadow-2xl object-cover hover:scale-110 hover:z-10 relative transition-transform duration-300 ${num === 1 ? "object-[50%_25%]" : "object-top"}`}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
