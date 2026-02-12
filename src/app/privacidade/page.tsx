import type { Metadata } from "next"
import Header from "../../components/header"
import Footer from "../../components/footer"
import PrivacidadeSection from "../../components/privacidade-section"

export const metadata: Metadata = {
  title: "Política de Privacidade - Assessoria 74",
  description: "Política de Privacidade da The Agency 74. Saiba como coletamos, utilizamos e protegemos seus dados pessoais.",
}

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      <PrivacidadeSection />
      <Footer />
    </>
  )
}
