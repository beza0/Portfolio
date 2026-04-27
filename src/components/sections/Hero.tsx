import { motion } from 'framer-motion'
import { site } from '@/config/site'
import { sectionIds } from '@/i18n/translations'
import { useLanguage } from '@/i18n/useLanguage'

type Props = {
  reduceMotion: boolean
}

export function Hero({ reduceMotion }: Props) {
  const { t } = useLanguage()
  const floatTransition = reduceMotion
    ? undefined
    : { y: [0, -10, 0], transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' as const } }

  return (
    <header className="hero">
      <div className="hero__grid">
        <div>
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
          >
            <span className="hero__badge-dot" />
            {t.heroBadge}
          </motion.div>
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero__title-greet">{t.heroGreet}</span>
            <span className="hero__title-ben">{t.heroIm}</span>
            <span className="hero__name-stack" aria-label={site.brandName}>
              <span className="hero__gradient hero__name-line">Beyza</span>
              <span className="hero__gradient hero__name-line">Acar</span>
            </span>
          </motion.h1>
          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            {t.heroLead}
          </motion.p>
          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            <a className="btn btn--primary" href={`#${sectionIds.contact}`}>
              {t.heroCtaContact}
            </a>
            <a className="btn btn--ghost" href={site.urls.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {!reduceMotion && (
            <>
              <div className="hero__ring" />
              <div className="hero__ring hero__ring--2" />
            </>
          )}
          <motion.div
            className="hero__blob"
            animate={
              reduceMotion
                ? undefined
                : {
                    borderRadius: [
                      '46% 54% 42% 58% / 58% 42% 58% 42%',
                      '54% 46% 58% 42% / 42% 58% 42% 58%',
                      '46% 54% 42% 58% / 58% 42% 58% 42%',
                    ],
                  }
            }
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="hero__initials">BA</span>
          <motion.div className="hero__float hero__float--1" animate={floatTransition}>
            {t.heroFloat1}
          </motion.div>
          <motion.div className="hero__float hero__float--2" animate={floatTransition}>
            {t.heroFloat2}
          </motion.div>
        </motion.div>
      </div>
    </header>
  )
}
