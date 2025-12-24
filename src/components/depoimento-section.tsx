"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const testimonials = [
  "/depoimento-1.avif",
  "/depoimento-2.avif",
  "/depoimento-3.avif",
];

export default function NumerosFalamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Troca a cada 4 segundos

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-[#E97A12] text-white">
      <div className="mx-auto max-w-5xl px-6 py-6 md:py-8">
        {/* Título */}
        <h2 className="text-center text-2xl leading-tight md:text-4xl md:leading-tight font-light tracking-tight bg-gradient-to-br from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
          Números falam,
          <br />
          dados <span className="font-extrabold">garantem.</span>
        </h2>

        <div
          className="mt-6 relative flex flex-col md:flex-row justify-center items-center group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={testimonials[currentIndex]}
              alt={`Depoimento de cliente ${currentIndex + 1}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-3xl rounded-2xl shadow-2xl"
            />
          </AnimatePresence>

          <div className="flex gap-4 mt-4 md:contents">
            {/* Botão Anterior */}
            <button
              onClick={handlePrev}
              className="static md:absolute md:-left-12 md:top-1/2 md:-translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors backdrop-blur-sm"
              aria-label="Anterior"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Botão Próximo */}
            <button
              onClick={handleNext}
              className="static md:absolute md:-right-12 md:top-1/2 md:-translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors backdrop-blur-sm"
              aria-label="Próximo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Botão de Ação */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/contato"
            className="group inline-flex items-center gap-2 md:gap-3 rounded-full bg-emerald-600 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-white shadow-xl shadow-emerald-900/20 transition-all hover:bg-emerald-500 hover:scale-105"
          >
            Quero mais informações
            <span className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full text-white transition-transform group-hover:translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
