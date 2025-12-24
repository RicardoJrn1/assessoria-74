"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    title: "Tráfego Pago",
    description: "Atraímos clientes certos com anúncios otimizados e baseados em dados reais.",
    hoverDescription: "Não fazemos anúncios bonitinhos. Fazemos campanhas que vendem. Segmentamos, otimizamos e testamos diariamente pra transformar seu orçamento em resultado de verdade.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-orange-500">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h.01M18 12h.01" />
      </svg>
    ),
  },
  {
    title: "Estratégia de Marketing",
    description: "Estratégias personalizadas para atrair, engajar e vender mais, com planejamento focado em dados, oferta e conversão.",
    hoverDescription: "A gente traça o plano antes de apertar qualquer botão. Desenvolvemos estratégias de marketing personalizadas pra cada tipo de negócio, alinhando posicionamento, oferta, público e canais de forma inteligente.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-orange-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-1m0 0a6.002 6.002 0 0 1 5.303-3.253l.697.697M12 17a6.002 6.002 0 0 0-5.303-3.253l-.697.697M12 17v4m0-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-4V3m0 0c-2.5 0-4.5 1.5-4.5 4.5 0 1.5 1 2.5 2.5 3.5M12 3c2.5 0 4.5 1.5 4.5 4.5 0 1.5-1 2.5-2.5 3.5" />
      </svg>
    ),
  },
  {
    title: "Produção Audiovisual",
    description: "Criativos de alta qualidade: vídeos que captam atenção e vendem. Produção pensada para performar nas campanhas.",
    hoverDescription: "Criamos vídeos estratégicos que vão muito além de estética. Cada roteiro, cena e corte é pensado pra converter — seja pra tráfego frio, remarketing ou criativo de topo de funil.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-orange-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
      </svg>
    ),
  },
  {
    title: "Treinamento de Vendas",
    description: "Vender não é sorte, é técnica. Oferecemos treinamento prático para transformar seus leads em clientes fiéis.",
    hoverDescription: "A gente treina seu time pra vender com confiança, consistência e estratégia. Do primeiro contato ao fechamento, cada etapa do processo é ajustada pra aumentar conversão e diminuir desperdício de lead.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-orange-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Sites e Landing Pages",
    description: "Páginas que mostram sua oferta do jeito certo e convertem visitantes em clientes. Feitas para vender, não só para aparecer.",
    hoverDescription: "Criamos páginas rápidas, bonitas e pensadas pra uma coisa só: vender. Seja pra captar leads, marcar uma consulta ou fechar uma venda, cada elemento é estratégico, desde o texto até o botão.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-orange-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Artes para Redes Sociais",
    description: "Artes bonitas, sim, mas feitas para vender. Unimos estética com estratégia para atrair, engajar e converter.",
    hoverDescription: "A gente sabe: você quer post bonito. E vai ter. Mas aqui, a beleza vem com propósito — cada arte é pensada pra destacar sua marca, gerar desejo e, principalmente, vender.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-orange-500">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ResultadosReaisSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="solucoes" className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold md:text-5xl leading-tight"
          >
            <span className="bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Tráfego Pago Inteligente.
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Resultados Reais.
            </span>
          </motion.h2>

          {/* Aviso Mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-4 md:hidden flex items-center justify-center gap-2 text-white/40 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" /></svg>
            <span>Toque nos cards para ver detalhes</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.1 },
                y: { duration: 0.5, delay: index * 0.1 },
              }}
              className="group relative flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors duration-300 hover:bg-white/[0.07] overflow-hidden min-h-[300px]"
            >
              <div className="mb-4 inline-flex items-center justify-center p-3 rounded-xl bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                {card.title}
              </h3>
              <AnimatePresence mode="wait" initial={false}>
                {hoveredIndex === index ? (
                  <motion.p
                    key="hover"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-white/80 text-sm leading-relaxed"
                  >
                    {card.hoverDescription}
                  </motion.p>
                ) : (
                  <motion.p
                    key="normal"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="text-white/60 text-sm leading-relaxed"
                  >
                    {card.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Botão de Ação */}
        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contato"
              className="group inline-flex items-center gap-2 md:gap-3 rounded-full bg-red-500 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:bg-red-600 hover:scale-105"
            >
              Contrate a 74
              <span className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-white/20 text-white transition-transform group-hover:translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
