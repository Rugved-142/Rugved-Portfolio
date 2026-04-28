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
      title: 'Big Data Indexing - Medical Plan API',
      description: 'RESTful API for managing medical insurance plans with JSON Schema validation, ETag-based conditional operations, decomposed Redis storage, and parent-child Elasticsearch indexing with RabbitMQ message queue and OAuth2 security.',
      details: 'Built a full stack indexing pipeline with decomposed Redis storage, conditional read/write flows using ETags, JSON Merge Patch support, and Elasticsearch parent-child search powered by RabbitMQ-driven async indexing. Includes Google OAuth2/JWT security and versioned REST endpoints.',
      tech: ['Java 17', 'Spring Boot 3.4', 'Redis', 'Elasticsearch', 'RabbitMQ', 'OAuth2', 'Docker', 'Maven'],
      link: 'https://github.com/Rugved-142/INFO_7255_Big_Data_Indexing',
      icon: '🔍'
    },
    {
      title: 'RateLimitX - Distributed Rate Limiting Service',
      description: 'Production-grade API rate limiter with multiple algorithms (Fixed Window, Token Bucket, Sliding Window Counter) and Circuit Breaker pattern for fault tolerance.',
      details: 'Distributed rate limiting service with Redis-backed storage, multiple algorithms, fault-tolerant request handling, and production-ready REST APIs designed for scalable traffic control.',
      tech: ['Java', 'Spring Boot', 'Redis', 'Docker', 'REST APIs', 'Gatling'],
      link: 'https://github.com/Rugved-142/RateLimitX',
      icon: '🚦'
    },
    {
      title: 'AI Phishing Detector - Chrome Extension',
      description: 'Real-time phishing detection powered by Google Gemini AI with 85% accuracy. Multi-layered analysis evaluating 20+ risk factors including SSL certificates, domain age, and suspicious forms.',
      details: 'Chrome extension that analyzes page signals and suspicious patterns with AI-assisted scoring to catch phishing attempts in real time.',
      tech: ['JavaScript', 'Node.js', 'MongoDB', 'Google Gemini API', 'Chrome Extensions'],
      link: 'https://github.com/Rugved-142/AI-Phishing-Detector',
      icon: '🛡️'
    },
    {
      title: 'AWS Cloud Infrastructure & File Service',
      description: 'Secure file management service with Terraform-provisioned AWS infrastructure. REST APIs for S3-based storage with RDS metadata and SNS integration for real-time notifications.',
      details: 'Infrastructure-as-code project with AWS services, automated provisioning, file service APIs, and notification workflows built around a production-style cloud architecture.',
      tech: ['Node.js', 'AWS (EC2, S3, RDS, SNS)', 'Terraform', 'GitHub Actions'],
      link: 'https://github.com/orgs/CSYE6225-Rugved/repositories',
      icon: '☁️'
    },
    {
      title: 'Selenium Test Automation',
      description: 'Automated end-to-end test suite for NEU web applications with Selenium WebDriver, TestNG, Maven, Page Object Model, Excel-driven data, and ExtentReports.',
      details: 'Automated testing framework built for Northeastern University web applications using Selenium WebDriver, TestNG, and Maven. It follows the Page Object Model, supports data-driven testing from Excel, generates HTML reports with ExtentReports, and includes five scenarios covering positive and negative flows such as Canvas events, Snell Library booking, dataset download validation, and academic calendar updates.',
      tech: ['Java 11', 'Selenium WebDriver', 'TestNG', 'Maven', 'Apache POI', 'ExtentReports'],
      link: '#',
      icon: '🧪'
    },
    {
      title: 'Community Connect',
      description: 'Full-stack volunteer and donor management platform for NGOs with role-based access control, donation tracking, volunteer shift assignment, and reporting dashboards.',
      details: 'Role-based platform for NGOs covering donation tracking, volunteer coordination, and dashboard reporting in a unified application.',
      tech: ['Java', 'Spring Boot', 'MySQL'],
      link: 'https://github.com/Rugved-142/Community_Connect',
      icon: '🤝'
    },
    {
      title: 'Smart Waste Classification System',
      description: 'AI-powered waste sorting using CNN (MobileNetV2) trained on 9 waste categories with 93.5% accuracy. Flask API with Streamlit UI for real-time predictions.',
      details: 'Computer vision pipeline for waste classification with model training, prediction API, and Streamlit interface for fast interactive demos.',
      tech: ['Python', 'TensorFlow', 'Flask', 'Streamlit', 'OpenCV'],
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
