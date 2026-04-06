"use client"

import { motion } from "framer-motion"
import { Reveal } from "./reveal"
import { CheckCircle } from "lucide-react"
import { DIFFERENTIALS } from "@/data/differentials"

export function WhyUsSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      id="DIFFERENTIALS"
      style={{
        background: `radial-gradient(ellipse 90% 60% at 50% 110%, rgba(252,163,17,0.18) 0%, rgba(252,163,17,0.06) 40%, transparent 70%), #13213C`,
      }}
    >
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="text-white font-bold text-4xl lg:text-5xl mb-4">
              Por que escolher a RX
            </h2>
            <div className="w-16 h-1 bg-[#FCA311] mx-auto mb-4 rounded-full" />
            <p className="text-[#FCA311] font-semibold text-base">
              Diferenciais que fazem a diferença na sua obra
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {DIFFERENTIALS.map((item, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <motion.div
                className="flex items-start gap-5 bg-[#1a2d4a] border-l-4 border-[#FCA311] rounded-xl p-8 cursor-default"
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
                  <CheckCircle className="text-[#FCA311]" size={26} />
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
