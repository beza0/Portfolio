import { useEffect, useState } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  type Variants,
} from 'framer-motion'
import './App.css'

const navItems = [
  { id: 'hakkinda', label: 'Hakkımda' },
  { id: 'deneyim', label: 'Deneyim' },
  { id: 'projeler', label: 'Projeler' },
  { id: 'yetenekler', label: 'Yetenekler' },
  { id: 'iletisim', label: 'İletişim' },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * (typeof i === 'number' ? i : 0),
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__inner">
        <a className="nav__brand" href="#">
          Beyza Acar
        </a>
        <div className="nav__links">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

function BackgroundOrbs({ reduceMotion }: { reduceMotion: boolean }) {
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

function Hero({ reduceMotion }: { reduceMotion: boolean }) {
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
            UI/UX Tasarımcı · FE Developer
          </motion.div>
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero__title-greet">Merhaba,</span>
            <span className="hero__title-ben">ben</span>
            <span className="hero__name-stack" aria-label="Beyza Acar">
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
            Kendimi <strong className="hero__lead-strong">UI/UX tasarımcı</strong> ve{' '}
            <strong className="hero__lead-strong">frontend geliştirici</strong> olarak
            tanıtıyorum. Figma ile kullanıcı odaklı arayüz ve prototipler üretiyor; React ve
            TypeScript ile tasarımları ürüne dönüştürüyorum.
          </motion.p>
          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
          >
            <a className="btn btn--primary" href="#iletisim">
              İletişime geç
            </a>
            <a
              className="btn btn--ghost"
              href="https://github.com/beza0"
              target="_blank"
              rel="noreferrer"
            >
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
            Figma · Design system
          </motion.div>
          <motion.div className="hero__float hero__float--2" animate={floatTransition}>
            React · TypeScript
          </motion.div>
        </motion.div>
      </div>
    </header>
  )
}

function SectionAbout() {
  return (
    <section className="section" id="hakkinda">
      <div className="section__inner">
        <motion.p className="section__label" variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          Özet
        </motion.p>
        <motion.h2 className="section__title" variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          Tasarım ve kod arasında köprü kuruyorum
        </motion.h2>
        <motion.div className="card" variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          <p className="about__text">
            TÜBİTAK BİLGEM bünyesinde UI/UX tasarımcı olarak görev alıyorum. Figma ile
            kullanıcı odaklı arayüz tasarımları ve prototipler oluştururken, frontend
            geliştirme süreçlerine de katkı sağlayarak teknik yetkinliğimi artırıyorum.
            Uzun vadede full stack developer olarak kapsamlı projeler geliştirmeyi
            hedefliyorum; yeni teknolojiler öğrenmeye ve çok yönlü yetkinlik kazanmaya
            açığım.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

const experience = [
  {
    period: '2025 – Günümüz',
    org: 'TÜBİTAK',
    role: 'Yazılım Geliştirme Bursiyeri',
    location: 'Kocaeli',
    detail:
      'Projelerde UI/UX tasarım süreçlerini yönetiyorum. Figma ile uçtan uca arayüz tasarımı, prototipleme ve kullanıcı akışı oluşturuyorum. Responsive ve kullanıcı odaklı tasarımlar geliştiriyorum; tasarımların yazılıma aktarılmasında frontend ekibiyle yakın çalışıyorum.',
  },
  {
    period: '07/2025 – 08/2025',
    org: 'TÜBİTAK',
    role: 'Yazılım Geliştirme Stajyeri',
    location: 'Kocaeli',
    detail:
      'UI/UX tasarım süreçlerini deneyimledim: Figma ile wireframe ve arayüz tasarımları. Mobil tarafta Flutter, web tarafında React ile geliştirme süreçlerine destek verdim.',
  },
]

const personalProjects = [
  {
    tag: 'Full stack · Web',
    name: 'TimeLink',
    body:
      'Zaman bankası tabanlı beceri takası platformu: kullanıcılar zaman kredisi ile öğretip öğreniyor. Vite + React + TypeScript arayüz; Spring Boot REST API, JWT, PostgreSQL; Docker Compose ile dağıtım.',
  },
  {
    tag: 'Kurumsal web',
    name: 'DİSA Topluluğu Web Sitesi',
    body:
      'Kurumsal kimliğe uygun, Türkçe/İngilizce ve responsive site. Sayfa yapıları ve arayüz bileşenleri; domain ve hosting ile uçtan uca yayına alma.',
  },
]

function SectionExperience() {
  return (
    <section className="section" id="deneyim">
      <div className="section__inner">
        <motion.p className="section__label" variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          Deneyim
        </motion.p>
        <motion.h2 className="section__title" variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          Profesyonel yolculuk
        </motion.h2>
        <div className="timeline">
          {experience.map((job, i) => (
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

function SectionProjects() {
  return (
    <section className="section" id="projeler">
      <div className="section__inner">
        <motion.p className="section__label" variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          Projeler
        </motion.p>
        <motion.h2 className="section__title" variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          Seçilmiş işler
        </motion.h2>
        <div className="project-grid">
          {personalProjects.map((p, i) => (
            <motion.article
              key={p.name}
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
              {p.name === 'TimeLink' && (
                <a
                  className="btn btn--ghost"
                  href="https://github.com/beza0"
                  target="_blank"
                  rel="noreferrer"
                  style={{ alignSelf: 'flex-start', marginTop: '0.5rem', padding: '0.55rem 1rem', fontSize: '0.85rem' }}
                >
                  GitHub profili
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionSkillsEducation() {
  const skills = ['Figma', 'React (JS/TS)', 'Flutter', 'HTML/CSS']
  const langs = ['İngilizce — B2', 'Türkçe — Ana dil']

  return (
    <section className="section" id="yetenekler">
      <div className="section__inner">
        <motion.p className="section__label" variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          Yetenek & eğitim
        </motion.p>
        <motion.h2 className="section__title" variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
          Araçlar ve akademik geçmiş
        </motion.h2>
        <div className="subgrid">
          <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}>
            <h3 className="mini-title">Teknik yetkinlik</h3>
            <div className="chips">
              {skills.map((s, i) => (
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
              Diller
            </h3>
            <div className="chips">
              {langs.map((l) => (
                <span key={l} className="chip">
                  {l}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}>
            <h3 className="mini-title">Eğitim</h3>
            <ul className="edu-list">
              <li>
                <strong>İstanbul Medeniyet Üniversitesi</strong>
                <span>2022 – 2026 · İstanbul · GNO: 3.4</span>
              </li>
              <li>
                <strong>Sınav Koleji Fen Lisesi</strong>
                <span>2018 – 2022 · Kocaeli · YKS: 26.243 · ALES: 85</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SectionContact() {
  return (
    <section className="section contact" id="iletisim">
      <div className="section__inner">
        <motion.p className="section__label" variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          İletişim
        </motion.p>
        <motion.h2 className="section__title" variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Birlikte çalışalım
        </motion.h2>
        <motion.div
          className="contact__box"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="about__text" style={{ marginInline: 'auto', textAlign: 'center' }}>
            Projeler, iş birlikleri veya tasarım danışmanlığı için mesaj atabilirsiniz.
          </p>
          <div className="contact__links">
            <a href="mailto:beyzacar5441@gmail.com">beyzacar5441@gmail.com</a>
            <a
              href="https://linkedin.com/in/beyzaacar02082004"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://github.com/beza0" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <p style={{ marginTop: '1.25rem', fontSize: '0.88rem', color: 'var(--muted)' }}>
            Maltepe / İstanbul
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Beyza Acar · UI/UX Designer
    </footer>
  )
}

export default function App() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <div className="app">
      <div className="app__noise" aria-hidden />
      <BackgroundOrbs reduceMotion={!!reduceMotion} />
      {!reduceMotion && (
        <motion.div
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
      )}
      <Nav />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero reduceMotion={!!reduceMotion} />
        <SectionAbout />
        <SectionExperience />
        <SectionProjects />
        <SectionSkillsEducation />
        <SectionContact />
      </main>
      <Footer />
    </div>
  )
}
