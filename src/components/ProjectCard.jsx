import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

export default function ProjectCard({ title, description, tech, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-base-card p-6 transition-colors hover:border-gold/40 hover:shadow-[0_0_30px_rgba(184,150,46,0.15)]"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold text-white group-hover:text-gradient">
          {title}
        </h3>
        <FiArrowUpRight className="mt-1 flex-shrink-0 text-white/40 transition-colors group-hover:text-lavender" />
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-lavender/30 bg-lavender/5 px-2.5 py-1 text-xs font-medium text-lavender-light"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.a>
  )
}
