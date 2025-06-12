import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-secondary-bg border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-text-secondary text-sm">
          © {new Date().getFullYear()} Synaptrix. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 