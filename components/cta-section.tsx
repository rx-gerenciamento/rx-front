"use client"

import { Instagram } from "lucide-react"
import { Reveal } from "./reveal"
import { Button } from "./ui/button"
import { getWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE, CONTACT } from "@/constants/contact"

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.428a.5.5 0 0 0 .609.61l5.652-1.479A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.886 9.886 0 0 1-5.031-1.371l-.36-.214-3.733.977.999-3.648-.235-.374A9.863 9.863 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z" />
  </svg>
)

export function CtaSection() {
  return (
    <section id="contato" className="relative py-26 overflow-hidden bg-section-navy-gradient border-b border-white/10">
      <div className="container-custom relative z-10 flex flex-col items-center text-center gap-8">
        <Reveal>
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Gostou do que viu?{" "}
              <span className="italic font-light text-brand">Vamos conversar!</span>
            </h2>
            <div className="w-16 h-1 bg-brand rounded-full mt-2" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl">
            Nossa equipe está pronta para apresentar como a RX pode levar{" "}
            <span className="text-white font-semibold">transparência e controle</span>{" "}
            à sua obra — do orçamento à entrega.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={getWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2.5 text-base px-8 py-3.5"
            >
              <WhatsAppIcon />
              Falar no WhatsApp
            </Button>
            <Button
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="gap-2.5 text-base px-8 py-3.5"
            >
              <Instagram size={18} />
              Ver no Instagram
            </Button>
          </div>
        </Reveal>
      </div>

    </section>
  )
}
