"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { CheckCircle } from "lucide-react"
import { SectionHeader } from "./ui/section-header"
import { DIFFERENTIALS } from "@/data/differentials"

export function WhyUsSection() {
  return (
    <section
      className="relative py-24 overflow-hidden bg-section-navy-glow"
      id="DIFFERENTIALS"
    >
      <div className="container-custom">
        <Reveal>
          <SectionHeader
            title="Por que escolher a RX"
            subtitle="Diferenciais que fazem a diferença na sua obra"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {DIFFERENTIALS.map((item, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <motion.div
                className="flex items-start gap-5 bg-navy-800 border-l-4 border-brand rounded-xl p-8 cursor-default"
                whileHover={{
                  y: -4,
                  backgroundColor: "#1f3459",
                  boxShadow: "0 8px 32px rgba(252, 163, 17, 0.15)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="shrink-0 mt-0.5"
                >
                  <CheckCircle className="text-brand" size={26} />
                </motion.div>
                <p className="text-white font-semibold text-lg leading-snug">{item}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
