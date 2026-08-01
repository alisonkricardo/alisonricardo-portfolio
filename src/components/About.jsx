import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { PixelHeart } from './PixelSprites'

const facts = [
  { label: 'Based in', value: 'West Sussex, UK' },
  { label: 'Studying', value: 'BSc CS & Maths, Open University' },
  { label: 'Graduating', value: '2026' },
  { label: 'Also learning', value: 'Mandarin Chinese' },
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
            Mathematics. Before that, I completed my first year of Computer Science at the
            University of Westminster — so I've seen both the campus and remote sides of a CS
            degree.
          </p>
          <p>
            Right now I'm focused on landing a graduate software engineering role where I can
            build production systems and keep sharpening my fundamentals. Longer term, I'm
            drawn to quantitative finance — I like the mix of rigorous mathematics, statistics,
            and fast, correct code, which is why I've been building things like a quantum
            random number generator validated across 600 measurement shots, and a C++ limit
            order book simulator with a basic market-making strategy on top.
          </p>
          <p>
            Before doubling down on software, I spent time doing hands-on web development and
            brand/creative work — redesigning a company website end-to-end and growing traffic
            by 30%, and building and maintaining 15+ pages for another. It taught me to care
            about the details recruiters don't always ask about: performance, content, and
            actually shipping things people use.
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}
