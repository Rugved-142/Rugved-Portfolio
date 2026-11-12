import { useEffect } from 'react'

function useScrollSpy(enabled = true) {
  useEffect(() => {
    if (!enabled) return

    // Set initial hash if none exists
    if (!window.location.hash) {
      window.history.replaceState(null, '', '#home')
      window.dispatchEvent(new CustomEvent('sectionChange', { 
        detail: { sectionId: 'home' } 
      }))
    }

    const sections = document.querySelectorAll('section[id]')
    
    if (sections.length === 0) {
      return
    }

    let currentSectionId = window.location.hash.slice(1) || 'home'

    // Use Intersection Observer for more reliable detection
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is 20% from top
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id')
          
          if (sectionId && sectionId !== currentSectionId) {
            currentSectionId = sectionId
            
            // Update URL
            window.history.replaceState(null, '', `#${sectionId}`)
            
            // Notify navbar
            window.dispatchEvent(new CustomEvent('sectionChange', { 
              detail: { sectionId } 
            }))
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    sections.forEach((section) => {
      observer.observe(section)
    })

    // Cleanup
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [enabled])
}

export default useScrollSpy
