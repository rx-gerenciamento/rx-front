"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Reveal } from "./reveal"
import { Button } from "./ui/button"
import { AnimatedText } from "./animated-text"
import { getWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from "@/constants/contact"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, y: imageY }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <Image
          src="/heroBg.png"
          alt="RX Mentoria"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #111E37 0%, rgba(19, 33, 60, 0.65) 50%, rgba(19, 33, 60, 0.35) 100%)",
          }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 h-full flex items-center justify-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="container-custom text-center text-white">
          <Reveal>
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
              <AnimatedText text="Excelência em Gestão de Obras de" delay={0.5} />
              <br />
              <span className="italic font-light">
                <AnimatedText text="Alto Padrão" delay={1.1} />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.p
              className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Transforme seu projeto em realidade com planejamento e gerenciamento de obras que garantem qualidade e custo-benefício.
            </motion.p>
          </Reveal>

          <Reveal delay={0.4}>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Button href={getWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer">Fale conosco</Button>
              <Button variant="outline">Conheça a RX</Button>
            </motion.div>
          </Reveal>
        </div>
      </motion.div>
    </section>
  )
}
