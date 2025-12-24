"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const TrintaDiasSection: React.FC = () => {
  return (
    <section className="py-12 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Imagem à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-5/12"
          >
            <img
              src="/30dias.avif"
              alt="Garantia de 30 dias"
              className="w-3/4 md:w-full h-auto rounded-2xl shadow-2xl mx-auto"
            />
          </motion.div>

          {/* Conteúdo à direita */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-7/12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                30 Dias para Decidir.
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Sem Risco.
              </span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Teste nossa solução por 30 dias. Se não sentir diferença real no seu negócio, você não paga nada. Simples assim. Garantido em contrato!
            </p>

            <div className="mt-8">
              <Link
                href="/contato"
                className="group inline-flex items-center gap-2 md:gap-3 rounded-full bg-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-black shadow-lg shadow-gray-900/20 transition-all hover:bg-gray-200 hover:scale-105"
              >
                Quero testar sem compromisso
                <span className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:translate-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrintaDiasSection;