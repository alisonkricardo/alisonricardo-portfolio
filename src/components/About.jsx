import AnimatedSection from './AnimatedSection'
import profilePhoto from '../assets/profile.png'

export default function About() {
  return (
    <AnimatedSection id="about" className="mx-auto max-w-5xl">
      <div className="glow-gold relative">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          About <span className="text-gradient">Me</span>
        </h2>
      </div>

      <div className="mt-12 flex flex-col items-center gap-12 md:flex-row md:items-start">
        <div className="flex-shrink-0">
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-gold/40 shadow-[0_0_40px_rgba(184,150,46,0.25)] sm:h-56 sm:w-56">
            <img
              src={profilePhoto}
              alt="Portrait of Alison Ricardo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-5 text-white/70">
          <p>
            I'm a game developer with a growing focus on technical art — I like being the
            person who understands both why a shader looks wrong and why the frame rate just
            tanked. Right now I'm studying Physics &amp; Computer Science at the Open
            University, with Quantum Physics and Computational Applied Mathematics modules
            coming up next, which keeps the maths side of my brain just as busy as the
            creative side.
          </p>
          <p>
            My background spans further than games alone. I've worked with generative ML and
            explored quantum computing through Qiskit, so I'm comfortable moving between
            research-flavoured code and production-flavoured code. These days most of my time
            goes into building games in Godot 4, while I develop my technical art skills in
            Blender and Unreal Engine 5 — modelling, shading, and figuring out how real-time
            rendering actually works under the hood.
          </p>
          <p>
            Outside of code and art, I'm studying Mandarin Chinese with a long-term goal of
            working in Asia. I like projects that force me to learn something uncomfortable,
            whether that's a new engine, a new language, or a new branch of physics.
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}
