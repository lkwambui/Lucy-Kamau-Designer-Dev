import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FiArrowRight, FiDownload, FiMail,
  FiGithub, FiLinkedin, FiExternalLink,
} from 'react-icons/fi'

/** Animated text cycling through roles */
const ROLES = [
  'Full Stack Developer',
  'Frontend Engineer',
  'UI/UX Designer',
  'React Specialist',
]

/** Stagger container variants for hero content */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

/**
 * Hero — Full-screen landing section with name, animated role,
 *        CTA buttons, social links, and decorative background.
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden
                        bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">

      {/* ── Background decoration ── */}
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />

      {/* Radial glow blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full
                      bg-primary-600/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full
                      bg-accent-500/20 blur-3xl pointer-events-none" />

      {/* Floating code decorations */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 right-[8%] hidden lg:block
                   font-mono text-xs text-primary-400/50 select-none"
      >
        {`const developer = {\n  name: 'Lucy Kamau',\n  role: 'Full Stack',\n}`}
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-32 left-[6%] hidden xl:block
                   font-mono text-xs text-accent-400/40 select-none"
      >
        {`npm run build-dreams`}
      </motion.div>

      {/* ── Main content ── */}
      <div className="section-container relative z-10 py-32">
        <div className="max-w-3xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting badge */}
            <motion.div variants={itemVariants} className="mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                               bg-primary-500/15 border border-primary-500/30
                               text-primary-300 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for new projects
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-3">
              Hi, I'm{' '}
              <span className="gradient-text">Lucy Kamau</span>
            </motion.h1>

            {/* Role — animated cycling */}
            <motion.div variants={itemVariants} className="mb-6">
              <RoleAnimator roles={ROLES} />
            </motion.div>

            {/* Company badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <a
                href="https://logicorex.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-primary-300
                           transition-colors text-sm font-medium group"
              >
                <span className="w-5 h-5 rounded bg-primary-500/20 flex items-center justify-center text-primary-400 text-xs font-bold">
                  L
                </span>
                Founder @ LogicoreX
                <FiExternalLink size={13} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>

            {/* Tagline */}
            <motion.p variants={itemVariants}
              className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-xl mb-10">
              Building modern web applications and{' '}
              <span className="text-slate-300">user-focused digital experiences</span>{' '}
              — from pixel-perfect frontends to scalable full stack systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants}
              className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary group"
              >
                View Projects
                <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="btn-outline !border-slate-500 !text-slate-300 hover:!bg-slate-700 hover:!text-white"
              >
                <FiMail size={16} />
                Contact Me
              </button>

              <a
                href="/resume.pdf"
                download
                className="btn-ghost !text-slate-400 hover:!text-white hover:!bg-slate-800"
              >
                <FiDownload size={16} />
                Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="h-px flex-1 max-w-[48px] bg-slate-700" />
              <p className="text-xs text-slate-500 uppercase tracking-widest">Find me on</p>

              {[
                { href: 'https://github.com/lkwambui',                         Icon: FiGithub,   label: 'GitHub'   },
                { href: 'https://www.linkedin.com/in/lucy-kamau-87bb75209', Icon: FiLinkedin, label: 'LinkedIn' },
                { href: 'mailto:info@logicorex.co.ke',                       Icon: FiMail,     label: 'Email'    },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-xl
                             bg-slate-800 border border-slate-700
                             text-slate-400 hover:text-primary-400
                             hover:border-primary-500/60 hover:bg-primary-500/10
                             transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-slate-600 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-primary-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ─── Role Animator (internal) ─────────────────────────────────────── */
function RoleAnimator({ roles }) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length)
        setVisible(true)
      }, 400)
    }, 2800)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <div className="h-10 sm:h-12 overflow-hidden">
      <motion.p
        key={roles[index]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -12 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="text-xl sm:text-2xl font-bold text-primary-300 font-mono"
      >
        &lt; {roles[index]} /&gt;
      </motion.p>
    </div>
  )
}
