'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GradientButton from '@/components/GradientButton'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <Header />
      </div>
      
      <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-space-grotesk text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary mb-6 drop-shadow-2xl hero-title-shadow"
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

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neural-light-bg dark:bg-neural-dark-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Powerful Features
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Everything you need to supercharge your learning and productivity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Task Manager Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group glass-card-modern p-8 rounded-2xl border border-border shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 backdrop-blur-md"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-space-grotesk text-xl font-semibold text-text-primary mb-4">Smart Task Manager</h3>
              <p className="text-text-secondary">Transform raw task inputs into structured, actionable roadmaps.</p>
            </motion.div>

            {/* Debug Assistant Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group glass-card-modern p-8 rounded-2xl border border-border shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 backdrop-blur-md"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-space-grotesk text-xl font-semibold text-text-primary mb-4">AI Debugging Assistant</h3>
              <p className="text-text-secondary">Get instant explanations and fixes for your code errors in simple, easy-to-understand language.</p>
            </motion.div>

            {/* Learning Tracker Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group glass-card-modern p-8 rounded-2xl border border-border shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 backdrop-blur-md"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-space-grotesk text-xl font-semibold text-text-primary mb-4">Learning Tracker</h3>
              <p className="text-text-secondary">Auto-generate skill-building plans & track your learning journey visually</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}

// Custom animation for slow spin
// Add this to your global CSS if not present:
// .animate-spin-slow { animation: spin 18s linear infinite; }
// @keyframes spin { 100% { transform: rotate(360deg); } }
