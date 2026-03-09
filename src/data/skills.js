/**
 * skills.js — Tech stack grouped by category.
 * `icon` references react-icons identifiers mapped in the TechStack component.
 */

export const skillGroups = [
  {
    category: 'Frontend',
    color: 'from-blue-500 to-indigo-600',
    skills: [
      { name: 'React',       icon: 'FaReact',        level: 95 },
      { name: 'Next.js',     icon: 'SiNextdotjs',    level: 90 },
      { name: 'JavaScript',  icon: 'SiJavascript',   level: 95 },
      { name: 'TypeScript',  icon: 'SiTypescript',   level: 80 },
      { name: 'HTML5',       icon: 'FaHtml5',        level: 98 },
      { name: 'CSS3',        icon: 'FaCss3Alt',      level: 95 },
      { name: 'Tailwind',    icon: 'SiTailwindcss',  level: 92 },
      { name: 'Bootstrap',   icon: 'SiBootstrap',    level: 88 },
    ],
  },
  {
    category: 'Backend',
    color: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'Node.js',    icon: 'FaNodeJs',     level: 88 },
      { name: 'Express.js', icon: 'SiExpress',    level: 88 },
      { name: 'REST APIs',  icon: 'TbApi',        level: 90 },
      { name: 'M-Pesa API', icon: 'SiSafaricom',  level: 85 },
    ],
  },
  {
    category: 'Databases',
    color: 'from-orange-500 to-amber-600',
    skills: [
      { name: 'PostgreSQL', icon: 'SiPostgresql', level: 82 },
      { name: 'MongoDB',    icon: 'SiMongodb',    level: 85 },
      { name: 'Prisma ORM', icon: 'SiPrisma',     level: 80 },
    ],
  },
  {
    category: 'Design Tools',
    color: 'from-pink-500 to-rose-600',
    skills: [
      { name: 'Figma',      icon: 'FaFigma',      level: 88 },
      { name: 'UI/UX',      icon: 'MdDesignServices', level: 85 },
    ],
  },
  {
    category: 'Dev Tools',
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'Git',        icon: 'FaGit',        level: 90 },
      { name: 'GitHub',     icon: 'FaGithub',     level: 92 },
      { name: 'Vite',       icon: 'SiVite',       level: 88 },
      { name: 'VS Code',    icon: 'VscVscode',          level: 95 },
    ],
  },
]
