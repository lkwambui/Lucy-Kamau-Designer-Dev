import { motion } from 'framer-motion'
import {
  HiOutlineDeviceMobile, HiOutlineCode, HiOutlinePencilAlt,
  HiOutlineTemplate, HiOutlineChip,
} from 'react-icons/hi'
import { FiCheck } from 'react-icons/fi'
import SectionHeader from '../ui/SectionHeader'
import { services } from '../../data/services'

/** Map icon name strings to components */
const ICON_MAP = {
  HiOutlineDeviceMobile,
  HiOutlineCode,
  HiOutlinePencilAlt,
  HiOutlineTemplate,
  HiOutlineChip,
}

/**
 * Services — Cards for each service offered.
 */
export default function Services() {
  return (
    <div className="section-padding bg-white dark:bg-dark-900">
      <div className="section-container">
        <SectionHeader
          label="Services"
          title={<>What I <span className="gradient-text">Offer</span></>}
          subtitle="From design to deployment — full-service development tailored to your business goals."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-14 card p-8 text-center bg-gradient-to-br from-primary-600 to-accent-600 border-none"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Ready to build something great?
          </h3>
          <p className="text-primary-100 mb-6 max-w-lg mx-auto">
            Let's discuss your project and how I can help bring your vision to life.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById('contact')
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold
                       bg-white text-primary-700 hover:bg-primary-50
                       shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </div>
  )
}

/* ─── ServiceCard ────────────────────────────────────────── */
function ServiceCard({ service, index }) {
  const IconComponent = ICON_MAP[service.icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="card p-6 flex flex-col group"
    >
      {/* Icon */}
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient}
                        flex items-center justify-center text-white mb-5 flex-shrink-0
                        group-hover:shadow-card-hover transition-shadow duration-300`}>
        {IconComponent && <IconComponent size={22} />}
      </div>

      {/* Title */}
      <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 flex-1">
        {service.description}
      </p>

      {/* Highlights list */}
      <ul className="space-y-1.5 border-t border-slate-100 dark:border-slate-700 pt-4">
        {service.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <FiCheck size={13} className="text-primary-500 flex-shrink-0" />
            {h}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
