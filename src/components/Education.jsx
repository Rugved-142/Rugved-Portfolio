import './Education.css'

function Education() {
  const education = [
    {
      degree: 'MS in Information Systems',
      school: 'Northeastern University',
      location: 'Boston, MA',
      year: 'April 2026',
      description: 'Coursework: Data Structures & Algorithms, Object-Oriented Design, Databases, Cloud Computing'
    },
    {
      degree: 'BE in Electronics and Telecommunication',
      school: 'Pune Institute of Computer Technology (SPPU)',
      location: 'Pune, India',
      year: 'July 2022',
      description: 'Electronics and Telecommunication Engineering'
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
