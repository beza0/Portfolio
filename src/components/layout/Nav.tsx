import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { site } from '@/config/site'
import { sectionIds } from '@/i18n/translations'
import { useLanguage } from '@/i18n/useLanguage'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { locale, setLocale, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const body = document.body
    const html = document.documentElement
    const prevBodyOverflow = body.style.overflow
    const prevBodyTouchAction = body.style.touchAction
    const prevHtmlOverflow = html.style.overflow
    const prevHtmlTouchAction = html.style.touchAction

    body.style.overflow = 'hidden'
    body.style.touchAction = 'none'
    html.style.overflow = 'hidden'
    html.style.touchAction = 'none'

    return () => {
      body.style.overflow = prevBodyOverflow
      body.style.touchAction = prevBodyTouchAction
      html.style.overflow = prevHtmlOverflow
      html.style.touchAction = prevHtmlTouchAction
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const navItems = [
    { id: sectionIds.about, label: t.navAbout },
    { id: sectionIds.experience, label: t.navExperience },
    { id: sectionIds.projects, label: t.navProjects },
    { id: sectionIds.skills, label: t.navSkills },
    { id: sectionIds.contact, label: t.navContact },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <motion.nav
      className={`nav ${scrolled ? 'nav--scrolled' : ''} ${menuOpen ? 'nav--menu-open' : ''}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__inner">
        <a className="nav__brand" href="#" onClick={closeMenu}>
          {site.brandName}
        </a>

        <div className="nav__links nav__links--desktop">
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

        <button
          type="button"
          className={`nav__menu-btn ${menuOpen ? 'nav__menu-btn--open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="nav-mobile-panel"
          aria-label={menuOpen ? t.navCloseMenu : t.navOpenMenu}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="nav__burger" aria-hidden>
            <span className="nav__burger-line" />
            <span className="nav__burger-line" />
            <span className="nav__burger-line" />
          </span>
        </button>
      </div>

      <div
        id="nav-mobile-panel"
        className={`nav__mobile-drawer ${menuOpen ? 'nav__mobile-drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
      >
        <div className="nav__mobile-backdrop" onClick={closeMenu} aria-hidden />
        <div className="nav__mobile-sheet">
          <ul className="nav__mobile-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className="nav__mobile-link"
                  href={`#${item.id}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}
