"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Reveal } from "./reveal"
import { SectionHeader } from "./ui/section-header"
import { ProjectModal } from "./project-modal"
import type { Project } from "@/types/project"
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "@/data/projects"

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [active, setActive] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollTo = (dir: "prev" | "next") => {
    const next = dir === "next"
      ? Math.min(active + 1, FEATURED_PROJECTS.length - 1)
      : Math.max(active - 1, 0)
    setActive(next)
    const container = scrollRef.current
    if (container) {
      const card = container.children[next] as HTMLElement
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
    }
  }

  return (
    <section className="relative py-24 overflow-hidden bg-section-navy-gradient">
      {/* Header */}
      <div className="mb-12 text-center px-4">
        <Reveal>
          <SectionHeader
            title="Projetos e Depoimentos"
            subtitle="O que já realizamos e o que dizem sobre nós"
            className="mb-0"
          />
        </Reveal>
      </div>

      {/* Featured carousel */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-[10vw] pb-6"
        style={{ scrollbarWidth: "none" }}
      >
        {FEATURED_PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            className="snap-center shrink-0 w-[80vw] max-w-xl relative rounded-3xl overflow-hidden cursor-pointer"
            style={{ aspectRatio: "16/10" }}
            onClick={() => setSelected(project)}
            animate={{ scale: active === i ? 1 : 0.95, opacity: active === i ? 1 : 0.6 }}
            transition={{ duration: 0.4 }}
            onViewportEnter={() => setActive(i)}
          >
            <Image src={project.images[0]} alt={project.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <span className="text-xs text-brand uppercase tracking-widest font-semibold">{project.category}</span>
                  <h3 className="text-white font-bold text-2xl leading-tight">{project.name}</h3>
                  <p className="text-white/50 text-sm">{project.location}</p>
                </div>
                <motion.div
                  className="hidden sm:block max-w-xs bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: active === i ? 1 : 0, x: active === i ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <Quote size={14} className="text-brand mb-1" />
                  <p className="text-white/80 text-xs leading-relaxed italic line-clamp-3">
                    {project.testimonial?.text}
                  </p>
                  <p className="text-brand font-semibold text-xs mt-2">{project.testimonial?.author}</p>
                </motion.div>
              </div>
            </div>

            <div className="absolute top-4 left-4 flex gap-2">
              {project.stats?.map((s) => (
                <div key={s.label} className="bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1.5 text-center">
                  <p className="text-white font-bold text-sm">{s.value}</p>
                  <p className="text-white/60 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={() => scrollTo("prev")}
          disabled={active === 0}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 disabled:opacity-20 transition-all"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {FEATURED_PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActive(i)
                const container = scrollRef.current
                if (container) {
                  const card = container.children[i] as HTMLElement
                  card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? "w-6 bg-brand" : "w-1.5 bg-white/30"}`}
            />
          ))}
        </div>
        <button
          onClick={() => scrollTo("next")}
          disabled={active === FEATURED_PROJECTS.length - 1}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 disabled:opacity-20 transition-all"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Other projects strip */}
      <Reveal delay={0.1}>
        <div className="container-custom mt-14">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px flex-1 bg-white/10" />
            <p className="text-white/40 text-xs uppercase p-6 tracking-widest shrink-0">Outros projetos realizados</p>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {OTHER_PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                className="relative rounded-xl overflow-hidden cursor-pointer group"
                style={{ aspectRatio: "3/2" }}
                onClick={() => setSelected(project)}
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Image src={project.images[0]} alt={project.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors duration-200" />
                <div className="absolute bottom-0 left-0 right-0 p-2.5">
                  <span className="text-[10px] text-brand/80 uppercase tracking-widest font-semibold block">{project.category}</span>
                  <p className="text-white font-semibold text-xs leading-tight">{project.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
