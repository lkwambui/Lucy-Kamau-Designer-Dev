import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

/**
 * ThemeProvider — wraps the app and exposes `isDark` and `toggleTheme`.
 * Persists the user preference to localStorage and applies the 'dark' class
 * to the document root for Tailwind's darkMode:'class' strategy.
 */
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    // Respect saved pref, then default to light
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark((prev) => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
