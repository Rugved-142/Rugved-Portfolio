import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // Using FormSubmit.co - a free form backend service
      const response = await fetch('https://formsubmit.co/rgundawar1402@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
          _captcha: 'false'
        })
      })

      if (response.ok) {
        setStatus('success')
        alert('Message sent successfully! I will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
        // Reset status after 3 seconds
        setTimeout(() => setStatus(''), 3000)
      } else {
        setStatus('error')
        alert('Failed to send message. Please email directly at rgundawar1402@gmail.com')
        setTimeout(() => setStatus(''), 3000)
      }
    } catch (error) {
      setStatus('error')
      alert('Failed to send message. Please email directly at rgundawar1402@gmail.com')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <h3>📧 Email</h3>
            <a href="mailto:rgundawar1402@gmail.com">rgundawar1402@gmail.com</a>
          </div>
          <div className="contact-item">
            <h3>📱 Phone</h3>
            <a href="tel:+16177928614">+1 (617) 792-8614</a>
          </div>
          <div className="contact-item">
            <h3>📍 Location</h3>
            <p>Boston, MA</p>
          </div>
          <div className="social-links">
            <a href="https://github.com/Rugved-142" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/rugved-gundawar/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="https://medium.com/@gundawar.r" target="_blank" rel="noopener noreferrer" className="social-link">Medium</a>
            <a href="/Rugved_Gundawar_Resume.pdf" download className="social-link">Resume</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
