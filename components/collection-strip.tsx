"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"
import { Button } from "./ui/button"
import { SERVICES, SERVICES_CARD_WIDTH, SERVICES_GAP, SERVICES_PADDING, type Service } from "@/data/services"
import { ServiceModal } from "./service-modal"

export function CollectionStrip() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const [maxDrag, setMaxDrag] = useState(0)
  const [activeService, setActiveService] = useState<Service | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -100])

  useEffect(() => {
    const check = () => {
      const totalWidth = SERVICES.length * (SERVICES_CARD_WIDTH + SERVICES_GAP) - SERVICES_GAP + SERVICES_PADDING
      const overflows = totalWidth > window.innerWidth
      setIsOverflowing(overflows)
      setMaxDrag(Math.max(0, totalWidth - window.innerWidth))
    }

    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return (
    <section id="servicos" ref={containerRef} className="py-20 lg:py-20 overflow-hidden bg-navy">
      <div className="mb-12">
        <Reveal>
          <div className="container-custom text-center">
            <h2 className="text-white font-bold mb-4 text-5xl">Serviços</h2>
            <p className="text-lg text-white">
              Explore os serviços personalizados que podemos oferecer para o sucesso da sua obra.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <motion.div
          className={`flex items-stretch gap-8 px-6 ${!isOverflowing ? "justify-center" : ""}`}
          style={isOverflowing ? { x } : undefined}
          drag={isOverflowing ? "x" : false}
          dragConstraints={isOverflowing ? { left: -maxDrag, right: 0 } : undefined}
          dragElastic={0.1}
        >
          {SERVICES.map((collection) => (
            <motion.div
              key={collection.id}
              className="shrink-0 w-72 group cursor-pointer flex flex-col"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="rounded-2xl overflow-hidden bg-navy-900 border border-white/10 flex flex-col h-full">
                <div className="relative h-52 w-full overflow-hidden shrink-0">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover"
                    sizes="288px"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-navy-900/60" />
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-white font-bold text-lg leading-snug">{collection.name}</h3>
                  <p className="text-white/70 text-sm leading-relaxed flex-1">{collection.desc}</p>
                  <div className="mt-1">
                    <Button
                      className="text-sm px-5 py-2.5"
                      onClick={() => setActiveService(collection)}
                    >
                      Saiba Mais
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {isOverflowing && (
        <div className="text-center mt-8">
          <p className="text-sm text-neutral-500">← Arraste para explorar as opções →</p>
        </div>
      )}

      <AnimatePresence>
        {activeService && (
          <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
