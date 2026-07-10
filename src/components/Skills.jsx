import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import skills from '../data/skills'

// Parent controls the stagger timing; each pill is a child that fades/rises in turn.
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
}

const pillVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

function SkillCategory({ category, icon: Icon, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-white/10 bg-base-card p-6 transition-colors hover:border-lavender/30"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold/10 text-gold">
          <Icon size={18} />
        </span>
        <h3 className="font-display text-lg font-semibold text-white">{category}</h3>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-5 flex flex-wrap gap-2"
      >
        {items.map((item) => (
          <motion.span
            key={item}
            variants={pillVariants}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70 transition-colors hover:border-lavender/40 hover:text-lavender-light"
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="mx-auto max-w-6xl">
      <div className="glow-lavender relative text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Skills &amp; <span className="text-gradient">Tools</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/60">
          A toolkit that spans game development, technical art, and the software/ML side of
          things.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <SkillCategory key={group.category} {...group} />
        ))}
      </div>
    </AnimatedSection>
  )
}
