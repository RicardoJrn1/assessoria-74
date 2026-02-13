"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { HiBars3, HiXMark } from "react-icons/hi2"

const navLinks = [
  { name: "Início", href: "/#inicio" },
  { name: "Quem Somos", href: "/#quem-somos" },
  { name: "Soluções", href: "/#solucoes" },
  { name: "Resultados", href: "/#resultados" },
  { name: "Blog", href: "/blog" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}
        `}
      >
        <div className="container mx-auto flex justify-between items-center p-4 relative">
          {/* Logo */}
          <Link
            href="/"
            className="z-50 flex items-center gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/logo-74.png"
              alt="Assessoria 74"
              width={48}
              height={48}
              className="h-10 w-auto md:h-12"
              priority
            />
            <span className="hidden md:inline text-white font-bold text-lg md:text-xl tracking-tight">
              Assessoria <span className="text-orange-500">74</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-8 text-white font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="relative group">
                    {link.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/554699007494?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Assessoria%2074."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block px-6 py-2 bg-orange-500 text-white font-bold rounded-full
                      hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/20"
          >
            Fale com um especialista
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white z-50 p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <HiBars3 size={28} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-[70] bg-black/80 backdrop-blur-xl border-l border-white/10 shadow-2xl md:hidden flex flex-col"
            >
              {/* Header do Menu */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white p-2 hover:text-orange-500 transition-colors"
                  aria-label="Fechar menu"
                >
                  <HiXMark size={32} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 px-8 py-4 flex flex-col gap-8">
                <ul className="flex flex-col gap-6 text-white">
                  {navLinks.map((link) => (
                    <li key={link.name} className="border-b border-white/10 pb-4 last:border-0">
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block w-full hover:text-orange-500 transition-colors text-2xl font-light tracking-wide"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://wa.me/554699007494?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Assessoria%2074."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl text-center hover:bg-orange-600 transition-colors shadow-lg block"
                >
                  Fale com um especialista
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
