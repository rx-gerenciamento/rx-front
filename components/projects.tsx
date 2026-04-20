"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Reveal } from "./reveal"
import { SectionHeader } from "./ui/section-header"
import { ProjectModal } from "./project-modal"
import type { Project } from "@/types/project"
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "@/data/projects"

const GAP = 24
const n = FEATURED_PROJECTS.length
const ITEMS = [...FEATURED_PROJECTS, ...FEATURED_PROJECTS, ...FEATURED_PROJECTS]

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [active, setActive] = useState(n)
  const [instant, setInstant] = useState(false)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const firstCardRef = useRef<HTMLDivElement>(null)
  const [dims, setDims] = useState({ wrapper: 0, card: 0 })
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined)
  const activeRef = useRef(n)

  useEffect(() => {
    const measure = () => setDims({
      wrapper: wrapperRef.current?.offsetWidth ?? 0,
      card: firstCardRef.current?.offsetWidth ?? 0,
    })
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  const step = dims.card + GAP
  const x = (dims.wrapper - dims.card) / 2 - active * step

  const advance = useCallback(() => {
    setInstant(false)
    setActive(prev => { activeRef.current = prev + 1; return prev + 1 })
  }, [])

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(advance, 4000)
  }, [advance])

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [startTimer])

  const go = (dir: "prev" | "next") => {
    setInstant(false)
    setActive(prev => {
      const next = dir === "next" ? prev + 1 : prev - 1
      activeRef.current = next
      return next
    })
    startTimer()
  }

  const handleAnimationComplete = () => {
    if (instant) { setInstant(false); return }
    const cur = activeRef.current
    if (cur >= n * 2 || cur < n) {
      const next = cur >= n * 2 ? cur - n : cur + n
      activeRef.current = next
      setInstant(true)
      setActive(next)
    }
  }

  const realIndex = ((active - n) % n + n) % n

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="mb-12 text-center px-4">
        <Reveal>
          <SectionHeader
            title="Projetos e Depoimentos"
            subtitle="O que já realizamos e o que dizem sobre nós"
            className="mb-0"
            onLight
          />
        </Reveal>
      </div>

      <div ref={wrapperRef} className="relative overflow-hidden py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-linear-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-linear-to-l from-white to-transparent z-10" />

        <button
          onClick={() => go("prev")}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-all"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => go("next")}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-all"
        >
          <ChevronRight size={18} />
        </button>

        <motion.div
          className="flex"
          style={{ gap: GAP }}
          animate={{ x }}
          transition={instant ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 32 }}
          onAnimationComplete={handleAnimationComplete}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, { offset }) => {
            if (offset.x < -50) go("next")
            else if (offset.x > 50) go("prev")
          }}
        >
          {ITEMS.map((project, i) => {
            const isActive = i === active
            return (
              <motion.div
                key={`${project.id}-${i}`}
                ref={i === 0 ? firstCardRef : undefined}
                className="shrink-0 w-[80vw] max-w-2xl relative rounded-3xl overflow-hidden"
                style={{ aspectRatio: "16/10", cursor: isActive ? "pointer" : "default" }}
                animate={{ scale: isActive ? 1 : 0.88, opacity: isActive ? 1 : 0.45 }}
                transition={{ duration: 0.4 }}
                onClick={() => isActive ? setSelected(project) : setActive(i)}
              >
                <Image src={project.images[0]} alt={project.name} fill className="object-cover" draggable={false} />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-white font-bold text-2xl leading-tight">{project.name}</h3>
                      <p className="text-white/50 text-sm">{project.location}</p>
                    </div>
                    <motion.div
                      className="hidden sm:block max-w-xs bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10"
                      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 24 }}
                      transition={{ duration: 0.45, delay: isActive ? 0.2 : 0 }}
                    >
                      <Quote size={14} className="text-brand mb-1" />
                      <p className="text-white/80 text-xs leading-relaxed italic line-clamp-3">{project.testimonial?.text}</p>
                      <p className="text-brand font-semibold text-xs mt-2">{project.testimonial?.author}</p>
                    </motion.div>
                  </div>
                </div>

                {isActive && (
                  <motion.div
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 text-white text-xs font-medium"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Ver detalhes <ArrowRight size={12} className="inline-block" />
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        {FEATURED_PROJECTS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const next = n + i
              activeRef.current = next
              setInstant(false)
              setActive(next)
              startTimer()
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${realIndex === i ? "w-6 bg-brand" : "w-1.5 bg-gray-300 hover:bg-gray-400"}`}
          />
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="container-custom mt-14">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px flex-1 bg-gray-200" />
            <p className="text-gray-400 text-xs uppercase p-4 tracking-widest shrink-0">Outros projetos realizados</p>
            <div className="h-px flex-1 bg-gray-200" />
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

      {/* Gradient transition to CTA */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-b from-transparent to-gray-300 pointer-events-none z-20" />
    </section>
  )
}
