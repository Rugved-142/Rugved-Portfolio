import { motion } from 'framer-motion'
import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      category: "Languages & Frameworks",
      skills: ['Java', 'Spring Boot', 'JavaScript', 'Node.js', 'Python', 'TypeScript', 'React', 'Express.js']
    },
    {
      category: "Cloud & DevOps",
      skills: ['AWS (EC2, S3, RDS, SNS, VPC)', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CI/CD']
    },
    {
      category: "Databases & Caching",
      skills: ['Redis', 'PostgreSQL', 'MySQL', 'MongoDB', 'AWS RDS']
    },
    {
      category: "Security & Architecture",
      skills: ['OAuth2', 'SAML', 'JWT', 'REST APIs', 'Microservices', 'Circuit Breaker', 'Rate Limiting']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <motion.div 
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-category"
              variants={categoryVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i} 
                    className="skill-tag"
                    variants={tagVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      boxShadow: '0 10px 25px rgba(0, 212, 255, 0.4)',
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="skill-name">{skill}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
