import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="QUEST LOG"
        title="Featured"
        highlight="Projects"
        subtitle="Hands-on builds at the intersection of software engineering and quantitative thinking."
        color="bubblegum"
      />

      <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </AnimatedSection>
  )
}
