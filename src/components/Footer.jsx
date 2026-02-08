import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Rugved Gundawar. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/Rugved-142" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/rugved-gundawar/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://medium.com/@gundawar.r" target="_blank" rel="noopener noreferrer">Medium</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
