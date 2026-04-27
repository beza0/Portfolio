import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion-variants'
import { sectionIds } from '@/i18n/translations'
import { useLanguage } from '@/i18n/useLanguage'

export function AboutSection() {
  const { t } = useLanguage()
  const viewport = { once: true, margin: '-60px' as const }

  return (
    <section className="section" id={sectionIds.about}>
      <div className="section__inner">
        <motion.p
          className="section__label"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {t.aboutLabel}
        </motion.p>
        <motion.h2
          className="section__title"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {t.aboutTitle}
        </motion.h2>
        <motion.div
          className="card"
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="about__text">{t.aboutBody}</p>
        </motion.div>
      </div>
    </section>
  )
}
