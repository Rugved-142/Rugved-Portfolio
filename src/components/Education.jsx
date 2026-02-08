import './Education.css'

function Education() {
  const education = [
    {
      degree: 'Master of Science in Information Systems',
      school: 'Northeastern University',
      location: 'Boston, MA',
      year: 'April 2026',
      description: 'Focus on Cloud Computing & Software Engineering'
    },
    {
      degree: 'Bachelor of Engineering',
      school: 'Savitribai Phule Pune University',
      location: 'Pune, India',
      year: 'July 2022',
      description: 'Strong foundation in Computer Science and Engineering principles'
    }
  ]

  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-grid">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-icon">🎓</div>
            <h3>{edu.degree}</h3>
            <h4>{edu.school}</h4>
            <p className="location">{edu.location}</p>
            <p className="year">{edu.year}</p>
            <p className="description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
