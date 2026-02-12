"use client"

import { motion } from "framer-motion"
import { HiOutlineUserGroup, HiOutlineUsers, HiOutlineBolt } from "react-icons/hi2"

const packages = [
  {
    name: "Time de Experts",
    description: "Um time dedicado de especialistas para negócios de alta complexidade, que exigem soluções robustas com agilidade, foco e excelência. Ideal para operações estratégicas que demandam atenção exclusiva.",
    icon: <HiOutlineUserGroup className="w-7 h-7" />,
    highlighted: false,
    whatsappMsg: "Ol%C3%A1!%20Tenho%20interesse%20no%20modelo%20Time%20de%20Experts%20da%20Assessoria%2074.%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
  },
  {
    name: "Time Compartilhado",
    description: "Especialistas compartilhados entre empresas, garantindo eficiência e redução de custos sem abrir mão da qualidade. Ideal para quem busca performance com mais economia.",
    icon: <HiOutlineUsers className="w-7 h-7" />,
    highlighted: true,
    whatsappMsg: "Ol%C3%A1!%20Tenho%20interesse%20no%20modelo%20Time%20Compartilhado%20da%20Assessoria%2074.%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
  },
  {
    name: "Projetos Pontuais",
    description: "Projetos personalizados para seu negócio: sites, criativos, dados e mais. Perfeito para necessidades específicas, com foco em agilidade e entrega sob demanda.",
    icon: <HiOutlineBolt className="w-7 h-7" />,
    highlighted: false,
    whatsappMsg: "Ol%C3%A1!%20Tenho%20interesse%20no%20modelo%20Projetos%20Pontuais%20da%20Assessoria%2074.%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
  },
]

export default function ModelosSection() {
  return (
    <section className="w-full py-16 md:py-24 text-white border-t border-white/5">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 group ${
                pkg.highlighted
                  ? "bg-orange-500/10 border-2 border-orange-500/60 scale-[1.02] md:scale-105 shadow-lg shadow-orange-500/10"
                  : "bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/[0.07]"
              }`}
            >
              {/* Badge mais popular */}
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-orange-500 text-white text-xs font-bold uppercase tracking-wider">
                  Mais Popular
                </div>
              )}

              {/* Ícone */}
              <div className={`mb-4 inline-flex items-center justify-center p-3 rounded-xl ${
                pkg.highlighted ? "bg-orange-500/20 text-orange-400" : "bg-white/10 text-orange-500"
              }`}>
                {pkg.icon}
              </div>

              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-br from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
                {pkg.name}
              </h3>

              <div className="flex-grow">
                <span className="block text-xs font-bold text-orange-500 uppercase tracking-widest mb-3">O que contempla</span>
                <p className="text-white/70 mb-8 leading-relaxed text-sm md:text-base">{pkg.description}</p>
              </div>

              <a
                href={`https://wa.me/554699007494?text=${pkg.whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-6 rounded-full font-bold text-center transition-all duration-300 block ${
                  pkg.highlighted
                    ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20"
                    : "border border-white/20 text-white hover:bg-orange-500 hover:border-orange-500 hover:text-white"
                }`}
              >
                Solicitar Orçamento
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
