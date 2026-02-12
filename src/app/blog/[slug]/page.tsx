import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { HiOutlineUser, HiOutlineClock, HiArrowLeft } from "react-icons/hi2"
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import { posts, getPostBySlug } from "../../../data/blog-posts"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.filter((p) => p.content !== null).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} - Blog da 74`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post || !post.content) {
    notFound()
  }

  return (
    <>
      <Header />
      <article className="w-full pt-32 pb-16 md:pt-40 md:pb-24 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Voltar */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-orange-500 transition-colors mb-8"
          >
            <HiArrowLeft className="w-4 h-4" />
            Voltar ao blog
          </Link>

          {/* Imagem de capa */}
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Header do artigo */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/50 mb-10 pb-8 border-b border-white/10">
            <span className="flex items-center gap-1.5">
              <HiOutlineUser className="w-4 h-4" />
              {post.autor}
            </span>
            <span className="flex items-center gap-1.5">
              <HiOutlineClock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="text-orange-500 font-semibold">
              {post.date}
            </span>
          </div>

          {/* Conteúdo do artigo */}
          <div className="prose-blog space-y-5 text-white/80 leading-relaxed text-base md:text-lg [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-orange-500 [&>h3]:mt-8 [&>h3]:mb-3 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:text-white/70 [&>p>strong]:text-white">
            {post.content}
          </div>

          {/* Outros artigos */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-8">Leia também</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts
                .filter((p) => p.slug !== post.slug)
                .map((other) => (
                  <Link
                    key={other.slug}
                    href={other.content ? `/blog/${other.slug}` : "/blog"}
                    className="group flex flex-col rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-white/[0.07] transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative w-full h-40 overflow-hidden">
                      <Image
                        src={other.image}
                        alt={other.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h4 className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors leading-snug line-clamp-2 mb-2">
                        {other.title}
                      </h4>
                      <div className="flex items-center justify-between text-[10px] text-white/40">
                        <span className="flex items-center gap-1">
                          <HiOutlineUser className="w-3 h-3" />
                          {other.autor}
                        </span>
                        <span className="text-orange-500 font-semibold">
                          {other.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="text-sm text-white/50 hover:text-orange-500 transition-colors"
              >
                ← Ver todos os artigos
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
