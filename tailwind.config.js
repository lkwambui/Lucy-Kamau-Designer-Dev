/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0f4ff',
          100: '#e0eaff',
          200: '#c3d4fe',
          300: '#a3b9fd',
          400: '#7c95fb',
          500: '#5b6ef7',   // main brand blue-violet
          600: '#4a52e8',
          700: '#3b3fd3',
          800: '#3034aa',
          900: '#2a2e87',
        },
        accent: {
          400: '#a78bfa',   // purple accent
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        dark: {
          800: '#0f172a',
          850: '#0c1322',
          900: '#08101d',
          950: '#050d18',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(91,110,247,0.08) 0%, rgba(139,92,246,0.05) 100%)',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px rgba(91,110,247,0.18)',
        'glow': '0 0 30px rgba(91,110,247,0.35)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
