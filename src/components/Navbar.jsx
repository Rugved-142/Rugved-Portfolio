import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home'
      setActiveSection(hash)
    }
    
    const handleSectionChange = (event) => {
      setActiveSection(event.detail.sectionId)
    }
    
    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('sectionChange', handleSectionChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('sectionChange', handleSectionChange)
    }
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">Rugved Gundawar</div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
          <li><a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
          <li><a href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''}>Testimonials</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
