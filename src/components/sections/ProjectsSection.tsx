import { motion } from 'framer-motion'
import { site } from '@/config/site'
import { fadeUp } from '@/lib/motion-variants'
import { sectionIds } from '@/i18n/translations'
import { useLanguage } from '@/i18n/useLanguage'

export function ProjectsSection() {
  const { t } = useLanguage()
  const personalProjects = [
    {
      key: 'timelink',
      tag: t.projTimeLinkTag,
      name: t.projTimeLinkName,
      body: t.projTimeLinkBody,
      showGithub: true,
    },
    {
      key: 'disa',
      tag: t.projDisaTag,
      name: t.projDisaName,
      body: t.projDisaBody,
      showGithub: false,
    },
  ] as const

  return (
    <section className="section" id={sectionIds.projects}>
      <div className="section__inner">
        <motion.p
          className="section__label"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {t.projLabel}
        </motion.p>
        <motion.h2
          className="section__title"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {t.projTitle}
        </motion.h2>
        <div className="project-grid">
          {personalProjects.map((p, i) => (
            <motion.article
              key={p.key}
              className="card project-card"
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 420, damping: 22 } }}
            >
              <span className="project-card__tag">{p.tag}</span>
              <h3 className="project-card__name">{p.name}</h3>
              <p className="project-card__body">{p.body}</p>
              {p.showGithub && (
                <a
                  className="btn btn--ghost"
                  href={site.urls.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '0.5rem',
                    padding: '0.55rem 1rem',
                    fontSize: '0.85rem',
                  }}
                >
                  {t.projGithubCta}
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
