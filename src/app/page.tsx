'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GradientButton from '@/components/GradientButton'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-space-grotesk text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6"
          >
            Synaptrix – Your AI Productivity OS
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-lg sm:text-xl mb-8"
          >
            AI-powered Task Management & Debugging Assistant
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <GradientButton>
              Get Started
            </GradientButton>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
