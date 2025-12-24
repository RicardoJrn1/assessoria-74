"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi2";

const faqs = [
  {
    question: "Como funciona?",
    answer: "O resultado depende de uma boa estratégia e execução consistente. Nosso trabalho é garantir que você tenha não apenas visibilidade, mas oportunidades reais de venda. São mais de 400 milhões em vendas para pequenas, médias e grandes empresas, por que motivo não funcionária com a sua empresa?",
  },
  {
    question: "Em quanto tempo vejo os primeiros resultados?",
    answer: "Campanhas de tráfego pago podem gerar movimento em poucos dias. Para construção de marca, os primeiros 30 a 90 dias são de estruturação e otimização. Cada estratégia tem seu tempo.",
  },
  {
    question: "Qual o investimento mínimo em tráfego?",
    answer: "O investimento é personalizado de acordo com seu negócio, mercado e objetivos. Definimos o valor ideal após analisar seu caso específico para garantir os melhores resultados.",
  },
  {
    question: "Como vou acompanhar os resultados?",
    answer: "Você recebe relatórios em linguagem simples, focados no que importa: vendas, oportunidades e retorno. Nada de jargões técnicos - tudo traduzido para o mundo real do seu negócio.",
  },
  {
    question: "Como funciona nossa parceria?",
    answer: "Cuidamos da parte estratégica, técnica e criativa. Você fornece informações sobre seu negócio e materiais quando necessário. É uma parceria para o seu crescimento.",
  },
  {
    question: "Como funciona o contrato?",
    answer: "A maioria dos clientes começa com contrato trimestral para construir base sólida. Depois, ajustamos conforme seu crescimento. Cancelamento é simples, com aviso prévio de 30 dias. "
  },
  {
    question: "Vocês têm cases de sucesso?",
    answer: "Sim! São mais de 400 milhões em resultados. Tendo em nosso portifólio grandes empresas. Trabalhamos com diversos setores: food service, varejo, moda, fitness, educação, e-commerce, Dentistas, Médicos, eventos software. Se você tem uma empresa, podemos te atender. Podemos compartilhar cases similares ao seu negócio.",
  },
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
          >
            Perguntas Frequentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg"
          >
            Tire suas dúvidas sobre como podemos ajudar seu negócio.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border rounded-2xl bg-white/5 overflow-hidden transition-colors duration-300 ${
                activeIndex === index ? "border-orange-500/50" : "border-white/10"
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-semibold transition-colors ${activeIndex === index ? "text-white" : "text-white/80"}`}>
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`ml-4 ${activeIndex === index ? "text-orange-500" : "text-white/40"}`}
                >
                  <HiChevronDown className="w-6 h-6" />
                </motion.span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-white/60 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
