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
    // Initialize from current hash
    const initialHash = window.location.hash.slice(1) || 'home'
    console.log('Navbar initialized with section:', initialHash)
    setActiveSection(initialHash)

    // Listen to section changes from scroll spy
    const handleSectionChange = (event) => {
      console.log('Navbar received sectionChange event:', event.detail.sectionId)
      setActiveSection(event.detail.sectionId)
    }
    
    // Listen to hash changes (from manual navigation or nav clicks)
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home'
      console.log('Navbar received hashchange event:', hash)
      setActiveSection(hash)
    }
    
    window.addEventListener('sectionChange', handleSectionChange)
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('sectionChange', handleSectionChange)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const handleNavClick = () => {
    setMenuOpen(false) // Close mobile menu on click
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">Rugved Gundawar</div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={handleNavClick}>Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={handleNavClick}>About</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={handleNavClick}>Skills</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={handleNavClick}>Projects</a></li>
          <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={handleNavClick}>Experience</a></li>
          <li><a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={handleNavClick}>Education</a></li>
          <li><a href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''} onClick={handleNavClick}>Testimonials</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={handleNavClick}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
