import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import TechStack from './components/sections/TechStack'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import FloatingWhatsApp from './components/ui/FloatingWhatsApp'

/**
 * App — Root layout component.
 * Single-page portfolio with smooth-scroll sections.
 */
export default function App() {
  // Scroll-to-top on initial mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-900 transition-colors duration-300">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <TechStack />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* Floating WhatsApp chat button */}
      <FloatingWhatsApp />
    </div>
  )
}
