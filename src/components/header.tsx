"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Usando o Link do Next.js para melhor navegação

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Define o estado com base na posição do scroll (10px é suficiente)
      setIsScrolled(window.scrollY > 10);
    };

    // Adiciona o listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpa o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      // Animação de entrada com Framer Motion
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      // Classes dinâmicas para o efeito de scroll
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-black/50 backdrop-blur-lg shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto flex justify-between items-center p-4 relative">
        {/* Área da Logo */}
        <Link href="/" className="text-3xl font-extrabold text-orange-500">
          74
        </Link>

        {/* Navegação */}
        <nav className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-8 text-white font-medium">
            <li>
              <Link href="/" className="relative group">
                Início
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="relative group">
                Quem Somos
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/contato" className="relative group">
                Soluções
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/blog" className="relative group">
                Resultados
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/blog" className="relative group">
                Blog
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botão de Ação */}
        <Link
          href="/contato"
          className="px-6 py-2 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/20"
        >
          Fale com um especialista
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
