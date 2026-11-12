import './Testimonials.css'
import TestimonialCarousel from './ui/TestimonialCarousel'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Priyanka Bhutada',
      role: 'Software Developer',
      text: 'I had the pleasure of working with Rugved during the Chatathon competition, where we placed runner-up. Rugved showed exceptional collaboration, creative thinking, and technical insight. His clear communication, adaptability, and ability to simplify complex ideas made a huge impact on our team\'s success.'
    },
    {
      id: 2,
      name: 'Nachiket Sahare',
      role: 'UI/UX Developer',
      text: 'Working with Rugved at MiniOrange was a great experience. His backend and API security expertise stood out, but even more so is his willingness to go the extra mile—simplifying complex issues, supporting teammates, and staying calm under pressure. He\'s dependable, detail-focused, and a true team player.'
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      <TestimonialCarousel 
        testimonials={testimonials}
        showArrows={true}
        showDots={true}
      />
    </section>
  )
}

export default Testimonials
