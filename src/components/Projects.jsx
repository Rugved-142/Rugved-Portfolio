import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './Projects.css'

function Projects() {
  const scrollContainer = useRef(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const scroll = (direction) => {
    if (scrollContainer.current && !isScrolling) {
      setIsScrolling(true)
      const scrollAmount = 350
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
      window.setTimeout(() => setIsScrolling(false), 600)
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.25, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      scale: 0.96,
      y: 10,
      transition: { duration: 0.2, ease: 'easeIn' }
    }
  }

  const projects = [
    {
      title: 'RateLimitX - Distributed Rate Limiting Service',
      description: 'Distributed rate limiter with three algorithms as atomic Lua scripts on Redis, JWT-based tiered limits, a circuit breaker with in-memory fallback, and an optional Kafka analytics feed.',
      details: 'Built a Redis-backed rate limiter (Java 21, Spring Boot) with JWT auth and tiered limits; all three algorithms run as atomic Lua scripts on Redis time, verified by a 200-thread test that admits exactly the limit. Added a circuit breaker with an in-memory fallback: with Redis frozen for 40 s under load, 0 of 2,800 requests failed on both Docker Compose and 2-replica Kubernetes, and deleting a pod under load dropped 0 requests. Added an optional Kafka analytics feed (non-blocking producer that drops events rather than delay requests; idempotent consumer writing hourly aggregates to PostgreSQL); 180 tests run in CI with a Trivy scan and a kind-based Kubernetes deploy.',
      tech: ['Java 21', 'Spring Boot', 'Redis', 'Kafka', 'PostgreSQL', 'Kubernetes', 'Docker', 'Prometheus', 'Grafana', 'Testcontainers', 'GitHub Actions'],
      link: 'https://github.com/Rugved-142/RatelimitX',
      icon: '🚦'
    },
    {
      title: 'AWS Cloud Infrastructure & File Service',
      description: 'Terraform-provisioned AWS infrastructure for a containerized Node.js application, with a GitHub Actions deployment pipeline and CloudWatch alarms.',
      details: 'Provisioned AWS infrastructure with Terraform (VPC, EC2, ALB, ASG, RDS, Lambda, S3) for a containerized Node.js app. Built a GitHub Actions CI/CD pipeline (Docker, ECR) that deploys on every push to main. Added CloudWatch/SNS alarms (unhealthy hosts, CPU, Lambda errors, 5XX); least-privilege IAM, no hardcoded credentials.',
      tech: ['Node.js', 'AWS (EC2, ALB, ASG, RDS, Lambda, S3, SNS, IAM)', 'Terraform', 'Docker', 'GitHub Actions', 'CloudWatch'],
      // TODO(me): replace with a public repo URL
      link: 'https://github.com/orgs/CSYE6225-Rugved/repositories',
      icon: '☁️'
    },
    {
      title: 'AI Phishing Detector - Chrome Extension',
      description: 'Manifest V3 Chrome extension that scores phishing risk with 20+ rule-based checks (URL, DOM structure, brand impersonation) combined with Gemini 2.5 Flash analysis, and blocks high-risk URLs before the page loads.',
      details: 'Shows color-coded risk badges in a popup and dashboard UI. 71 Jest tests across 5 suites and an optional Node/Express/MongoDB reporting API.',
      tech: ['JavaScript', 'Chrome Extensions (Manifest V3)', 'Gemini API', 'Node.js', 'Express', 'MongoDB', 'Jest'],
      link: 'https://github.com/Rugved-142/ai-phishing-detector',
      icon: '🛡️'
    },
    {
      title: 'Big Data Indexing - Medical Plan API',
      description: 'RESTful API for managing medical insurance plans with JSON Schema validation, ETag-based conditional operations, decomposed Redis storage, and parent-child Elasticsearch indexing with RabbitMQ message queue and OAuth2 security. Course project.',
      details: 'Built a backend indexing pipeline with decomposed Redis storage, conditional read/write flows using ETags, JSON Merge Patch support, and Elasticsearch parent-child search powered by RabbitMQ-driven async indexing. Includes Google OAuth2/JWT security and versioned REST endpoints.',
      tech: ['Java 17', 'Spring Boot 3.4.1', 'Redis', 'Elasticsearch', 'RabbitMQ', 'OAuth2', 'Docker', 'Maven'],
      link: 'https://github.com/Rugved-142/INFO_7255_Big_Data_Indexing',
      icon: '🔍'
    },
    {
      title: 'Community Connect',
      description: 'Java Swing desktop application for a volunteer and donation network (group project, INFO 5100): a four-level network, enterprise, organization and user hierarchy with role-specific screens, Twilio SMS notifications and JavaFaker seed data. Data is held in memory.',
      details: 'Java Swing desktop application for a volunteer and donation network (group project, INFO 5100): a four-level network, enterprise, organization and user hierarchy with role-specific screens, Twilio SMS notifications and JavaFaker seed data. Data is held in memory.',
      tech: ['Java 21', 'Swing', 'Maven', 'Twilio SDK', 'JavaFaker'],
      // TODO(me): add what I personally built
      link: 'https://github.com/Rugved-142/Community_Connect',
      icon: '🤝'
    },
    {
      title: 'Selenium Test Automation',
      description: 'End-to-end test automation (group project) for Northeastern web applications with Selenium WebDriver, TestNG and the Page Object Model, Excel-driven data and ExtentReports. Sign-in scenarios wait for a manual Duo approval.',
      details: 'End-to-end test automation framework for Northeastern University web applications using Selenium WebDriver, TestNG and Maven. It follows the Page Object Model, supports data-driven testing from Excel, and generates HTML reports with ExtentReports. Sign-in scenarios wait for a manual Duo approval. Group project.',
      tech: ['Java 11', 'Selenium WebDriver', 'TestNG', 'Maven', 'Apache POI', 'ExtentReports'],
      link: 'https://github.com/Rugved-142/Group2-selenium-automation-project',
      icon: '🧪'
    },
    {
      title: 'Smart Waste Classification System',
      description: 'Image classifier for waste categories using a CNN (MobileNetV2), with a Flask API and a Streamlit UI.',
      details: 'Computer vision pipeline for waste classification with model training, prediction API, and Streamlit interface for fast interactive demos.',
      tech: ['Python', 'TensorFlow', 'Flask', 'Streamlit', 'OpenCV'],
      // TODO(me): re-add accuracy once I verify it in the notebook
      link: 'https://github.com/Rugved-142/Smart-Waste-Management-Recycling-System',
      icon: '🧠'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-carousel-container">
        <button className="scroll-button scroll-left" onClick={() => scroll('left')} disabled={isScrolling}>
          ← Prev
        </button>
        <motion.div
          className="projects-carousel"
          ref={scrollContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.button
              key={index}
              type="button"
              className="project-card"
              variants={cardVariants}
              whileHover={{
                y: -15,
                boxShadow: '0 25px 50px rgba(0, 212, 255, 0.3)',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-icon">{project.icon}</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-card-actions">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-left"
                    onClick={(event) => event.stopPropagation()}
                  >
                    GitHub →
                  </a>
                  <span className="project-link project-link-right">Click for details →</span>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
        <button className="scroll-button scroll-right" onClick={() => scroll('right')} disabled={isScrolling}>
          Next →
        </button>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(event) => event.stopPropagation()}
            >
              <button className="project-modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details">
                ×
              </button>
              <div className="project-modal-icon">{selectedProject.icon}</div>
              <h3>{selectedProject.title}</h3>
              <p className="project-modal-description">{selectedProject.details || selectedProject.description}</p>
              <div className="project-modal-tech">
                {selectedProject.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="project-modal-link">
                View on GitHub →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
