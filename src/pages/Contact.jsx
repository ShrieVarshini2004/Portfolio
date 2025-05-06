import PageLayout from '../components/PageLayout'
import { motion } from 'framer-motion'
import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      setSubmitMessage('Thank you for your message! I will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    }, 1500)
  }

  return (
    <PageLayout>
      <section className="contact-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          
          <div className="contact-container">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3>Contact Information</h3>
              <p>Feel free to reach out through any of these channels:</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <span>📧</span>
                  <a href="mailto:shrievarshini.2004@gmail.com">shrievarshini.2004@gmail.com</a>
                </div>
                <div className="contact-method">
                  <span>📱</span>
                  <a href="tel:+919597724562">+91 9597724562</a>
                </div>
                <div className="contact-method">
                  <span>🔗</span>
                  <a href="https://linkedin.com/in/shrievarshini" target="_blank" rel="noopener noreferrer">linkedin.com/in/shrievarshini</a>
                </div>
              </div>
            </motion.div>
            
            <motion.form 
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <motion.button 
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              {submitMessage && <p className="submit-message">{submitMessage}</p>}
            </motion.form>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Contact