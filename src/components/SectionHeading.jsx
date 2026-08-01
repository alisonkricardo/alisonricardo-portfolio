const badgeColors = {
  bubblegum: 'bg-bubblegum-light',
  lavender: 'bg-lavender-light',
  mint: 'bg-mint-light',
  sun: 'bg-sun-light',
  sky: 'bg-sky-light',
}

export default function SectionHeading({ eyebrow, title, highlight, subtitle, color = 'lavender', center = true }) {
  return (
    <div className={center ? 'relative text-center' : 'relative'}>
      {eyebrow && (
        <span
          className={`inline-flex items-center rounded-full border-[3px] border-ink px-3 py-1 font-pixel text-[9px] text-ink ${badgeColors[color]}`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
        {title}{' '}
        {highlight && (
          <span className={`inline-block -rotate-1 rounded-xl px-2 py-0.5 ${badgeColors[color]}`}>
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-ink/60 ${center ? 'mx-auto max-w-xl' : 'max-w-xl'}`}>{subtitle}</p>
      )}
    </div>
  )
}
