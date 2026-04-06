"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { NAV_LINKS } from "@/data/navigation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b border-white/10"
        style={{ backgroundColor: isScrolled || menuOpen ? "#2C2F32F2" : "transparent" }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-12 lg:h-16 gap-4 lg:gap-8">
            <motion.div className="shrink-0" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <a href="#" aria-label="RX">
                <Image
                  src="/rxLogoVetor.svg"
                  alt="RX Logo"
                  width={80}
                  height={40}
                  className="brightness-0 invert w-14 h-auto md:w-16 lg:w-20"
                />
              </a>
            </motion.div>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    "text-white hover:text-white/80",
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              <span
                className={cn(
                  "block h-0.5 w-6 bg-white transition-all duration-300",
                  menuOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-white transition-all duration-300",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-white transition-all duration-300",
                  menuOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-12 left-0 right-0 z-40 backdrop-blur-md border-b border-white/10 md:hidden"
            style={{ backgroundColor: "#2C2F32F2" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-row justify-around py-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center text-sm font-medium text-white/80 hover:text-white transition-colors py-2 border-r border-white/10 last:border-r-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
