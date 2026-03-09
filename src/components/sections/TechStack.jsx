import { motion } from 'framer-motion'
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs,
  FaGithub, FaGit, FaFigma,
} from 'react-icons/fa'
import {
  SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiBootstrap,
  SiExpress, SiPostgresql, SiMongodb, SiPrisma, SiVite,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { MdDesignServices } from 'react-icons/md'
import { VscVscode } from 'react-icons/vsc'
import SectionHeader from '../ui/SectionHeader'
import { skillGroups } from '../../data/skills'

/** Map icon name strings from skills.js to actual components */
const ICON_MAP = {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaGit, FaFigma,
  SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiBootstrap,
  SiExpress, SiPostgresql, SiMongodb, SiPrisma, SiVite,
  VscVscode,
  TbApi, MdDesignServices,
}

/**
 * TechStack — Grid display of skill categories with animated skill pills
 * and progress bars.
 */
export default function TechStack() {
  return (
    <div className="section-padding bg-slate-50 dark:bg-dark-850">
      <div className="section-container">
        <SectionHeader
          label="Tech Stack"
          title={<>Skills &amp; <span className="gradient-text">Technologies</span></>}
          subtitle="The tools and technologies I use to build modern, scalable web applications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <SkillGroupCard key={group.category} group={group} delay={gi * 0.08} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── SkillGroupCard ───────────────────────────────────────── */
function SkillGroupCard({ group, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className="card p-6"
    >
      {/* Category title */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${group.color}`} />
        <h3 className="font-bold text-slate-900 dark:text-white text-base">
          {group.category}
        </h3>
      </div>

      {/* Skills list */}
      <ul className="space-y-3">
        {group.skills.map((skill, si) => {
          const IconComponent = ICON_MAP[skill.icon]
          return (
            <li key={skill.name}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  {IconComponent ? (
                    <IconComponent
                      size={15}
                      className="text-slate-500 dark:text-slate-400 flex-shrink-0"
                    />
                  ) : (
                    <span className="w-3.5 h-3.5" />
                  )}
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {skill.name}
                  </span>
                </div>
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  {skill.level}%
                </span>
              </div>

              {/* Animated progress bar */}
              <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: si * 0.06 + delay, ease: 'easeOut' }}
                  className={`h-full bg-gradient-to-r ${group.color} rounded-full`}
                />
              </div>
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}
