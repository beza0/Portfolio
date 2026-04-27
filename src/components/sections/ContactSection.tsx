import { motion } from 'framer-motion'
import { site } from '@/config/site'
import { fadeUp } from '@/lib/motion-variants'
import { sectionIds } from '@/i18n/translations'
import { useLanguage } from '@/i18n/useLanguage'

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section className="section contact" id={sectionIds.contact}>
      <div className="section__inner">
        <motion.p
          className="section__label"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t.contactLabel}
        </motion.p>
        <motion.h2
          className="section__title"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t.contactTitle}
        </motion.h2>
        <motion.div
          className="contact__box"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="about__text" style={{ marginInline: 'auto', textAlign: 'center' }}>
            {t.contactBlurb}
          </p>
          <div className="contact__links">
            <a href={site.urls.email}>{site.emailDisplay}</a>
            <a href={site.urls.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={site.urls.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <p style={{ marginTop: '1.25rem', fontSize: '0.88rem', color: 'var(--muted)' }}>
            {t.contactLocation}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
