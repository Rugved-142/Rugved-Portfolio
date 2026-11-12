import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a backend software engineer with 3+ years of combined full-time and internship experience. I build Java and Spring Boot services and REST APIs, with a focus on identity and security integrations (OAuth2, SAML, SCIM) and the cloud infrastructure and monitoring around them.
          </p>
          <p>
            At miniOrange I built SSO connectors used by 60,000+ enterprise users and worked directly with customers on integrations. I recently completed an MS in Information Systems at Northeastern University, where I built RateLimitX, a distributed rate limiter with a circuit breaker, Kubernetes deployment and an optional Kafka analytics feed.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>60,000+</h3>
              <p>Enterprise users on SSO connectors I built</p>
            </div>
            <div className="stat">
              <h3>3+</h3>
              <p>Years of experience (full-time and internships)</p>
            </div>
            <div className="stat">
              <h3>180</h3>
              <p>Automated tests in RateLimitX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
