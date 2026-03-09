import { motion } from 'framer-motion'

/**
 * SectionHeader — Reusable animated section heading with label, title, and optional subtitle.
 *
 * @param {string} label   — Small uppercase label above the title (e.g. "About Me")
 * @param {string} title   — Main heading text; wrap a word in <span className="gradient-text"> for highlight
 * @param {string} subtitle — Optional descriptive paragraph below the title
 * @param {string} align   — 'center' | 'left' (default: 'center')
 */
export default function SectionHeader({ label, title, subtitle, align = 'center' }) {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-14 ${isCenter ? 'text-center' : 'text-left'}`}
    >
      {/* Label pill */}
      {label && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse-slow" />
          {label}
        </span>
      )}

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
        {title}
      </h2>

      {/* Divider bar */}
      <div className={`flex ${isCenter ? 'justify-center' : ''} mb-5`}>
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
