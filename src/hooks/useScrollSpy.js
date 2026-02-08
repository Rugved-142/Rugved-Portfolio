import { useEffect } from 'react'

function useScrollSpy() {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    let currentSection = ''
    
    // Throttle function to limit updates
    let ticking = false
    
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3
      
      let foundSection = null
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionBottom = sectionTop + sectionHeight
        
        // Check if scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          foundSection = section
        }
      })
      
      // If no section found, find the closest one
      if (!foundSection) {
        let minDistance = Infinity
        sections.forEach((section) => {
          const sectionTop = section.offsetTop
          const distance = Math.abs(scrollPosition - sectionTop)
          if (distance < minDistance) {
            minDistance = distance
            foundSection = section
          }
        })
      }
      
      if (foundSection) {
        const sectionId = foundSection.getAttribute('id')
        if (sectionId && currentSection !== sectionId) {
          currentSection = sectionId
          window.history.replaceState(null, '', `#${sectionId}`)
          
          // Dispatch custom event for navbar highlighting
          window.dispatchEvent(new CustomEvent('sectionChange', { 
            detail: { sectionId } 
          }))
        }
      }
      
      ticking = false
    }
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection)
        ticking = true
      }
    }
    
    // Initial update
    updateActiveSection()
    
    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

export default useScrollSpy
