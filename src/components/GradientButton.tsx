'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GradientButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export default function GradientButton({ children, onClick, className = '' }: GradientButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative px-6 py-3 rounded-lg font-space-grotesk font-medium
        bg-gradient-to-r from-indigo-500 to-cyan-500
        text-white shadow-md
        hover:shadow-[0_0_24px_0_rgba(99,102,241,0.5)]
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.button>
  )
} 