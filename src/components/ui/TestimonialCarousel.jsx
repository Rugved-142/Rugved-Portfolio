import { useState } from 'react'
import { motion } from 'framer-motion'
import './TestimonialCarousel.css'

function TestimonialCarousel({ testimonials, showArrows = true, showDots = true, className = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [exitX, setExitX] = useState(0)

  const handleDragEnd = (event, info) => {
    if (Math.abs(info.offset.x) > 100) {
      setExitX(info.offset.x)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setExitX(0)
      }, 200)
    }
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className={`testimonial-carousel ${className}`}>
      <div className="carousel-container">
        {testimonials.map((testimonial, index) => {
          const isCurrentCard = index === currentIndex
          const isPrevCard = index === (currentIndex + 1) % testimonials.length
          const isNextCard = index === (currentIndex + 2) % testimonials.length

          if (!isCurrentCard && !isPrevCard && !isNextCard) return null

          return (
            <motion.div
              key={testimonial.id || index}
              className="carousel-card"
              style={{
                zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1,
              }}
              drag={isCurrentCard ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={isCurrentCard ? handleDragEnd : undefined}
              initial={{
                scale: 0.95,
                opacity: 0,
                y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                rotate: isCurrentCard ? 0 : isPrevCard ? -2 : -4,
              }}
              animate={{
                scale: isCurrentCard ? 1 : 0.95,
                opacity: isCurrentCard ? 1 : isPrevCard ? 0.6 : 0.3,
                x: isCurrentCard ? exitX : 0,
                y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                rotate: isCurrentCard ? exitX / 20 : isPrevCard ? -2 : -4,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              {showArrows && isCurrentCard && (
                <div className="carousel-arrows">
                  <span className="arrow-left" onClick={handlePrev}>
                    ←
                  </span>
                  <span className="arrow-right" onClick={handleNext}>
                    →
                  </span>
                </div>
              )}

              <div className="card-content">
                <h3 className="card-name">{testimonial.name}</h3>
                {testimonial.role && <p className="card-role">{testimonial.role}</p>}
                <div className="quote-mark">❝</div>
                <p className="card-description">{testimonial.description || testimonial.text}</p>
              </div>
            </motion.div>
          )
        })}
        {showDots && (
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentIndex ? 'dot-active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default TestimonialCarousel
