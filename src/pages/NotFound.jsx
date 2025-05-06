import PageLayout from '../components/PageLayout'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <PageLayout>
      <section className="not-found-section">
        <div className="container">
          <motion.div 
            className="not-found-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you're looking for doesn't exist or has been moved.</p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="home-link">
                Return to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}

export default NotFound