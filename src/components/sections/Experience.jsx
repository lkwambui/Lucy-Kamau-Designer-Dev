import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { HiCheckCircle } from 'react-icons/hi'
import SectionHeader from '../ui/SectionHeader'
import { experiences } from '../../data/experience'

/**
 * Experience — Vertical timeline of work history.
 */
export default function Experience() {
  return (
    <div className="section-padding bg-slate-50 dark:bg-dark-850">
      <div className="section-container">
        <SectionHeader
          label="Experience"
          title={<>Work <span className="gradient-text">History</span></>}
          subtitle="My professional journey — building products, leading projects, and growing as a developer."
        />

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-7 top-0 bottom-0 w-0.5
                          bg-gradient-to-b from-primary-500 via-accent-500 to-slate-200 dark:to-slate-700
                          rounded-full hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ExperienceItem key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── ExperienceItem ─────────────────────────────────────── */
function ExperienceItem({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="relative flex gap-5 sm:gap-8"
    >
      {/* Timeline dot */}
      <div className="relative flex-shrink-0 hidden sm:flex flex-col items-center">
        <div className={`w-3.5 h-3.5 rounded-full border-2 z-10
          ${exp.current
            ? 'bg-primary-500 border-primary-400 shadow-glow'
            : 'bg-slate-300 dark:bg-slate-600 border-slate-200 dark:border-slate-700'
          }`}
        />
      </div>

      {/* Card */}
      <div className="card flex-1 p-6 mb-2">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                {exp.role}
              </h3>
              {exp.current && (
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold
                                 bg-green-50 dark:bg-green-900/30
                                 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
                  Current
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 mt-1">
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 font-semibold hover:underline
                             flex items-center gap-1 text-sm"
                >
                  {exp.company} <FiExternalLink size={12} />
                </a>
              ) : (
                <span className="text-slate-600 dark:text-slate-400 font-medium text-sm">
                  {exp.company}
                </span>
              )}
              <span className="text-slate-400 text-sm">·</span>
              <span className="text-slate-500 dark:text-slate-500 text-sm">{exp.type}</span>
            </div>
          </div>

          <span className="text-xs font-mono text-slate-500 dark:text-slate-500
                           bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
            {exp.period}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
          {exp.description}
        </p>

        {/* Responsibilities */}
        <ul className="space-y-1.5 mb-4">
          {exp.responsibilities.map((r) => (
            <li key={r} className="flex gap-2 items-start text-sm text-slate-600 dark:text-slate-400">
              <HiCheckCircle className="flex-shrink-0 text-primary-500 mt-0.5" size={15} />
              {r}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {exp.tech.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
