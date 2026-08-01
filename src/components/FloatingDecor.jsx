import { PixelStar, PixelHeart, PixelSparkle, PixelCloud } from './PixelSprites'

// A handful of floating pixel sprites scattered around a section.
// Kept sparse and low-opacity so it reads as ambience, not clutter.
const sprites = [
  { Icon: PixelStar, color: '#FFD25E', top: '12%', left: '8%', size: 28, anim: 'animate-float' },
  { Icon: PixelHeart, color: '#FF8FAB', top: '20%', left: '88%', size: 26, anim: 'animate-float-slow' },
  { Icon: PixelSparkle, color: '#7FCFFF', top: '68%', left: '5%', size: 20, anim: 'animate-twinkle' },
  { Icon: PixelCloud, color: '#B3A0F7', top: '78%', left: '82%', size: 44, anim: 'animate-float-slower' },
  { Icon: PixelSparkle, color: '#6FE0C2', top: '6%', left: '48%', size: 16, anim: 'animate-twinkle' },
  { Icon: PixelStar, color: '#B3A0F7', top: '85%', left: '45%', size: 18, anim: 'animate-float-slow' },
]

export default function FloatingDecor({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {sprites.map(({ Icon, color, top, left, size, anim }, i) => (
        <div
          key={i}
          className={`absolute opacity-70 ${anim}`}
          style={{ top, left, width: size, height: size }}
        >
          <Icon color={color} className="h-full w-full drop-shadow-sm" />
        </div>
      ))}
    </div>
  )
}
