"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
        
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
              <motion.span
                className="bg-gradient-to-r from-orange-400 via-orange-100 to-orange-400 bg-[length:200%_auto] bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ["0% center", "200% center"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                marketing
              </motion.span>
              <br />
              que gera{" "}
              <motion.span
                className="bg-gradient-to-r from-orange-400 via-orange-100 to-orange-400 bg-[length:200%_auto] bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ["0% center", "200% center"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                oportunidades
              </motion.span>.
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
              <Link
                href="/contato"
                className="group inline-flex items-center gap-2 md:gap-3 rounded-full bg-emerald-500 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-white shadow-lg shadow-emerald-500/25 ring-1 ring-white/10 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/40 hover:scale-105"
              >
                QUERO MAIS INFORMAÇÕES
                <span className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-white text-emerald-600 transition-transform group-hover:translate-x-1">
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13 6L19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Bottom label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-auto pb-10 text-white/70 text-sm md:text-base"
          >
            Especialistas dedicados ao seu negócio
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
