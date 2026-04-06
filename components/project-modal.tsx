"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/types/project"

export type { Project }

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [photoIndex, setPhotoIndex] = useState(0)

  const prev = () => setPhotoIndex((i) => (i - 1 + project.images.length) % project.images.length)
  const next = () => setPhotoIndex((i) => (i + 1) % project.images.length)

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        className="relative w-full max-w-3xl bg-[#13213C] rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {/* Photo gallery */}
        <div className="h-96 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={photoIndex}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <Image
                src={project.images[photoIndex]}
                alt={`${project.name} — foto ${photoIndex + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

          {/* Navigation arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="absolute right-12 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition-colors"
          >
            <X size={16} />
          </button>

          {/* Project info overlay */}
          <div className="absolute bottom-4 left-5">
            <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">
              {project.category}{project.year ? ` · ${project.year}` : ""}
            </span>
            <h3 className="text-2xl font-bold text-white">{project.name}</h3>
            <p className="text-white/60 text-sm">{project.location}</p>
          </div>

          {/* Stats */}
          {project.stats && (
            <div className="absolute bottom-4 right-5 flex gap-2">
              {project.stats.map((s) => (
                <div key={s.label} className="bg-black/40 backdrop-blur-sm rounded-lg px-3 py-1.5 text-center">
                  <p className="text-white font-bold text-sm">{s.value}</p>
                  <p className="text-white/60 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Dot indicators */}
          {project.images.length > 1 && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPhotoIndex(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === photoIndex ? "w-5 bg-white" : "w-1 bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`p-6 grid gap-6 ${project.testimonial ? "md:grid-cols-2" : "md:grid-cols-1"}`}>
          <div>
            <h4 className="text-[#FCA311] font-semibold text-sm uppercase tracking-widest mb-2">Sobre o Projeto</h4>
            <p className="text-white/80 text-sm leading-relaxed">{project.description}</p>
          </div>
          {project.testimonial && (
            <div className="bg-white/5 rounded-xl p-4 border-l-2 border-[#FCA311]">
              <Quote size={20} className="text-[#FCA311] mb-2" />
              <p className="text-white/80 text-sm leading-relaxed italic mb-3">{project.testimonial.text}</p>
              <p className="text-[#FCA311] font-semibold text-sm">{project.testimonial.author}</p>
              <p className="text-white/40 text-xs">{project.testimonial.city}</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
