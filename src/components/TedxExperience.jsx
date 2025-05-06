import PageLayout from '../components/PageLayout'
import { motion } from 'framer-motion'
import './TedxExperience.css'

const TedxExperience = () => {
  const tedxEventLink = "https://www.ted.com/tedx/events/61691" // Replace with your actual TEDx event link

  return (
    <PageLayout>
      <section className="tedx-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="header-section">
              <h1 className="title">TEDxAVV Chennai Experience</h1>
              <a 
                href={tedxEventLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="official-link"
              >
                View Official Event Page ↗
              </a>
            </div>

            <div className="content-grid">
              <div className="main-content">
                <h2>My Role as Organizer</h2>
                <p>As the lead organizer for TEDxUniversityName, I coordinated all aspects of the event from speaker selection to venue logistics. Our team successfully hosted 8 inspiring speakers and attracted an audience of 100+ students and faculty members.</p>
                
                <div className="achievements">
                  <h3>Key Achievements:</h3>
                  <ul>
                    <li>Managed a team of about 50 volunteers across 6 committees</li>
                    <li>Secured sponsorship from local businesses</li>
                    <li>Designed and implemented the event marketing strategy</li>
                    <li>Licence holder fro the first TEDx event in Amrita Vishwa Vidyapeetam chennai</li>
                  </ul>
                </div>

                {/*<div className="photo-gallery">
                  <h3>Event Highlights</h3>
                  <div className="gallery-grid">
                    <div className="gallery-item placeholder">Photo 1</div>
                    <div className="gallery-item placeholder">Photo 2</div>
                    <div className="gallery-item placeholder">Photo 3</div>
                  </div>
                </div>*/}
              </div>
              <div className="sidebar">
                <div className="info-card">
                  <h3>Event Details</h3>
                  <p><strong>Date:</strong> July 4, 2025</p>
                  <p><strong>Location:</strong> University Auditorium</p>
                  <p><strong>Theme:</strong> "Shaping tomorrow's Utopia"</p>
                  <p><strong>Attendees:</strong> 100+</p>
                </div>

                <div className="skills-card">
                  <h3>Skills Developed</h3>
                  <ul>
                    <li>Event Planning & Management</li>
                    <li>Public Speaking</li>
                    <li>Team Leadership</li>
                    <li>Sponsorship Acquisition</li>
                    <li>Marketing Strategy</li>
                  </ul>
                </div>

                <div className="external-links">
                  <h3>Related Links</h3>
                  <a 
                    href={tedxEventLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    Official TEDx Event Page
                  </a>
                  <a 
                    href="https://www.ted.com/tedx"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    About TEDx Program
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}

export default TedxExperience