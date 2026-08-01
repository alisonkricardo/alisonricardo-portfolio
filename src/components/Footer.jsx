import { PixelHeart } from './PixelSprites'

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-dashed border-ink/15 px-6 py-8 text-center">
      <p className="flex items-center justify-center gap-1.5 font-display text-xs font-semibold text-ink/50">
        Made with <PixelHeart color="#FF8FAB" className="h-3 w-3" /> by Alison Ricardo · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
