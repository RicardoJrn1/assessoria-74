import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#050505] border-t border-white/10 pt-16 pb-8 text-white relative overflow-hidden">
      {/* Efeito de brilho sutil no topo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1: Marca e Sobre */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-74.png"
                alt="Assessoria 74"
                width={56}
                height={56}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Transformamos dados em faturamento. Especialistas em marketing de performance e vendas para negócios que buscam escala real.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Navegação</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/#inicio" className="hover:text-orange-500 transition-colors duration-300">Início</Link>
              </li>
              <li>
                <Link href="/#quem-somos" className="hover:text-orange-500 transition-colors duration-300">Quem Somos</Link>
              </li>
              <li>
                <Link href="/#solucoes" className="hover:text-orange-500 transition-colors duration-300">Soluções</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-500 transition-colors duration-300">Blog</Link>
              </li>
              <li>
                <a href="https://wa.me/554699007494?text=Ol%C3%A1!%20Gostaria%20de%20entrar%20em%20contato%20com%20a%20Assessoria%2074." target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors duration-300">Contato</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/privacidade" className="hover:text-orange-500 transition-colors duration-300">Política de Privacidade</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Social & Contato */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Conecte-se</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.instagram.com/aassessoria74/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300 text-white/70 group"
                aria-label="Instagram"
              >
                <FaInstagram size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/company/assessoria74/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300 text-white/70 group"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://wa.me/554699007494?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Assessoria%2074."
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300 text-white/70 group"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <div className="text-white/60 text-sm space-y-1">
              <p>contato@assessoria74.com.br</p>
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs text-center md:text-left">
            &copy; {currentYear} Assessoria 74. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
