import { motion } from 'framer-motion'
import { FiMail } from 'react-icons/fi'
import { IoLogoWhatsapp } from 'react-icons/io'

const WHATSAPP_NUM = '254799656264'
const EMAIL = 'info@logicorex.co.ke'

/**
 * Build a pre-filled WhatsApp wa.me link for a demo request.
 */
function whatsappLink(projectTitle) {
  const msg = `Hi Lucy! 👋 I came across your portfolio and I'm interested in a demo for *${projectTitle}*. Could we set up a time to discuss?`
  return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`
}

/**
 * Build a pre-filled mailto link for a demo request.
 */
function emailLink(projectTitle) {
  const subject = `Demo Request: ${projectTitle}`
  const body = `Hi Lucy,\n\nI came across your portfolio and would love to see a demo of "${projectTitle}".\n\nPlease get in touch at your earliest convenience.\n\nThank you!`
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

/**
 * ProjectCard — Displays a single portfolio project.
 *
 * Props:
 *   project  — project object from projects.js
 *   index    — card index for staggered animation delay
 */
export default function ProjectCard({ project, index = 0 }) {
  const { title, tagline, description, gradient, tech } = project

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="card group flex flex-col overflow-hidden"
    >
      {/* ── Thumbnail / Gradient placeholder ── */}
      <div className={`relative h-44 bg-gradient-to-br ${gradient} overflow-hidden flex-shrink-0`}>
        {/* Decorative circles */}
        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10" />
        <div className="absolute -bottom-8 -left-4 w-24 h-24 rounded-full bg-white/10" />

        {/* Project title overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <h3 className="text-white text-xl font-bold text-center drop-shadow-lg">
            {title}
          </h3>
        </div>

        {/* Hover overlay — WhatsApp & Email demo request */}
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3 px-5
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-xs font-semibold uppercase tracking-widest mb-1">
            Request a Demo
          </p>
          <a
            href={whatsappLink(title)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Request demo for ${title} via WhatsApp`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 px-5 py-2 rounded-xl w-full justify-center
                       bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold
                       transition-colors shadow-lg"
          >
            <IoLogoWhatsapp size={17} /> WhatsApp
          </a>
          <a
            href={emailLink(title)}
            aria-label={`Request demo for ${title} via Email`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 px-5 py-2 rounded-xl w-full justify-center
                       bg-white hover:bg-slate-100 text-slate-900 text-sm font-semibold
                       transition-colors shadow-lg"
          >
            <FiMail size={15} /> Email Me
          </a>
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Tagline */}
        <p className="text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-2">
          {tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-4">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>

        {/* Footer — inline demo request links */}
        <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-700">
          <a
            href={whatsappLink(title)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Request demo for ${title} via WhatsApp`}
            className="flex items-center gap-1.5 text-xs font-semibold
                       text-[#25D366] hover:text-[#1ebe5d] transition-colors"
          >
            <IoLogoWhatsapp size={14} /> WhatsApp Demo
          </a>
          <span className="text-slate-300 dark:text-slate-600">·</span>
          <a
            href={emailLink(title)}
            aria-label={`Request demo for ${title} via Email`}
            className="flex items-center gap-1.5 text-xs font-semibold
                       text-slate-500 dark:text-slate-400
                       hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <FiMail size={13} /> Email
          </a>
          <span className="ml-auto text-xs text-slate-400 dark:text-slate-500 italic">
            {tech[0]}
          </span>
        </div>
      </div>
    </motion.article>
  )
}
