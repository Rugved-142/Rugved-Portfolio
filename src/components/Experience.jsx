import './Experience.css'

function Experience() {
  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'miniOrange Software Securities',
      location: 'Pune, India',
      period: 'Jul 2022 - Jun 2024',
      bullets: [
        'Enabled single sign-on for 60,000+ enterprise users in finance, healthcare, and education by architecting 2 production SSO connectors in Java and Spring Boot (OAuth2, SAML, OIDC, JWT, LDAP).',
        'Helped close a $50K Phase 1 contract with a Tier-1 telecom by building a fault-tolerant SOAP-to-REST layer that connected its legacy systems to a modern identity provider and Duo MFA with no downtime.',
        'Unlocked $40K in revenue from 3 enterprise customers by building webhook-triggered SCIM sync between external identity providers and miniOrange IAM, automating user lifecycle management and debugging sync failures with customer teams.',
        'Cut customer deployment time by 83% (3 hours to 30 minutes) by redesigning the onboarding workflow and scoping OAuth2 and SAML integrations directly with enterprise clients.',
        'Reduced API response latency by 40% by resolving MySQL query bottlenecks in the user-provisioning, SSO, and MFA REST APIs.'
      ]
    },
    {
      title: 'Full-Stack Developer Intern',
      company: 'IMATMI',
      location: 'India',
      period: 'Aug 2021 - May 2022',
      bullets: [
        'Built a MERN platform for students with dyslexia (React UI, REST APIs, MongoDB, JWT auth with role-based access); geolocation-based matching reached 85% successful pairings for 900 users.',
        'Cut real-time video session latency from 100ms to 20ms with WebSocket integration and message batching; made report generation 75% faster through MongoDB query optimization.'
      ]
    },
    {
      title: 'Software Developer Intern',
      company: 'InfoSpeed Services',
      location: 'India',
      period: 'Jan 2021 - Apr 2021',
      bullets: [
        'Built a Java Spring Boot cargo-tracking module for a warehouse application, processing 15,000 daily barcode scans and tracking 600 containers across 4 warehouses in real time.',
        'Set up centralized logging (SLF4J, Logback, ELK), cutting incident resolution time from 2 hours to 1 hour.'
      ]
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
              <ul className="description description-list">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
