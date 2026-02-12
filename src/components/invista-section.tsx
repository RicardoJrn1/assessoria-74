"use client";

import { motion } from "framer-motion"
import Link from "next/link"

export default function InvistaSection() {
  return (
    <section className="w-full py-16 md:py-24 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            <span className="bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Invista com Confiança.
            </span>{" "}
            <br />{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Baseado em Dados.
            </span>
          </h2>
        </div>

        <div className="mx-auto max-w-7xl grid grid-cols-12 gap-4">

          {/* CARD 1 — Gráfico de crescimento */}
          <div className="col-span-12 md:col-span-7 rounded-2xl bg-gradient-to-br from-[#1C1C1C] to-orange-900/40 p-6 relative overflow-hidden min-h-[400px]">
            <h3 className="text-xl font-bold text-white">
              Crescimento guiado por dados e estratégia
            </h3>
            <p className="text-sm text-white/70 mt-1 max-w-md">
              Cada passo baseado em dados reais pra fazer seu negócio crescer com consistência.
            </p>

            {/* Linha do gráfico */}
            <div className="absolute bottom-0 left-0 right-0 h-[80%]">
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/40 to-transparent" />

              <svg
                viewBox="0 0 500 200"
                className="absolute bottom-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <motion.polyline
                  points="0,160 60,140 120,150 180,110 240,110 300,80 360,80 420,40 500,30"
                  fill="none"
                  stroke="#FF5A00"
                  strokeWidth="4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </svg>

              {/* Linha vertical */}
              <motion.div
                className="absolute bottom-0 w-px bg-white/20"
                style={{ height: "60%" }}
                initial={{ left: "0%" }}
                whileInView={{ left: "60%" }}
                viewport={{ once: true }}
                transition={{ duration: 2.0, delay: 1.2, ease: "easeOut" }}
              />

              {/* Ponto (Círculo) */}
              <motion.div
                className="absolute w-4 h-4 bg-white rounded-full -translate-x-1/2 translate-y-1/2 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                style={{ bottom: "60%" }}
                initial={{ left: "0%", opacity: 0 }}
                whileInView={{ left: "60%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.0, delay: 1.2, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* CARD 2 — Estratégias personalizadas */}
          <div className="col-span-12 md:col-span-5 rounded-2xl bg-gradient-to-br from-[#1C1C1C] to-orange-900/40 p-6">
            <h3 className="text-xl font-bold text-white">
              Estratégias Personalizadas
            </h3>
            <p className="text-sm text-white/70 mt-1">
              Usamos os canais certos pra maximizar seu resultado.
            </p>

            {/* Grid de bolinhas */}
            <div className="mt-6 grid grid-cols-10 gap-4">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-5 w-5 rounded-full ${
                    i % 3 === 0 ? "bg-orange-500" : "bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CARD 3 — Texto + Raio */}
          <div className="col-span-12 md:col-span-7 rounded-2xl bg-gradient-to-br from-[#1C1C1C] to-orange-900/40 p-6 relative overflow-hidden">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight relative z-10">
              Você foca no seu negócio.
              <br />A gente cuida do marketing.
            </h3>

            <p className="text-base text-white/70 mt-2 max-w-sm relative z-10">
              Mais resultado, menos esforço. <br />
              Tudo feito pra facilitar sua vida.
            </p>

            {/* Raio */}
            <div className="absolute -right-5 bottom-1 md:right-2 md:bottom-14 select-none pointer-events-none">
              {/* Sombra / Fundo */}
              <div className="absolute translate-x-3 translate-y-1 text-orange-900/40 text-[120px] md:text-[180px] leading-none blur-[1px]">
                ⚡
              </div>
              {/* Frente */}
              <div className="relative text-orange-500 text-[120px] md:text-[180px] leading-none drop-shadow-[0_0_40px_rgba(255,90,0,0.6)]">
                ⚡
              </div>
            </div>
          </div>

          {/* CARD 4 — Radial */}
          <div className="col-span-12 md:col-span-5 rounded-2xl bg-gradient-to-br from-[#1C1C1C] to-orange-900/40 p-6 relative overflow-hidden min-h-[300px]">
            <h3 className="text-xl font-bold text-white">
              Seu Negócio Ajustado em Tempo Real
            </h3>
            <p className="text-sm text-white/70 mt-1">
              Mudamos rápido, testamos melhor e otimizamos todo dia.
            </p>

            {/* Círculos */}
            <div className="absolute bottom-4 right-4 h-40 w-40">
              <div className="absolute inset-0 rounded-full border border-orange-500/30" />
              <div className="absolute inset-6 rounded-full border border-orange-500/40" />
              <div className="absolute inset-12 rounded-full border border-orange-500/60" />

              <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-orange-500 rounded-full" />
            </div>
          </div>

        </div>

        {/* Botão de Ação */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://wa.me/554699007494?text=Ol%C3%A1!%20Quero%20contratar%20os%20servi%C3%A7os%20da%20Assessoria%2074."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 md:gap-3 rounded-full bg-orange-500 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-600 hover:scale-105"
          >
            Contrate a 74
            <span className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-white/20 text-white transition-transform group-hover:translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
