"use client";

import React from "react";
import { motion } from "framer-motion";
import { HiOutlineDocumentText, HiOutlinePhone } from "react-icons/hi2";

const CtaFinalSection: React.FC = () => {
  return (
    <section id="contato" className="w-full py-12 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
          >
            AVANCE PARA O PRÓXIMO NÍVEL EM MENOS DE UM MINUTO
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda - Cards */}
          <div className="space-y-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="flex-shrink-0">
                <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500">
                  <HiOutlineDocumentText className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Preencha o formulário</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Preencha seus dados com total segurança e privacidade. Em poucos segundos, você estará a um passo de transformar seus resultados.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="flex-shrink-0">
                <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500">
                  <HiOutlinePhone className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Aguarde nosso contato</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Em até uma hora, um especialista do nosso time entrará em contato para agendar uma conversa rápida e personalizada, focada no que é realmente importante para você.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Coluna Direita - Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Nome</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">E-mail Corporativo</label>
                <input
                  type="email"
                  id="email"
                  placeholder="seu@empresa.com.br"
                  className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg transition-all transform hover:scale-[1.02] mt-4 shadow-lg shadow-orange-500/20"
              >
                Receber Diagnóstico
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaFinalSection;
