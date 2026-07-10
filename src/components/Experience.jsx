import AnimatedSection from './AnimatedSection'
import experience from '../data/experience'

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="mx-auto max-w-3xl">
      <div className="glow-lavender relative text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Experience
        </h2>
      </div>

      <ul className="mt-10 space-y-4 border-l border-white/10 pl-6">
        {experience.map(({ role, company, period }) => (
          <li key={role} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold" />
            <p className="text-sm text-white/70 sm:text-base">
              <span className="font-medium text-white">{role}</span>
              <span className="text-white/50"> · {company}</span>
              <span className="block text-xs text-white/40 sm:inline sm:text-sm">
                {' '}
                — {period}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </AnimatedSection>
  )
}
