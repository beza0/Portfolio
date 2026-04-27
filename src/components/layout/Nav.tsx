import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { site } from '@/config/site'
import { sectionIds } from '@/i18n/translations'
import { useLanguage } from '@/i18n/useLanguage'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const { locale, setLocale, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { id: sectionIds.about, label: t.navAbout },
    { id: sectionIds.experience, label: t.navExperience },
    { id: sectionIds.projects, label: t.navProjects },
    { id: sectionIds.skills, label: t.navSkills },
    { id: sectionIds.contact, label: t.navContact },
  ]

  return (
    <motion.nav
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__inner">
        <a className="nav__brand" href="#">
          {site.brandName}
        </a>
        <div className="nav__links">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav__lang" role="group" aria-label={t.langAria}>
          <button
            type="button"
            className={`nav__lang-btn ${locale === 'tr' ? 'nav__lang-btn--active' : ''}`}
            onClick={() => setLocale('tr')}
            aria-pressed={locale === 'tr'}
          >
            {t.langSwitchTr}
          </button>
          <button
            type="button"
            className={`nav__lang-btn ${locale === 'en' ? 'nav__lang-btn--active' : ''}`}
            onClick={() => setLocale('en')}
            aria-pressed={locale === 'en'}
          >
            {t.langSwitchEn}
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
