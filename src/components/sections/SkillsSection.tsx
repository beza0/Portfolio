import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion-variants'
import { sectionIds } from '@/i18n/translations'
import { useLanguage } from '@/i18n/useLanguage'

const SKILL_CHIPS = ['Figma', 'React (JS/TS)', 'Flutter', 'HTML/CSS', '...'] as const

export function SkillsSection() {
  const { t } = useLanguage()
  const langs = [t.skillsLangEn]

  return (
    <section className="section" id={sectionIds.skills}>
      <div className="section__inner">
        <motion.p
          className="section__label"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {t.skillsLabel}
        </motion.p>
        <motion.h2
          className="section__title"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {t.skillsTitle}
        </motion.h2>
        <div className="subgrid">
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <h3 className="mini-title">{t.skillsTechTitle}</h3>
            <div className="chips">
              {SKILL_CHIPS.map((s, i) => (
                <motion.span
                  key={s}
                  className="chip"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.04 * i }}
                  whileHover={{ scale: 1.05 }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
            <h3 className="mini-title" style={{ marginTop: '1.75rem' }}>
              {t.skillsLangTitle}
            </h3>
            <div className="chips">
              {langs.map((l) => (
                <span key={l} className="chip">
                  {l}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            <h3 className="mini-title">{t.skillsEduTitle}</h3>
            <ul className="edu-list">
              <li>
                <strong>{t.eduUni}</strong>
                <span>{t.eduUniSpan}</span>
              </li>
              <li>
                <strong>{t.eduHigh}</strong>
                <span>{t.eduHighSpan}</span>
              </li>
              <li>
                {' '}
                <strong>{t.eduYks}</strong> 26.243
              </li>
              <li>
                {' '}
                <strong>{t.eduAles}</strong> 85
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
