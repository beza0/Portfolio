import { motion } from 'framer-motion'

type Props = {
  reduceMotion: boolean
}

export function BackgroundOrbs({ reduceMotion }: Props) {
  if (reduceMotion) return null
  return (
    <div className="orbs" aria-hidden>
      <motion.div
        className="orb orb--1"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb--2"
        animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb--3"
        animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
