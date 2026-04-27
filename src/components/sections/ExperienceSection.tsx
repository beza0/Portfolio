import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion-variants'
import { sectionIds } from '@/i18n/translations'
import { useLanguage } from '@/i18n/useLanguage'

export function ExperienceSection() {
  const { t } = useLanguage()
  const jobs = [
    {
      period: t.exp1Period,
      org: t.orgTubitak,
      role: t.exp1Role,
      location: t.locationKocaeli,
      detail: t.exp1Detail,
    },
    {
      period: t.exp2Period,
      org: t.orgTubitak,
      role: t.exp2Role,
      location: t.locationKocaeli,
      detail: t.exp2Detail,
    },
  ]

  return (
    <section className="section" id={sectionIds.experience}>
      <div className="section__inner">
        <motion.p
          className="section__label"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {t.expLabel}
        </motion.p>
        <motion.h2
          className="section__title"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {t.expTitle}
        </motion.h2>
        <div className="timeline">
          {jobs.map((job, i) => (
            <motion.article
              key={job.role}
              className="timeline__item card"
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            >
              <div className="timeline__meta">
                {job.period} · {job.location}
              </div>
              <div className="timeline__role">{job.role}</div>
              <div className="timeline__org">{job.org}</div>
              <p className="timeline__desc">{job.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
