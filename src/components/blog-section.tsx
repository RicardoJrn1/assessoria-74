"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { HiOutlineUser, HiOutlineClock } from "react-icons/hi2"
import { posts } from "../data/blog-posts"

export default function BlogSection() {
  return (
    <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent pb-2"
          >
            Blog da 74
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
          >
            Conteúdos sobre performance, vendas e estratégia digital para quem quer crescer de verdade.
          </motion.p>
        </div>

        {/* Layout: destaque à esquerda + lista à direita */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Post destaque (mais recente) */}
          <Link href={posts[0].content ? `/blog/${posts[0].slug}` : "/blog"}>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative flex flex-col rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-white/[0.07] transition-all duration-300 overflow-hidden h-full cursor-pointer"
            >
              <div className="relative w-full h-64 md:h-80 overflow-hidden">
                <Image
                  src={posts[0].image}
                  alt={posts[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold uppercase tracking-wider">
                  Mais recente
                </span>
              </div>

              <div className="flex flex-col flex-grow p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors leading-tight">
                  {posts[0].title}
                </h2>

                <p className="text-white/60 text-sm md:text-base leading-relaxed flex-grow mb-6">
                  {posts[0].excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-white/40 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <HiOutlineUser className="w-3.5 h-3.5" />
                      {posts[0].autor}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <HiOutlineClock className="w-3.5 h-3.5" />
                      {posts[0].readTime}
                    </span>
                  </div>
                  <span className="text-orange-500 font-semibold">
                    {posts[0].date}
                  </span>
                </div>
              </div>
            </motion.article>
          </Link>

          {/* Posts secundários empilhados */}
          <div className="flex flex-col gap-6">
            {posts.slice(1).map((post, index) => {
              const card = (
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group flex flex-row rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-white/[0.07] transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* Imagem lateral */}
                  <div className="relative w-32 md:w-40 shrink-0 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="flex flex-col flex-grow p-4 md:p-5">
                    <h2 className="text-sm md:text-base font-bold text-white mb-2 group-hover:text-orange-400 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-white/50 text-xs leading-relaxed flex-grow line-clamp-2 mb-3 hidden md:block">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-[10px] text-white/40">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <HiOutlineUser className="w-3 h-3" />
                          {post.autor}
                        </span>
                        <span className="flex items-center gap-1">
                          <HiOutlineClock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="text-orange-500 font-semibold">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </motion.article>
              )

              return post.content ? (
                <Link key={post.slug} href={`/blog/${post.slug}`}>{card}</Link>
              ) : (
                <div key={post.slug}>{card}</div>
              )
            })}
          </div>
        </div>

        {/* Mensagem de novos conteúdos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/40 text-sm">
            Novos conteúdos em breve. Fique ligado nas nossas redes sociais!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
