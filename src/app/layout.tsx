import type { Metadata, Viewport } from "next"
import { Inter, Montserrat } from "next/font/google"
import BackgroundStrokes from "../components/background-strokes"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Assessoria 74",
  description:
    "Assessoria 74 - Especialistas em marketing de performance e vendas. +400 milhões em receita gerada para nossos clientes. Tráfego pago, estratégia digital e resultados reais.",
  openGraph: {
    title: "Assessoria 74 - Marketing de Performance e Vendas",
    description:
      "+400 milhões em receita gerada. Tráfego pago, estratégia digital e resultados reais para o seu negócio.",
    url: "https://assessoria74.com.br",
    siteName: "Assessoria 74",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Assessoria 74 - Marketing de Performance e Vendas",
    description:
      "+400 milhões em receita gerada. Tráfego pago, estratégia digital e resultados reais para o seu negócio.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

const leftEdge = "12%"
const midLine = "50%"
const rightEdge = "88%"
const topEdge = "12%"
const bottomEdge = "88%"
const lineOpacity = 0.09

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`
          relative min-h-screen overflow-x-hidden
          bg-[#070708] text-white
          ${inter.variable}
          ${montserrat.variable}
        `}
      >
        {/* Background global */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          {/* Glow central */}
          <div className="absolute inset-0 bg-[radial-gradient(55%_55%_at_50%_30%,rgba(255,132,0,0.35),rgba(0,0,0,0)_65%)]" />

          {/* Grade/linhas estilo print */}
          <div className="absolute inset-0">
            {[leftEdge, midLine, rightEdge].map((left) => (
              <div
                key={left}
                className="absolute top-0 h-full w-px bg-white"
                style={{ left, opacity: lineOpacity }}
              />
            ))}

            {[topEdge, bottomEdge].map((top) => (
              <div
                key={top}
                className="absolute h-px bg-white"
                style={{
                  top,
                  left: leftEdge,
                  right: `calc(100% - ${rightEdge})`,
                  opacity: lineOpacity,
                }}
              />
            ))}
          </div>

          {/* Fade vertical */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90" />

          {/* Traços subindo */}
          <BackgroundStrokes />
        </div>

        <main className="flex flex-col min-h-screen">{children}</main>
      </body>
    </html>
  )
}
