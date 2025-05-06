import { motion } from 'framer-motion'
import './Footer.css'

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3>Shrie Varshini</h3>
            <p>AI/ML Engineer & Tech Enthusiast</p>
          </motion.div>
          
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </motion.div>
          
          <motion.div 
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://linkedin.com/in/shrievarshini" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/ShrieVarshini2004" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="mailto:shrievarshini.2004@gmail.com">Email</a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="footer-copyright"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p>© {new Date().getFullYear()} Shrie Varshini. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer