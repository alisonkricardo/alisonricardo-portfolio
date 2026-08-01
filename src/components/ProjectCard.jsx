import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const statusStyle = {
  completed: 'border-mint-dark bg-mint-light text-mint-dark',
  'in-progress': 'border-sun-dark bg-sun-light text-ink',
}

const statusLabel = {
  completed: '✅ Completed',
  'in-progress': '🚧 In Progress',
}

export default function ProjectCard({ title, description, tech, link, status }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="panel group flex h-full flex-col border-ink p-6 shadow-ink"
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`rounded-full border-2 px-2.5 py-1 font-pixel text-[8px] ${statusStyle[status]}`}>
          {statusLabel[status]}
        </span>
        <FiArrowUpRight className="mt-1 flex-shrink-0 text-ink/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-bubblegum" />
      </div>

      <h3 className="mt-4 font-display text-xl font-bold text-ink">{title}</h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border-2 border-lavender/40 bg-lavender-light px-2.5 py-1 text-xs font-semibold text-ink"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.a>
  )
}
