"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type ButtonProps = {
  children: React.ReactNode
  variant?: "primary" | "outline" | "dark" | "outline-dark"
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
  className?: string
}

export function Button({
  children,
  variant = "primary",
  href,
  target,
  rel,
  onClick,
  className,
}: ButtonProps) {
  const base = "inline-flex items-center justify-center px-8 py-3 font-semibold rounded-sm transition-colors cursor-pointer"

  const variants = {
    primary: "bg-brand text-white hover:bg-brand/90",
    outline: "border border-white text-white hover:bg-white/10",
    dark: "bg-navy text-white hover:bg-navy/85",
    "outline-dark": "border border-navy text-navy hover:bg-navy/10",
  }

  const classes = cn(base, variants[variant], className)

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  )
}
