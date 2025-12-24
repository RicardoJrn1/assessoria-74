"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const packages = [
  {
    name: "Time de Experts",
    description: "Um time dedicado de especialistas para negócios de alta complexidade, que exigem soluções robustas com agilidade, foco e excelência. Ideal para operações estratégicas que demandam atenção exclusiva.",
  },
  {
    name: "Time Compartilhado",
    description: "Especialistas compartilhados entre empresas, garantindo eficiência e redução de custos sem abrir mão da qualidade. Ideal para quem busca performance com mais economia.",
  },
  {
    name: "Projetos Pontuais",
    description: "Projetos personalizados para seu negócio: sites, criativos, dados e mais. Perfeito para necessidades específicas, com foco em agilidade e entrega sob demanda.",
  },
];

const ModelosSection: React.FC = () => {
  return (
    <section className="w-full py-12 text-white">
      <div className="container mx-auto px-4">
        {/* Título e Subtítulo */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
          >
            Escolha o Modelo de Entrega Que Mais Te Satisfaz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-white/70"
          >
            Encontre o Modelo Que Melhor Irá Atender Suas Necessidades
          </motion.p>
        </div>

        {/* Pacotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex flex-col p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/[0.07] transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-br from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
                {pkg.name}
              </h3>
              
              <div className="flex-grow">
                <span className="block text-xs font-bold text-orange-500 uppercase tracking-widest mb-3">O que contempla</span>
                <p className="text-white/70 mb-8 leading-relaxed text-sm md:text-base">{pkg.description}</p>
              </div>

              <Link
                href="/contato"
                className="w-full py-3 px-6 rounded-full border border-white/20 text-white font-bold text-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"
              >
                Solicitar Orçamento
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelosSection;