"use client";

import { motion } from "framer-motion";
import React from "react";
import { HiOutlineChartBar, HiOutlineBriefcase, HiOutlineCursorArrowRays } from "react-icons/hi2";

const QuemSomosSection: React.FC = () => {
  return (
    <section id="quem-somos" className="relative text-white py-12 md:py-16 overflow-hidden">
      {/* linha vertical central sutil */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden md:block w-px bg-white/10" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center font-bold tracking-tight text-orange-500 text-4xl md:text-5xl lg:text-6xl"
          >
            Quem Somos
          </motion.h2>

          {/* Bloco 1 */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-8 md:mt-10 space-y-4 md:space-y-5 text-base md:text-lg leading-relaxed text-white/90"
          >
            <p>
              Na Assessoria 74, nós não somos apenas mais uma agência de marketing. Somos especialistas em{" "}
              <span className="font-semibold text-white">marketing direto e performance</span>, com uma missão clara:{" "}
              <span className="font-semibold text-orange-500">
                transformar cada real investido em resultado palpável no caixa da sua empresa.
              </span>
            </p>

            <p>
              Sabemos que você já deve ter ouvido promessas bonitas antes. Também já vimos dezenas de empresários gastarem
              R$2.000, R$7.000, até R$150.000,00 mil por mês com agências que entregam relatórios coloridos e zero
              retorno.
            </p>

            <p>
              Aqui, jogamos diferente: o que importa não é o PowerPoint, e sim o aumento real do seu faturamento.
            </p>
          </motion.div>

          {/* Subtítulo */}
          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-12 md:mt-16 text-center font-extrabold text-orange-500 text-2xl md:text-3xl"
          >
            Por que fazemos isso?
          </motion.h3>

          {/* Bloco 2 (menor) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mx-auto max-w-3xl mt-8 md:mt-10 space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed text-white/90"
          >
            <p>
              Porque cansamos de ver empresas sendo enganadas por falsas promessas. Criamos a 74 para ser{" "}
              <span className="font-semibold text-orange-500">
                a agência que mede sucesso em vendas, não em curtidas.
              </span>
            </p>

            <p>
              Hoje, acumulamos{" "}
              <span className="font-semibold text-orange-500">+400 milhões em vendas geradas para nossos clientes</span>,
              atuando em setores como alimentação, fitness, moda, tecnologia e SaaS. E seguimos crescendo com um
              propósito simples:{" "}
              <span className="font-semibold text-orange-500">
                ajudar pequenas e médias empresas a vender mais, sem enrolação.
              </span>
            </p>

            <p>
              Na Assessoria 74, a gente acredita tanto no que faz que assumimos o risco no seu lugar.
            </p>

            <p>
              Você tem <span className="font-semibold text-orange-500">30 dias para ver resultado real</span>.{" "}
              <span className="font-semibold uppercase text-white">Garantido em contrato</span>. Se não enxergar valor
              nesse período, você <span className="font-semibold text-orange-500">não paga nada</span>.
            </p>

            <p>
              É simples:{" "}
              <span className="font-semibold text-orange-500">
                ou o marketing gera resultado, ou você segue a vida sem custo.
              </span>
            </p>
          </motion.div>

          {/* ======= FAIXA DE MÉTRICAS (como na imagem) ======= */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-24 md:mt-32"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center relative">
              {/* divisórias verticais */}
              <div className="hidden md:block absolute left-1/3 top-0 h-full w-px bg-white/10" />
              <div className="hidden md:block absolute left-2/3 top-0 h-full w-px bg-white/10" />

              {/* Item 1 */}
              <div className="px-6">
                <HiOutlineChartBar className="mx-auto h-8 w-8 text-orange-500" />
                <p className="mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">+400 milhões</p>
                <p className="mt-2 text-sm md:text-base text-white/45 leading-snug">
                  em receitas contribuída para <br className="hidden md:block" />
                  nossos clientes.
                </p>
              </div>

              {/* Item 2 */}
              <div className="px-6">
                <HiOutlineBriefcase className="mx-auto h-8 w-8 text-orange-500" />
                <p className="mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">+100 empresas</p>
                <p className="mt-2 text-sm md:text-base text-white/45 leading-snug">atendidas</p>
              </div>

              {/* Item 3 */}
              <div className="px-6">
                <HiOutlineCursorArrowRays className="mx-auto h-8 w-8 text-orange-500" />
                <p className="mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">+21.000 leads</p>
                <p className="mt-2 text-sm md:text-base text-white/45 leading-snug">gerados.</p>
              </div>
            </div>
          </motion.div>
          {/* ======= /FAIXA DE MÉTRICAS ======= */}
        </div>
      </div>
    </section>
  );
};

export default QuemSomosSection;
