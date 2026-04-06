"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram, MapPin, Phone, Mail } from "lucide-react"
import { CONTACT } from "@/constants/contact"

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.428a.5.5 0 0 0 .609.61l5.652-1.479A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.886 9.886 0 0 1-5.031-1.371l-.36-.214-3.733.977.999-3.648-.235-.374A9.863 9.863 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1S21.9 6.533 21.9 12 17.467 21.9 12 21.9z" />
  </svg>
)

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: CONTACT.instagram, isLucide: true },
  { name: "WhatsApp", icon: WhatsAppIcon, href: CONTACT.whatsappUrl, isLucide: false },
]

const contactInfo = [
  { icon: MapPin, text: CONTACT.address },
  { icon: Phone, text: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}` },
  { icon: Mail, text: CONTACT.email, href: `mailto:${CONTACT.email}` },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy">
      <div className="container-custom pt-14 pb-10">
        <div className="grid py-4 grid-cols-1 md:grid-cols-[2fr_1.5fr_1.5fr] gap-10 lg:gap-14 mb-10">

          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/rxLogoVetor.svg"
              alt="RX Gerenciamento"
              width={90}
              height={34}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              A RX Gerenciamento une gestão e tecnologia para levar transparência e controle à construção civil. Obras sem surpresas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold mt-5 uppercase tracking-widest text-brand mb-6">
              Contato
            </h4>
            <ul className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon size={17} className="shrink-0 mt-0.5 text-brand" />
                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-white/55 hover:text-white transition-colors duration-200 leading-snug"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-sm text-white/55 leading-snug">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold mt-5 uppercase tracking-widest text-brand mb-6">
              Redes sociais
            </h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="flex items-center gap-3 text-white/55 hover:text-white transition-colors duration-200 group w-fit"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-8 h-8 bg-white/8 group-hover:bg-brand/15 border border-white/10 group-hover:border-brand/30 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:text-brand">
                    {social.isLucide
                      ? <social.icon size={15} />
                      : <social.icon />
                    }
                  </div>
                  <span className="text-sm font-medium">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 pb-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-white/35">
            &copy; {currentYear} RX Gerenciamento. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
