import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Montserrat } from "next/font/google"
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
  description: "",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Ajuste fino aqui (posições do “quadrado”)
  const leftEdge = "12%"
  const midLine = "50%"
  const rightEdge = "88%"

  // Altura do “quadrado” (linhas horizontais)
  const topEdge = "12%"
  const bottomEdge = "88%"

  // Opacidade das linhas (bem sutil, estilo print)
  const lineOpacity = 0.09

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
            {/* 3 linhas verticais (mantendo como já estavam) */}
            {[leftEdge, midLine, rightEdge].map((left) => (
              <div
                key={left}
                className="absolute top-0 h-full w-px bg-white"
                style={{ left, opacity: lineOpacity }}
              />
            ))}

            {/* 2 linhas horizontais “fechando o quadrado” */}
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
        </div>

        <main className="flex flex-col min-h-screen">{children}</main>
      </body>
    </html>
  )
}
