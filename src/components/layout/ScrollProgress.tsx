import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

/**
 * Thin reading-progress bar synced to vertical scroll (respects reduced motion).
 */
export function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  })

  if (prefersReducedMotion) return null

  return (
    <motion.div
      aria-hidden
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
        transformOrigin: '0 0',
        zIndex: 60,
      }}
    />
  )
}
