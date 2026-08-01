// Tiny 8-bit style sprites built from an SVG pixel grid — crisp edges, no external assets.
// Each `pattern` row is a string where any non-'.' character is a filled pixel.

function PixelIcon({ pattern, color = 'currentColor', className = '' }) {
  const rows = pattern.length
  const cols = pattern[0].length
  const pixels = []

  pattern.forEach((row, y) => {
    row.split('').forEach((cell, x) => {
      if (cell !== '.') pixels.push({ x, y })
    })
  })

  return (
    <svg
      viewBox={`0 0 ${cols} ${rows}`}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {pixels.map(({ x, y }) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={color} />
      ))}
    </svg>
  )
}

const STAR_PATTERN = [
  '...X...',
  '...X...',
  '..XXX..',
  'XXXXXXX',
  '..XXX..',
  '...X...',
  '...X...',
]

const HEART_PATTERN = [
  '.XX.XX.',
  'XXXXXXX',
  'XXXXXXX',
  '.XXXXX.',
  '..XXX..',
  '...X...',
]

const SPARKLE_PATTERN = ['..X..', '.XXX.', 'XXXXX', '.XXX.', '..X..']

const CLOUD_PATTERN = [
  '..XXXXX....',
  '.XXXXXXXX..',
  'XXXXXXXXXXX',
  'XXXXXXXXXXX',
  '.XXXXXXXX..',
]

export function PixelStar(props) {
  return <PixelIcon pattern={STAR_PATTERN} {...props} />
}

export function PixelHeart(props) {
  return <PixelIcon pattern={HEART_PATTERN} {...props} />
}

export function PixelSparkle(props) {
  return <PixelIcon pattern={SPARKLE_PATTERN} {...props} />
}

export function PixelCloud(props) {
  return <PixelIcon pattern={CLOUD_PATTERN} {...props} />
}
