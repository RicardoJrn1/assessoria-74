import type { Metadata } from "next"
import Header from "../../components/header"
import Footer from "../../components/footer"
import BlogSection from "../../components/blog-section"

export const metadata: Metadata = {
  title: "Blog da 74 - Assessoria 74",
  description: "Conteúdos sobre marketing de performance, tráfego pago, estratégias digitais e vendas. Acompanhe as novidades do Blog da 74.",
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <BlogSection />
      <Footer />
    </>
  )
}
