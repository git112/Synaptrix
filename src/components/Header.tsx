'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-space-grotesk text-xl font-bold text-text-primary">
            Synaptrix
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-text-secondary hover:text-text-primary transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-text-secondary hover:text-text-primary transition-colors">
              Features
            </Link>
            <Link href="/dashboard" className="text-text-secondary hover:text-text-primary transition-colors">
              Dashboard
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
} 