import './Experience.css'

function Experience() {
  const experiences = [
    {
      title: 'Software Developer Engineer',
      company: 'Miniorange Software Securities',
      location: 'Pune, India',
      period: 'Jul 2022 - Jun 2024',
      description: 'Engineered enterprise authentication infrastructure (OAuth2, SAML, JWT). Built backend systems for API security and implemented distributed authentication solutions.'
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'IMATMI',
      location: 'Pune, India',
      period: 'Aug 2021 - May 2022',
      description: 'Developed full-stack web applications and contributed to various client projects with modern technologies.'
    },
    {
      title: 'Software Developer Intern',
      company: 'InfoSpeed Services',
      location: 'Pune, India',
      period: 'Jan 2021 - Apr 2021',
      description: 'Contributed to software development projects and gained experience in professional development practices.'
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company} • {exp.location}</h4>
              <p className="period">{exp.period}</p>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
