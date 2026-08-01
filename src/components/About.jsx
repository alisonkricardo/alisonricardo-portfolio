import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { PixelHeart } from './PixelSprites'

const facts = [
  { label: 'Based in', value: 'West Sussex, UK' },
  { label: 'Studying', value: 'BSc CS & Maths, Open University' },
  { label: 'Graduating', value: 'Mid 2027' },
]

export default function About() {
  return (
    <AnimatedSection id="about" className="mx-auto max-w-5xl">
      <SectionHeading eyebrow="CHARACTER INFO" title="About" highlight="Me" color="mint" />

      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
        <div className="panel border-ink p-6 shadow-ink">
          <div className="flex items-center gap-2">
            <PixelHeart color="#FF8FAB" className="h-4 w-4" />
            <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink/60">
              Quick Facts
            </h3>
          </div>
          <dl className="mt-4 space-y-3">
            {facts.map((fact) => (
              <div key={fact.label} className="flex flex-col border-b-2 border-dashed border-ink/10 pb-2 last:border-none">
                <dt className="font-pixel text-[8px] uppercase tracking-wide text-ink/40">{fact.label}</dt>
                <dd className="font-display text-sm font-semibold text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-5 text-ink/75">
          <p>
            I'm in my final year of a Computer Science &amp; Mathematics degree at the Open
            University, wrapping up modules in Software Engineering and Computational Applied
            Mathematics.
          </p>
          <p>
            Currently, I'm focused on landing a graduate software engineering role where I can
            build production systems and keep sharpening my fundamentals. Longer term, I'm
            drawn to quantitative finance — I like the mix of rigorous mathematics, statistics,
            and fast, correct code.
          </p>
          <p>
            Outside of work and study, I enjoy playing video games, reading, watching films
            and tinkering with electronics. Alongside training for a half marathon, I also like to
            keep active with yoga and weightlifting.
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}
