import AnimatedSection from './AnimatedSection'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="mx-auto max-w-6xl">
      <div className="glow-gold relative text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/60">
          A mix of gameplay systems, shader work, and the quantum computing side of things.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </AnimatedSection>
  )
}
