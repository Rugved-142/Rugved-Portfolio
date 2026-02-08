import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'RateLimitX - Distributed Rate Limiting Service',
      description: 'Production-grade API rate limiter with multiple algorithms (Fixed Window, Token Bucket, Sliding Window Counter) and Circuit Breaker pattern for fault tolerance.',
      tech: ['Java', 'Spring Boot', 'Redis', 'Docker', 'REST APIs', 'Gatling'],
      link: 'https://github.com/Rugved-142/RateLimitX',
      icon: '🚦'
    },
    {
      title: 'AI Phishing Detector - Chrome Extension',
      description: 'Real-time phishing detection powered by Google Gemini AI with 85% accuracy. Multi-layered analysis evaluating 20+ risk factors including SSL certificates, domain age, and suspicious forms.',
      tech: ['JavaScript', 'Node.js', 'MongoDB', 'Google Gemini API', 'Chrome Extensions'],
      link: 'https://github.com/Rugved-142/AI-Phishing-Detector',
      icon: '🛡️'
    },
    {
      title: 'AWS Cloud Infrastructure & File Service',
      description: 'Secure file management service with Terraform-provisioned AWS infrastructure. REST APIs for S3-based storage with RDS metadata and SNS integration for real-time notifications.',
      tech: ['Node.js', 'AWS (EC2, S3, RDS, SNS)', 'Terraform', 'GitHub Actions'],
      link: 'https://github.com/orgs/CSYE6225-Rugved/repositories',
      icon: '☁️'
    },
    {
      title: 'Community Connect',
      description: 'Full-stack volunteer and donor management platform for NGOs with role-based access control, donation tracking, volunteer shift assignment, and reporting dashboards.',
      tech: ['Java', 'Spring Boot', 'MySQL'],
      link: 'https://github.com/Rugved-142/Community_Connect',
      icon: '🤝'
    },
    {
      title: 'Smart Waste Classification System',
      description: 'AI-powered waste sorting using CNN (MobileNetV2) trained on 9 waste categories with 93.5% accuracy. Flask API with Streamlit UI for real-time predictions.',
      tech: ['Python', 'TensorFlow', 'Flask', 'Streamlit', 'OpenCV'],
      link: 'https://github.com/Rugved-142/Smart-Waste-Management-Recycling-System',
      icon: '🧠'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icon">{project.icon}</div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
