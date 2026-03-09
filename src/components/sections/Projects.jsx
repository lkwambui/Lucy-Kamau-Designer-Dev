import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import ProjectCard from '../ui/ProjectCard'
import { projects, filterCategories } from '../../data/projects'

/**
 * Projects — Filterable grid of all portfolio projects.
 * Shows all 10 projects with animated filter tabs.
 */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)

  /* Filtered projects */
  const filtered = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((p) => p.category.includes(activeFilter))
  }, [activeFilter])

  /* Limit visible cards unless "Show All" is clicked */
  const visible = showAll ? filtered : filtered.slice(0, 6)
  const hasMore = filtered.length > 6

  return (
    <div className="section-padding bg-white dark:bg-dark-900">
      <div className="section-container">
        <SectionHeader
          label="Featured Projects"
          title={<>Things I've <span className="gradient-text">Built</span></>}
          subtitle="A selection of real-world projects spanning full stack applications, API integrations, and tools."
        />

        {/* ── Filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveFilter(cat); setShowAll(false) }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                ${activeFilter === cat
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-card'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
            >
              {cat}
              {cat !== 'All' && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({projects.filter((p) => p.category.includes(cat)).length})
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* ── Projects grid ── */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-400 dark:text-slate-500">
            No projects match this filter.
          </div>
        )}

        {/* Show more / less toggle */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 flex justify-center"
          >
            <button
              onClick={() => setShowAll((s) => !s)}
              className="btn-outline"
            >
              {showAll ? 'Show Less' : `Show All ${filtered.length} Projects`}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
