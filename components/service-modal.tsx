"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Check } from "lucide-react"
import { Button } from "./ui/button"
import type { Service } from "@/data/services"
import { getWhatsAppUrl } from "@/constants/contact"

export function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const whatsappUrl = getWhatsAppUrl(
    `Olá, vim pelo site e tenho interesse no serviço de ${service.name}`
  )

  return (
    <AnimatePresence>
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
          className="relative w-full max-w-md bg-navy rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-semibold text-brand uppercase tracking-widest">Serviço</span>
              <h3 className="text-xl font-bold text-white mt-1">{service.name}</h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-colors shrink-0 ml-4 mt-0.5"
            >
              <X size={15} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 flex flex-col gap-5">
            <p className="text-white/75 text-sm leading-relaxed">{service.details}</p>

            <ul className="flex flex-col gap-3">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-brand" />
                  </span>
                  <span className="text-white/80 text-sm leading-snug">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="px-6 pb-6">
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center"
            >
              Entrar em contato
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
