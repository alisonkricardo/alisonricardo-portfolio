import { useEffect, useRef } from 'react'

// Subtle drifting star field for the hero background, drawn on a canvas.
// Kept low-opacity and low particle-count so it never competes with the text.
export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let stars = []

    const colors = ['#B8962E', '#AFA9EC', '#FFFFFF']

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      const count = Math.floor((canvas.width * canvas.height) / 9000)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.3 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.15 + 0.02,
        drift: Math.random() * 0.3 - 0.15,
        opacity: Math.random() * 0.5 + 0.2,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const star of stars) {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.globalAlpha = star.opacity
        ctx.fill()

        star.y -= star.speed
        star.x += star.drift

        if (star.y < -5) star.y = canvas.height + 5
        if (star.x < -5) star.x = canvas.width + 5
        if (star.x > canvas.width + 5) star.x = -5
      }
      ctx.globalAlpha = 1
      animationFrameId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-60"
      aria-hidden="true"
    />
  )
}
