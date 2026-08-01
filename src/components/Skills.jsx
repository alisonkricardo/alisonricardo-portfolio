import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'
import skills from '../data/skills'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const pillVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const palette = [
  { icon: 'bg-bubblegum text-white', pill: 'border-bubblegum/40 bg-bubblegum-light text-bubblegum-dark' },
  { icon: 'bg-lavender text-white', pill: 'border-lavender/40 bg-lavender-light text-ink' },
  { icon: 'bg-mint text-white', pill: 'border-mint/40 bg-mint-light text-ink' },
  { icon: 'bg-sun text-ink', pill: 'border-sun/50 bg-sun-light text-ink' },
  { icon: 'bg-sky text-white', pill: 'border-sky/40 bg-sky-light text-ink' },
]

function SkillCategory({ category, icon: Icon, items, colors }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="panel panel-hover border-ink p-6 shadow-ink"
    >
      <div className="flex items-center gap-3">
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl border-[3px] border-ink shadow-chunky-sm shadow-ink ${colors.icon}`}>
          <Icon size={16} />
        </span>
        <h3 className="font-display text-lg font-bold text-ink">{category}</h3>
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
            className={`rounded-full border-2 px-3 py-1.5 text-sm font-semibold ${colors.pill}`}
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
      <SectionHeading
        eyebrow="INVENTORY"
        title="Skills &"
        highlight="Tools"
        subtitle="A toolkit spanning software fundamentals, quantitative computing, and the maths underneath it all."
        color="sky"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <SkillCategory key={group.category} {...group} colors={palette[i % palette.length]} />
        ))}
      </div>
    </AnimatedSection>
  )
}
