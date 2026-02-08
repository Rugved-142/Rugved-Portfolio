import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ShootingStars from './components/ui/ShootingStars'
import StarryBackground from './components/ui/StarryBackground'
import SpotlightCursor from './components/ui/SpotlightCursor'
import useScrollSpy from './hooks/useScrollSpy'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useScrollSpy()

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000)
  }, [])

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <div className="App">
      <StarryBackground />
      <ShootingStars
        starColor="#00d4ff"
        trailColor="#00ff88"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#00ff88"
        trailColor="#00d4ff"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <SpotlightCursor 
        config={{
          radius: 350,
          brightness: 0.15,
          color: '#00d4ff'
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
