import { useEffect } from 'react'

function useScrollSpy() {
  useEffect(() => {
    console.log('ScrollSpy initialized')
    
    // Set initial hash if none exists
    if (!window.location.hash) {
      console.log('Setting initial hash to #home')
      window.history.replaceState(null, '', '#home')
      window.dispatchEvent(new CustomEvent('sectionChange', { 
        detail: { sectionId: 'home' } 
      }))
    }

    const sections = document.querySelectorAll('section[id]')
    console.log(`Found ${sections.length} sections:`, Array.from(sections).map(s => s.id))
    
    if (sections.length === 0) {
      console.warn('No sections found!')
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
          console.log(`Section "${sectionId}" is now visible`)
          
          if (sectionId && sectionId !== currentSectionId) {
            console.log(`Changing active section from "${currentSectionId}" to "${sectionId}"`)
            currentSectionId = sectionId
            
            // Update URL
            window.history.replaceState(null, '', `#${sectionId}`)
            console.log('URL updated to:', window.location.href)
            
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
      console.log(`Observing section: ${section.id}`)
      observer.observe(section)
    })

    // Cleanup
    return () => {
      console.log('ScrollSpy cleanup')
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])
}

export default useScrollSpy
