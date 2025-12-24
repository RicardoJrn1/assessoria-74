"use client";

import React from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Link from "next/link";

const ResultadosSection: React.FC = () => {
  return (
    <section id="resultados" className="w-full py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 max-w-6xl mx-auto items-center">

          {/* 1. IMAGEM (Esquerda) */}
          <motion.div
            className="order-2 md:order-none"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/resultados.avif"
                alt="Acompanhamento de resultados pelo WhatsApp"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* 2. TEXTO 1 (Direita) - Referente à Imagem */}
          <motion.div
            className="order-1 md:order-none text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Veja claramente como seus resultados evoluem.
              </span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Acompanhe toda a sua operação de marketing através do seu WhatsApp,
              sem complicação nem planilha misteriosa.
            </p>
          </motion.div>

          {/* 3. PILL (Esquerda) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center md:justify-start pl-6 md:pl-35 order-4 md:order-none"
          >
            <div className="relative z-20">
              <GlowPillAnimated />
            </div>
          </motion.div>

          {/* 4. TEXTO 2 (Direita) - Referente ao PILL */}
          <motion.div
            className="order-3 md:order-none text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Facilidade com Resultado.
              </span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Usamos estratégia pra identificar o que realmente traz retorno pro
              seu negócio.
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <Link
                href="/contato"
                className="group inline-flex items-center gap-2 md:gap-3 rounded-full bg-red-500 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-white shadow-lg shadow-red-500/20 transition-all hover:bg-red-600 hover:scale-105"
              >
                Facilite meu negócio
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

export default ResultadosSection;

function GlowPillAnimated() {
  const trackRef = React.useRef<HTMLDivElement | null>(null);

  // x do knob em pixels
  const x = useMotionValue(0);

  const [maxX, setMaxX] = React.useState(0);
  const [active, setActive] = React.useState<"left" | "right" | null>("left");

  // medidas visuais (tem que bater com Tailwind)
  const PAD = 8; // left-2 / right-2
  const KNOB = 48; // h-12 w-12
  const ICON = 48; // h-12 w-12

  // calcula maxX baseado na largura real do pill
  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const compute = () => {
      const w = track.clientWidth;
      // knob vai do PAD até (w - PAD - KNOB)
      const nextMax = Math.max(0, w - PAD * 2 - KNOB);
      setMaxX(nextMax);
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(track);
    return () => ro.disconnect();
  }, []);

  // anima o knob (loop)
  React.useEffect(() => {
    if (maxX <= 0) return;

    const controls = animate(x, [0, maxX, 0], {
      duration: 3.2,
      ease: "easeInOut",
      repeat: Infinity,
    });

    return () => controls.stop();
  }, [maxX, x]);

  // detecta quando o knob está "em cima" dos ícones
  React.useEffect(() => {
    const unsub = x.on("change", (v) => {
      // centro do knob (relativo ao track)
      const knobCenter = PAD + v + KNOB / 2;

      const leftIconCenter = PAD + ICON / 2;
      const rightIconCenter = PAD + maxX + ICON / 2;

      const distLeft = Math.abs(knobCenter - leftIconCenter);
      const distRight = Math.abs(knobCenter - rightIconCenter);

      // raio de "ativação"
      const threshold = 18;

      if (distLeft <= threshold) setActive("left");
      else if (distRight <= threshold) setActive("right");
      else setActive(null);
    });

    return () => unsub();
  }, [x, maxX]);

  return (
    <div className="relative">
      {/* glow externo */}
      <div className="absolute -inset-10 rounded-full bg-orange-500/10 blur-2xl" />

      {/* pill (trilho) */}
      <div
        ref={trackRef}
        className="relative h-14 w-[260px] rounded-full border border-orange-500/40 bg-gradient-to-r from-orange-500/10 via-orange-500/25 to-orange-500/10 backdrop-blur-md overflow-hidden"
      >
        {/* ícone esquerdo FIXO */}
        <div
          className={[
            "absolute left-2 top-1/2 -translate-y-1/2 z-10",
            "grid h-12 w-12 place-items-center rounded-full border border-orange-500/40 bg-black/30 transition",
            active === "left"
              ? "scale-[1.03] border-orange-500/70 shadow-[0_0_18px_rgba(255,106,0,0.35)]"
              : "opacity-90",
          ].join(" ")}
        >
          <SparkIcon active={active === "left"} />
        </div>

        {/* ícone direito FIXO */}
        <div
          className={[
            "absolute right-2 top-1/2 -translate-y-1/2 z-10",
            "grid h-12 w-12 place-items-center rounded-full border border-orange-500/40 bg-black/30 transition",
            active === "right"
              ? "scale-[1.03] border-orange-500/70 shadow-[0_0_18px_rgba(255,106,0,0.35)]"
              : "opacity-85",
          ].join(" ")}
        >
          <GlobeIcon active={active === "right"} />
        </div>

        {/* knob branco (ÚNICO elemento que se move) */}
        <motion.div
          className="absolute left-2 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full bg-white ring-1 ring-orange-500/30 shadow-[0_0_25px_rgba(255,255,255,0.35)]"
          style={{ x }}
        />

        {/* ring interno premium */}
        <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />
      </div>
    </div>
  );
}

/* Ícones com “resposta” (mudam levemente quando ativo) */
function SparkIcon({ active }: { active?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2z"
        fill={active ? "#FF6A00" : "rgba(255,106,0,0.85)"}
      />
      <path
        d="M19 13l.7 3 2.3.8-2.3.8-.7 3-.7-3-2.3-.8 2.3-.8.7-3z"
        fill={active ? "#FF6A00" : "rgba(255,106,0,0.7)"}
        opacity="0.9"
      />
    </svg>
  );
}

function GlobeIcon({ active }: { active?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={active ? "#FF6A00" : "rgba(255,106,0,0.8)"}
        strokeWidth="1.8"
      />
      <path d="M2 12h20" stroke={active ? "#FF6A00" : "rgba(255,106,0,0.8)"} strokeWidth="1.8" />
      <path
        d="M12 2c3 3 3 17 0 20"
        stroke={active ? "#FF6A00" : "rgba(255,106,0,0.8)"}
        strokeWidth="1.8"
      />
      <path
        d="M12 2c-3 3-3 17 0 20"
        stroke={active ? "#FF6A00" : "rgba(255,106,0,0.6)"}
        strokeWidth="1.8"
      />
    </svg>
  );
}
