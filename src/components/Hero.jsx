import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="name">Rugved Gundawar</span>
          </h1>
          <p className="hero-subtitle">Software Engineer | Backend & Cloud Specialist</p>
          <p className="hero-description">
            Building secure, scalable backend systems with 2+ years of experience in distributed systems, authentication infrastructure (OAuth2, SAML, JWT), and cloud-native development.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
            <a href="/Rugved_Gundawar_Resume.pdf" download className="btn btn-secondary"> Resume</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-picture">
            <img src="/3W8A7732%202.JPG" alt="Rugved Gundawar" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
