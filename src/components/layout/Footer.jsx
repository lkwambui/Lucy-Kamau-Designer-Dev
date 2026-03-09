import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiExternalLink, FiHeart } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services',   href: '#services' },
  { label: 'Contact',    href: '#contact' },
]

const SOCIALS = [
  { Icon: FiGithub,       href: 'https://github.com/lkwambui',                         label: 'GitHub' },
  { Icon: FiLinkedin,     href: 'https://www.linkedin.com/in/lucy-kamau-87bb75209',  label: 'LinkedIn' },
  { Icon: FiMail,         href: 'mailto:info@logicorex.co.ke',                        label: 'Email' },
  { Icon: FiExternalLink, href: 'https://www.logicorex.co.ke',                        label: 'LogicoreX' },
]

const scrollTo = (href) => {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
}

/**
 * Footer — Site footer with logo, nav links, social icons, and copyright.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 dark:bg-dark-950 text-slate-400">
      <div className="section-container">
        {/* Top section */}
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl
                               bg-gradient-to-br from-primary-500 to-accent-500
                               text-white font-extrabold text-sm">
                LK
              </span>
              <span className="font-bold text-white text-base">
                Lucy<span className="text-primary-400">.</span>dev
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Founder & Full Stack Developer at{' '}
              <a
                href="https://www.logicorex.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                LogicoreX
              </a>
              . Building modern web applications across the MERN / PERN stack.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-1.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Connect
            </h4>
            <div className="space-y-2 text-sm mb-5">
              <p>
                <a href="mailto:info@logicorex.co.ke"
                   className="hover:text-primary-400 transition-colors">
                  info@logicorex.co.ke
                </a>
              </p>
              <p>
                <a href="tel:+254799656264" className="hover:text-primary-400 transition-colors">
                  +254 799 656 264
                </a>
              </p>
              <p>
                <a href="https://www.logicorex.co.ke" target="_blank" rel="noopener noreferrer"
                   className="hover:text-primary-400 transition-colors">
                  www.logicorex.co.ke
                </a>
              </p>
            </div>
            <div className="flex gap-3">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center
                             text-slate-400 hover:text-primary-400 hover:bg-slate-700
                             transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6 flex flex-wrap items-center
                        justify-between gap-3 text-xs text-slate-500">
          <p>
            © {year}{' '}
            <a href="https://www.logicorex.co.ke" target="_blank" rel="noopener noreferrer"
               className="text-slate-400 hover:text-primary-400 transition-colors">
              Lucy Kamau
            </a>{' '}
            · All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <FiHeart size={12} className="text-red-400" /> using React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
