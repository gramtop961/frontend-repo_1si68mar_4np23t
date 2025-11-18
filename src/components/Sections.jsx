import React from 'react'
import { motion } from 'framer-motion'

export function Section({ id, eyebrow, title, children, description }) {
  return (
    <section id={id} className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-10"
        >
          <div className="lg:col-span-5">
            {eyebrow && <div className="text-[#7C3AED] font-semibold tracking-wide uppercase text-xs mb-2">{eyebrow}</div>}
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">{title}</h2>
            {description && <p className="mt-3 text-slate-600/90 dark:text-slate-300">{description}</p>}
          </div>
          <div className="lg:col-span-7">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function Card({ children, className = '' }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className={`card p-6 ${className}`}>
      {children}
    </motion.div>
  )
}
