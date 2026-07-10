import { motion } from 'framer-motion'

// Shared scroll-triggered fade-in wrapper used by every section below the hero.
// `viewport.once` keeps the animation from re-firing every time you scroll past it.
export default function AnimatedSection({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`relative py-24 px-6 sm:px-10 ${className}`}
    >
      {children}
    </motion.section>
  )
}
