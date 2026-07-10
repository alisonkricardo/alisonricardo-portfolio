import { motion } from 'framer-motion'
import StarField from './StarField'

const scrollTo = (id) => (e) => {
  e.preventDefault()
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <StarField />

      {/* soft glow behind the headline */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[500px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-lavender/10 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl"
      >
        <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl">
          <span className="text-gradient">Alison Ricardo</span>
        </h1>

        <p className="mt-5 font-display text-xl font-medium text-lavender-light sm:text-2xl">
          Game Developer &amp; Aspiring Technical Artist
        </p>

        <p className="mx-auto mt-6 max-w-xl text-base text-white/60 sm:text-lg">
          Building real-time worlds at the intersection of code, art, and mathematics.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            onClick={scrollTo('#projects')}
            className="w-full rounded-full bg-gold px-8 py-3 text-sm font-semibold text-base transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 sm:w-auto"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={scrollTo('#contact')}
            className="w-full rounded-full border border-lavender/40 px-8 py-3 text-sm font-semibold text-lavender-light transition-all hover:border-lavender hover:bg-lavender/10 sm:w-auto"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>

      {/* scroll-down indicator */}
      <a
        href="#about"
        onClick={scrollTo('#about')}
        aria-label="Scroll to About section"
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-white/40 transition-colors hover:text-lavender"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <span className="block h-8 w-5 rounded-full border border-white/30 p-1">
          <span className="block h-1.5 w-1.5 animate-bounce-slow rounded-full bg-lavender" />
        </span>
      </a>
    </section>
  )
}
