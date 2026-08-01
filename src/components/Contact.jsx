import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'

const contactLinks = [
  {
    label: 'Email',
    value: 'alisonk.ricardo@gmail.com',
    icon: FaEnvelope,
    href: 'mailto:alisonk.ricardo@gmail.com',
    color: 'bg-bubblegum-light hover:bg-bubblegum text-ink hover:text-white',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/alisonkricardo',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/alisonkricardo/',
    color: 'bg-sky-light hover:bg-sky text-ink hover:text-white',
  },
  {
    label: 'GitHub',
    value: 'github.com/alisonkricardo',
    icon: FaGithub,
    href: 'https://github.com/alisonkricardo',
    color: 'bg-mint-light hover:bg-mint text-ink hover:text-white',
  },
]

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="mx-auto max-w-3xl">
      <SectionHeading
        eyebrow="SAVE FILE"
        title="Get In"
        highlight="Touch"
        subtitle="Open to graduate software engineering roles — remote or UK-based. Feel free to reach out via email or LinkedIn!"
        color="sun"
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {contactLinks.map(({ label, value, icon: Icon, href, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-start gap-1 rounded-2xl border-[3px] border-ink px-5 py-4 text-left shadow-chunky shadow-ink transition-all duration-150 active:translate-y-1 ${color}`}
          >
            <span className="flex items-center gap-2 font-pixel text-[9px] uppercase tracking-wide">
              <Icon size={14} /> {label}
            </span>
            <span className="font-display text-sm font-semibold">{value}</span>
          </a>
        ))}
      </div>
    </AnimatedSection>
  )
}
