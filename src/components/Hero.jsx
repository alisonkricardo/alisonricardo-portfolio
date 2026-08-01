import { motion } from 'framer-motion'
import FloatingDecor from './FloatingDecor'
import { PixelStar, PixelSparkle } from './PixelSprites'
import profilePhoto from '../assets/profile.png'

const scrollTo = (id) => (e) => {
  e.preventDefault()
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

const badges = [
  { label: 'CS & Maths · Open University', color: 'bg-lavender-light' },
  { label: 'Final Year · Grad 2026', color: 'bg-sun-light' },
  { label: 'Aiming for Quant', color: 'bg-mint-light' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-32"
    >
      <FloatingDecor />

      <div className="relative z-10 mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-[1fr_auto] md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center md:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-cream-card px-4 py-1.5 font-pixel text-[9px] text-ink shadow-chunky-sm shadow-ink">
            <PixelSparkle color="#FF8FAB" className="h-3 w-3" /> NOW LOADING: PORTFOLIO
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-tight tracking-tight text-ink sm:text-6xl">
            Hi, I'm Alison <span className="inline-block animate-wiggle">👋</span>
          </h1>

          <p className="mt-4 font-display text-xl font-semibold text-bubblegum-dark sm:text-2xl">
            Software Engineer in the making, quant-curious by design
          </p>

          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink/70 sm:text-lg md:mx-0">
            Final-year Computer Science &amp; Mathematics student building toward software
            engineering grad roles today, with quantitative research and trading in my
            sights down the road.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className={`rounded-full border-2 border-ink/15 px-3 py-1 font-display text-xs font-semibold text-ink/80 ${badge.color}`}
              >
                {badge.label}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href="#projects"
              onClick={scrollTo('#projects')}
              className="btn-chunky w-full border-ink bg-bubblegum px-7 py-3 text-sm text-white shadow-chunky shadow-ink hover:bg-bubblegum-dark sm:w-auto"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={scrollTo('#contact')}
              className="btn-chunky w-full border-ink bg-cream-card px-7 py-3 text-sm text-ink shadow-chunky shadow-ink hover:bg-lavender-light sm:w-auto"
            >
              Get in Touch
            </a>
            <a
              href="/Alison-Ricardo-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-chunky w-full border-ink bg-sun px-7 py-3 text-sm text-ink shadow-chunky shadow-ink hover:bg-sun-dark sm:w-auto"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-4 -z-10 rounded-blob bg-lavender-light" />
          <div className="relative h-56 w-56 overflow-hidden rounded-3xl border-[4px] border-ink bg-cream-card shadow-panel shadow-ink sm:h-64 sm:w-64">
            <img
              src={profilePhoto}
              alt="Portrait of Alison Ricardo"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="absolute -right-4 -top-4 flex h-11 w-11 rotate-6 items-center justify-center rounded-2xl border-[3px] border-ink bg-mint shadow-chunky-sm shadow-ink">
            <PixelStar color="#3A2E4D" className="h-5 w-5" />
          </span>
          <span className="absolute -bottom-3 -left-4 rounded-full border-[3px] border-ink bg-sky px-3 py-1 font-pixel text-[8px] text-ink shadow-chunky-sm shadow-ink">
            P1
          </span>
        </motion.div>
      </div>

      {/* scroll-down indicator */}
      <a
        href="#about"
        onClick={scrollTo('#about')}
        aria-label="Scroll to About section"
        className="absolute bottom-6 z-10 flex flex-col items-center gap-2 text-ink/40 transition-colors hover:text-bubblegum"
      >
        <span className="font-pixel text-[8px] uppercase tracking-widest">Scroll</span>
        <span className="block h-8 w-5 rounded-full border-2 border-ink/30 p-1">
          <span className="block h-1.5 w-1.5 animate-bounce-slow rounded-full bg-bubblegum" />
        </span>
      </a>
    </section>
  )
}
