import { useReducedMotion } from 'framer-motion'
import { BackgroundOrbs } from '@/components/effects/BackgroundOrbs'
import { Footer } from '@/components/layout/Footer'
import { Nav } from '@/components/layout/Nav'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { Hero } from '@/components/sections/Hero'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import '@/styles/app.css'

export default function App() {
  const reduceMotion = !!useReducedMotion()

  return (
    <div className="app">
      <div className="app__noise" aria-hidden />
      <BackgroundOrbs reduceMotion={reduceMotion} />
      <ScrollProgress />
      <Nav />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero reduceMotion={reduceMotion} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
