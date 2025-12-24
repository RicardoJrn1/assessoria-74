"use client";

import React from "react";
import { motion } from "framer-motion";

export default function QuatrocentosMilhoesSection() {
  return (
    <section className="w-full py-16 bg-red-600">
      <div className="container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            + R$400 Milhões
          </h2>
          <p className="mt-2 text-lg md:text-xl font-medium text-white/80">
            Contribuídos em Receita
          </p>
        </motion.div>
      </div>
    </section>
  );
}