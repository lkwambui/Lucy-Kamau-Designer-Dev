import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { HiOutlineCode, HiOutlineLightBulb, HiOutlineGlobeAlt } from 'react-icons/hi'
import SectionHeader from '../ui/SectionHeader'
import { stats } from '../../data/experience'

const highlights = [
  {
    Icon: HiOutlineLightBulb,
    title: 'Founder Mindset',
    text: 'As the founder of LogicoreX, I approach every project with business impact in mind — not just clean code.',
  },
  {
    Icon: HiOutlineCode,
    title: 'Full Stack Depth',
    text: 'From database schema design to pixel-perfect UI — I own the entire stack with the MERN and PERN ecosystems.',
  },
  {
    Icon: HiOutlineGlobeAlt,
    title: 'User-Centred',
    text: 'I design before I code. Figma prototypes and UX thinking are central to how I build every product.',
  },
]

/**
 * About — Personal story, company context, key highlight cards, and stats.
 */
export default function About() {
  return (
    <div className="section-padding bg-white dark:bg-dark-900">
      <div className="section-container">
        <SectionHeader
          label="About Me"
          title={<>Who I Am & <span className="gradient-text">What I Build</span></>}
          subtitle="A developer who thinks like a founder, designs like a product designer, and codes like an engineer."
        />

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* ── Left: Story text ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <div className="space-y-5 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              <p>
                My journey into tech began with a simple curiosity: <em className="text-slate-800 dark:text-slate-200 not-italic font-medium">"How do websites actually work?"</em>{' '}
                That curiosity became an obsession, and that obsession became a career.
              </p>
              <p>
                I founded{' '}
                <a
                  href="https://logicorex.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
                >
                  LogicoreX
                </a>{' '}
                to bridge the gap between great ideas and great software. We build full stack web
                applications that are not just functional, but delightful — fast, accessible, and
                built to scale.
              </p>
              <p>
                My specialisation sits at the intersection of{' '}
                <span className="text-primary-500 font-medium">frontend engineering</span>,{' '}
                <span className="text-accent-500 font-medium">UI/UX design</span>, and{' '}
                <span className="text-emerald-500 font-medium">full stack architecture</span>.
                I work across the MERN and PERN stacks, integrate complex APIs like M-Pesa Daraja,
                and consistently deliver polished, production-ready products.
              </p>
              <p>
                When I'm not building, I'm designing — Figma is my second home. I believe that
                software that looks great performs better, gets adopted faster, and creates real
                business value.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://logicorex.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Visit LogicoreX <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => {
                  const el = document.getElementById('projects')
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
                }}
                className="btn-outline"
              >
                See My Work
              </button>
            </div>
          </motion.div>

          {/* ── Right: Highlight cards + stats ── */}
          <div className="space-y-8">
            {/* Highlight cards */}
            <div className="space-y-4">
              {highlights.map(({ Icon, title, text }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                  className="card p-5 flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl
                                  bg-primary-50 dark:bg-primary-900/30
                                  text-primary-600 dark:text-primary-400
                                  flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="card p-5 text-center bg-gradient-card"
                >
                  <p className="text-3xl font-extrabold gradient-text mb-1">{value}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
