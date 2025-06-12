'use client'
import { useTheme } from './ThemeProvider'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-neural-light-card dark:bg-neural-dark-card 
                 border border-neural-light-border dark:border-neural-dark-border
                 hover:bg-neural-light-surface dark:hover:bg-neural-dark-surface
                 transition-all duration-300 group"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-neural-light-text dark:text-neural-dark-text 
                       group-hover:rotate-180 transition-transform duration-500" />
      ) : (
        <Moon className="w-5 h-5 text-neural-light-text dark:text-neural-dark-text 
                        group-hover:rotate-180 transition-transform duration-500" />
      )}
    </button>
  )
}
