import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a Software Engineer with 2+ years of experience building secure, scalable backend systems. 
            Specialized in distributed systems, cloud architecture, and authentication infrastructure (OAuth2, SAML, JWT). 
            Currently pursuing MS in Information Systems at Northeastern University, focusing on cloud computing and software engineering.
          </p>
          <p>
            My professional journey includes engineering enterprise authentication systems at miniOrange, 
            building production-grade rate limiting services, and developing cloud-native applications on AWS. 
            I'm passionate about creating systems that solve real-world problems while maintaining high security and performance standards.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>5</h3>
              <p>Featured Projects</p>
            </div>
            <div className="stat">
              <h3>287+</h3>
              <p>GitHub Contributions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
