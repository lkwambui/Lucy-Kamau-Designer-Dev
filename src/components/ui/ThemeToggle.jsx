import { motion, AnimatePresence } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'
import { useTheme } from '../../context/ThemeContext'

/**
 * ThemeToggle — Animated sun/moon button that switches dark/light mode.
 */
export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative flex items-center justify-center w-9 h-9 rounded-xl
        bg-slate-100 dark:bg-slate-800
        text-slate-600 dark:text-slate-300
        hover:bg-primary-100 dark:hover:bg-primary-900/40
        hover:text-primary-600 dark:hover:text-primary-400
        transition-colors duration-200 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}
