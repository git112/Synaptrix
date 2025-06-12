import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Synaptrix - Your AI Productivity OS',
  description: 'AI-powered Task Management & Debugging Assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-inter bg-background text-text-primary min-h-screen`}>
        <ThemeProvider>
          <div className="min-h-screen bg-neural-light-bg dark:bg-neural-dark-bg neural-bg">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}