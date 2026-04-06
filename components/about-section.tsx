"use client"

import Image from "next/image"
import { Reveal } from "./reveal"
import { Button } from "./ui/button"
import { getWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from "@/constants/contact"

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 lg:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <Reveal>
            <div className="flex justify-center">
              <Image
                src="/rxLogoVetor.svg"
                alt="RX Gerenciamento"
                width={340}
                height={255}
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            <Reveal>
              <span className="text-label text-brand">
                Sobre nós
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy">
                Sobre a RX
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base text-neutral-600 leading-relaxed">
                A RX Gerenciamento une gestão e tecnologia para eliminar o imprevisto na
                construção civil. Trabalhamos com dados, transparência e controle para que
                sua obra seja sólida e planejada.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-base text-neutral-600 leading-relaxed">
                Com a liderança de Roberta e Gabriel, oferecemos soluções completas em
                orçamento, planejamento, gerenciamento e BIM, sempre com foco em
                transparência, qualidade e cumprimento de prazos.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base font-semibold leading-relaxed text-brand">
                Já somamos mais de R$ 328 milhões orçados e R$ 248 milhões em obras
                públicas, além de dezenas de empreendimentos acompanhados e
                gerenciados em todo o Brasil.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <Button href={getWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </Button>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
