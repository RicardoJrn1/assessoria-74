"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { HiOutlineChartBar, HiOutlineBriefcase, HiOutlineCursorArrowRays } from "react-icons/hi2"

export default function QuemSomosSection() {
  return (
    <section id="quem-somos" className="relative text-white py-16 md:py-24 overflow-hidden bg-white/[0.02] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
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

          {/* Layout 2 colunas: texto + foto */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Coluna esquerda - texto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5 text-base md:text-lg leading-relaxed text-white/90"
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

            {/* Coluna direita - fotos da equipe */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="relative overflow-hidden rounded-2xl aspect-square">
                  <Image
                    src={`/hero-foto-conj-${num}.avif`}
                    alt={`Membro da equipe Assessoria 74`}
                    width={300}
                    height={300}
                    className={`w-full h-full object-cover ${num === 1 ? "object-[50%_25%]" : "object-top"} grayscale hover:grayscale-0 transition-all duration-500`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Cards de diferenciais */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">Nossa missão</span>
              <p className="mt-3 text-white/80 leading-relaxed">
                Criamos a 74 para ser{" "}
                <span className="font-semibold text-orange-500">
                  a agência que mede sucesso em vendas, não em curtidas.
                </span>
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">Nossa garantia</span>
              <p className="mt-3 text-white/80 leading-relaxed">
                Você tem <span className="font-semibold text-orange-500">30 dias para ver resultado real</span>.{" "}
                <span className="font-semibold uppercase text-white">Garantido em contrato</span>. Se não enxergar valor, você{" "}
                <span className="font-semibold text-orange-500">não paga nada</span>.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">Nosso resultado</span>
              <p className="mt-3 text-white/80 leading-relaxed">
                <span className="font-semibold text-orange-500">+400 milhões em vendas geradas</span>, atuando em
                alimentação, fitness, moda, tecnologia e SaaS.
              </p>
            </div>
          </motion.div>

          {/* Faixa de métricas */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 md:mt-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center relative">
              <div className="hidden md:block absolute left-1/3 top-0 h-full w-px bg-white/10" />
              <div className="hidden md:block absolute left-2/3 top-0 h-full w-px bg-white/10" />

              <div className="px-6">
                <HiOutlineChartBar className="mx-auto h-8 w-8 text-orange-500" />
                <p className="mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">+400 milhões</p>
                <p className="mt-2 text-sm md:text-base text-white/45 leading-snug">
                  em receitas contribuídas para <br className="hidden md:block" />
                  nossos clientes.
                </p>
              </div>

              <div className="px-6">
                <HiOutlineBriefcase className="mx-auto h-8 w-8 text-orange-500" />
                <p className="mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">+100 empresas</p>
                <p className="mt-2 text-sm md:text-base text-white/45 leading-snug">atendidas</p>
              </div>

              <div className="px-6">
                <HiOutlineCursorArrowRays className="mx-auto h-8 w-8 text-orange-500" />
                <p className="mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">+21.000 leads</p>
                <p className="mt-2 text-sm md:text-base text-white/45 leading-snug">gerados.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
