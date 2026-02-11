"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, animate, type AnimationPlaybackControls } from "framer-motion";

const partners = [
  { name: "Miolar", src: "/logo-miolar.png" },
  { name: "Açãí da Barra", src: "/logo-acai.png" },
  { name: "Emov", src: "/logo-emov.png" },
  { name: "Volkano", src: "/logo-volkano.png" },
  { name: "LegNet", src: "/logo-legnet.png" },
  { name: "Chilli Beans", src: "/logo-chilli.png" },
  { name: "Unisep", src: "/logo-unisep.png" },
  { name: "Fleurity", src: "/logo-fleurity.png" },
  { name: "Cheirin Bão", src: "/logo-bao.png" },
];

const ParceriasSection: React.FC = () => {
  // MotionValue com unidade (%)
  const x = useMotionValue("0%");

  // Guarda o “player” da animação pra poder pausar/retomar
  const playerRef = useRef<AnimationPlaybackControls | null>(null);

  useEffect(() => {
    // anima de 0% até -25% em loop infinito
    playerRef.current = animate(x, ["0%", "-25%"], {
      duration: 30,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => {
      playerRef.current?.stop();
      playerRef.current = null;
    };
  }, [x]);

  const handlePause = () => playerRef.current?.pause();
  const handlePlay = () => playerRef.current?.play();

  return (
    <section className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 mb-16 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Empresas que já tomaram essa decisão
        </motion.h2>
      </div>

      {/* Container do Carrossel */}
      <div className="flex relative overflow-hidden" onMouseEnter={handlePause} onMouseLeave={handlePlay}>
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#070708] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#070708] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 items-center whitespace-nowrap"
          style={{ x }}
        >
          {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[200px] h-24 bg-white/5 rounded-xl border border-white/10 hover:border-orange-500/50 transition-colors group cursor-default p-4"
            >
              <img
                src={partner.src}
                alt={partner.name}
                className="w-full h-full object-contain opacity-40 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ParceriasSection;
