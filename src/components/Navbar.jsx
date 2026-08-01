import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = (href) => (e) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-3xl border-[3px] border-ink/10 px-4 py-2.5 transition-all duration-300 sm:px-6 ${
          scrolled ? 'bg-cream-card/95 shadow-panel shadow-ink/10 backdrop-blur' : 'bg-cream-card/70 backdrop-blur-sm'
        }`}
      >
        <a href="#hero" onClick={handleLinkClick('#hero')} className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border-[3px] border-ink bg-bubblegum font-pixel text-[10px] text-white shadow-chunky-sm shadow-ink">
            AR
          </span>
          <span className="hidden font-display text-lg font-semibold text-ink sm:block">
            Alison Ricardo
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick(link.href)}
                className="rounded-full px-4 py-2 font-display text-sm font-semibold text-ink/70 transition-colors hover:bg-lavender-light hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={handleLinkClick('#contact')}
            className="btn-chunky border-ink bg-mint px-4 py-1.5 text-xs text-ink shadow-chunky-sm shadow-ink hover:bg-mint-dark hover:text-white"
          >
            Say Hi <span aria-hidden="true">👋</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-xl border-[3px] border-ink bg-sun shadow-chunky-sm shadow-ink md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          <span className={`block h-0.5 w-4 bg-ink transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-4 bg-ink transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block h-0.5 w-4 bg-ink transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl border-[3px] border-ink/10 bg-cream-card p-2 shadow-panel shadow-ink/10 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick(link.href)}
                  className="block rounded-2xl px-4 py-3 font-display text-sm font-semibold text-ink/80 hover:bg-lavender-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
