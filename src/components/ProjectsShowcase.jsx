import { ContainerScroll } from './ui/ContainerScroll'
import './ProjectsShowcase.css'

function ProjectsShowcase() {
  return (
    <section className="projects-showcase">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="showcase-title">
              Explore My Work
            </h1>
            <p className="showcase-subtitle">
              Building innovative solutions with modern technologies
            </p>
          </>
        }
      >
        <div className="showcase-content">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1400&h=720&fit=crop"
            alt="Projects showcase"
            className="showcase-image"
          />
          <div className="showcase-overlay">
            <h3>Featured Projects</h3>
            <p>RateLimitX • AI Phishing Detector • AWS Cloud Infrastructure</p>
          </div>
        </div>
      </ContainerScroll>
    </section>
  )
}

export default ProjectsShowcase
