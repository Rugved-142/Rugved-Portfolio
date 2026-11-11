import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="name">Rugved Gundawar</span>
          </h1>
          <p className="hero-subtitle">Backend Software Engineer | Java, Spring Boot & AWS</p>
          <p className="hero-description">
            Building secure, scalable backend services and identity integrations (OAuth2, SAML, SCIM) used by 60,000+ enterprise users, with 3+ years of combined full-time and internship experience.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
            <a href="/Rugved_Gundawar_Resume.pdf" download className="btn btn-secondary">Resume</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-picture">
            <img src="/profile.jpg" alt="Rugved Gundawar" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
