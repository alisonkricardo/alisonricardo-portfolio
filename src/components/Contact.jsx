import { FaEnvelope, FaLinkedin, FaGithub, FaItchIo } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'

// Swap these placeholder URLs for your real profiles.
const contactLinks = [
  { label: 'Email', icon: FaEnvelope, href: 'mailto:hello@alisonricardo.dev' },
  { label: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/in/alisonricardo' },
  { label: 'GitHub', icon: FaGithub, href: 'https://github.com/alisonricardo' },
  { label: 'itch.io', icon: FaItchIo, href: 'https://alisonricardo.itch.io' },
]

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="mx-auto max-w-2xl text-center">
      <div className="glow-gold relative">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Get In <span className="text-gradient">Touch</span>
        </h2>
      </div>

      <p className="mx-auto mt-4 max-w-md text-white/60">
        Open to junior roles in game development, technical art, and software/data roles —
        remote or UK-based.
      </p>

      <div className="mt-8 flex justify-center gap-5">
        {contactLinks.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-base-card text-white/70 transition-all hover:-translate-y-1 hover:border-lavender/50 hover:text-lavender-light hover:shadow-[0_0_20px_rgba(175,169,236,0.25)]"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </AnimatedSection>
  )
}
