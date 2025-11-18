import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import Navbar from './components/Navbar'
import { Section, Card } from './components/Sections'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/50 to-white" />
        <div className="absolute inset-0 pointer-events-none">
          <motion.div className="absolute -left-24 top-24 w-80 h-80 rounded-full bg-[#7C3AED]/20 blur-3xl" animate={{ y: [0, 20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="absolute -right-16 bottom-10 w-80 h-80 rounded-full bg-[#93C5FD]/30 blur-3xl" animate={{ y: [0, -25, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Digitalisez, innovez, réussissez!
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }} className="mt-4 text-lg sm:text-xl text-slate-700 max-w-2xl">
              Agence tech spécialisée en solutions digitales sur-mesure: no-code, automatisation, intégration IA et outils métiers.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#F97316] px-6 py-3 text-base font-semibold text-white shadow-[0_12px_40px_rgba(249,115,22,0.35)] transition-all hover:shadow-[0_16px_50px_rgba(249,115,22,0.5)] hover:-translate-y-0.5">
                Discutons de votre projet
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#why" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors">
                Découvrir Doventis
                <span className="opacity-60">•</span>
                <span className="text-[#7C3AED]">expertise</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why */}
      <Section id="why" eyebrow="Pourquoi Doventis" title="Nous simplifions la technologie pour les TPE/PME" description="Nous aidons les petites entreprises à gagner du temps, automatiser les tâches répétitives et piloter leurs opérations efficacement. Vos défis quotidiens deviennent des outils simples, efficaces et sur‑mesure, sans complexité technique.">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { k: 'No-code', c: '#93C5FD' },
            { k: 'Automatisation', c: '#7C3AED' },
            { k: 'IA intégrée', c: '#F97316' },
          ].map((item) => (
            <Card key={item.k}>
              <div className="text-sm text-slate-600">{item.k}</div>
              <div className="mt-3 h-1.5 rounded-full" style={{ backgroundColor: item.c }} />
            </Card>
          ))}
        </div>
      </Section>

      {/* Approach */}
      <Section id="approach" eyebrow="Notre approche" title="Simple, claire, orientée résultats">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            'Comprendre vos besoins',
            'Construire des solutions simples et sur‑mesure',
            'Automatiser pour booster la productivité',
            'Accompagnement continu',
          ].map((t, i) => (
            <Card key={t}>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-900 font-semibold">{i + 1}</div>
                <p className="text-slate-700">{t}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Solutions */}
      <Section id="solutions" eyebrow="Nos solutions" title="Des outils métiers clairs et efficaces">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'Applications métiers no‑code, faciles à utiliser',
            'Automatisation des tâches administratives et commerciales',
            "Intégration d'assistants IA",
            'Connexion des outils existants (zéro double saisie)',
            'Tableaux de bord clairs pour un pilotage en temps réel',
          ].map((t) => (
            <Card key={t}><p className="text-slate-700">{t}</p></Card>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section id="benefits" eyebrow="Ce que nous vous apportons" title="Des gains concrets au quotidien">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'Gagnez des heures chaque semaine',
            'Moins d’erreurs, opérations plus fiables',
            'Outils simples pour votre équipe',
            'Accompagnement personnalisé',
            'Visibilité en temps réel',
            'Solutions évolutives',
          ].map((t) => (
            <Card key={t}><p className="text-slate-700">{t}</p></Card>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" eyebrow="Exemples de projets" title="Des cas concrets">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'PME industrielle: gestion automatisée des stocks et commandes',
            'Cabinet de conseil: reporting automatique et bases clients synchronisées',
            'Startup SaaS: assistant support client propulsé par l’IA',
          ].map((t) => (
            <Card key={t}><p className="text-slate-700">{t}</p></Card>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process" eyebrow="Processus de projet" title="Un parcours clair">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            'Premier échange pour comprendre vos besoins',
            'Proposition de solution',
            'Dév rapide & mise en place',
            'Formation & onboarding',
            'Évolution scalable',
          ].map((t, i) => (
            <Card key={t}>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7C3AED]/10 text-[#7C3AED] font-semibold">{i + 1}</div>
                <p className="text-slate-700">{t}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <Section id="testimonial" eyebrow="Témoignage client" title="Des résultats mesurables">
        <Card>
          <p className="text-slate-700 text-lg">
            « Grâce à Doventis, nous économisons plusieurs heures par semaine en automatisant nos tâches administratives. Aucun code nécessaire. Une équipe à l’écoute et des résultats concrets dès le départ. »
          </p>
        </Card>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Contact" title="Parlons de votre projet">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <p className="text-slate-700">Email: <a className="text-[#7C3AED] hover:underline" href="mailto:contact@doventis.fr">contact@doventis.fr</a></p>
            <p className="mt-2 text-slate-700">Localisation: Saint‑Georges‑de‑Reneins (69830) — Interventions: Villefranche‑sur‑Saône, Mâcon, Lyon</p>
          </Card>
          <Card>
            <p className="text-slate-700">Expliquez vos besoins en quelques lignes et nous vous répondons sous 24h.</p>
            <a href="mailto:contact@doventis.fr" className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#F97316] px-6 py-3 text-base font-semibold text-white shadow-[0_12px_40px_rgba(249,115,22,0.35)] transition-all hover:shadow-[0_16px_50px_rgba(249,115,22,0.5)] hover:-translate-y-0.5">Envoyer un message →</a>
          </Card>
        </div>
        <div className="mt-12 text-center text-sm text-slate-500">© {new Date().getFullYear()} Doventis. Tous droits réservés.</div>
      </Section>
    </div>
  )
}
