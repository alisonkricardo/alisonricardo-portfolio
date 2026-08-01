import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'
import experience from '../data/experience'

const dotColor = {
  bubblegum: 'bg-bubblegum',
  lavender: 'bg-lavender',
  sky: 'bg-sky',
}

const tagColor = {
  bubblegum: 'bg-bubblegum-light text-bubblegum-dark',
  lavender: 'bg-lavender-light text-ink',
  sky: 'bg-sky-light text-ink',
}

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="mx-auto max-w-3xl">
      <SectionHeading eyebrow="QUEST HISTORY" title="Work" highlight="Experience" color="lavender" />

      <ul className="mt-12 space-y-8 border-l-[3px] border-dashed border-ink/20 pl-8">
        {experience.map((job) => (
          <li key={job.role} className="relative">
            <span
              className={`absolute -left-[41px] top-0 flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-ink shadow-chunky-sm shadow-ink ${dotColor[job.color]}`}
            />
            <div className="panel border-ink p-5 shadow-ink">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-ink">{job.role}</h3>
                <span className={`rounded-full px-3 py-1 font-pixel text-[8px] ${tagColor[job.color]}`}>
                  {job.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-semibold text-ink/60">
                {job.company} · {job.location}
              </p>
              <ul className="mt-3 space-y-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-ink/70">
                    <span className="mt-1 text-bubblegum">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </AnimatedSection>
  )
}
