export const EASING = [0.21, 0.47, 0.32, 0.98] as const

export const TRANSITIONS = {
  default: { duration: 0.6, ease: EASING },
  fast: { duration: 0.3, ease: EASING },
  slow: { duration: 0.8, ease: EASING },
  button: { duration: 0.2 },
} as const
