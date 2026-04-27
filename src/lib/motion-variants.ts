import type { Variants } from 'framer-motion'

/** Shared reveal animation for section headings and cards */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * (typeof i === 'number' ? i : 0),
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
}
