import React from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Pourquoi Doventis', href: '#why' },
  { label: 'Approche', href: '#approach' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Bénéfices', href: '#benefits' },
  { label: 'Projets', href: '#projects' },
  { label: 'Processus', href: '#process' },
  { label: 'Avis', href: '#testimonial' },
  { label: 'Contact', href: '#contact' },
]

function Logo() {
  // Stylized D with orange arrow and blue gradient
  return (
    <div className="flex items-center gap-3 select-none">
      <svg width="34" height="34" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Doventis">
        <defs>
          <linearGradient id="grad-blue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <path d="M14 12h18c10 0 18 8 18 18s-8 18-18 18H14V12z" stroke="url(#grad-blue)" strokeWidth="6" fill="none" strokeLinecap="round"/>
        <path d="M40 20l10 10-10 10" fill="none" stroke="#F97316" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-white font-semibold tracking-widest text-lg uppercase">Doventis</span>
    </div>
  )
}

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between shadow-lg">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-200/90 hover:text-white transition-colors text-sm">
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-medium text-white bg-[#7C3AED] hover:bg-[#6D28D9] px-4 py-2 rounded-full shadow-[0_10px_30px_rgba(124,58,237,0.35)] transition-all">
            Discutons de votre projet
            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </motion.header>
  )
}
