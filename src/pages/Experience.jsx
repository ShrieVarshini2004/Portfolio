import PageLayout from '../components/PageLayout'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Experience.css'

const Experience = () => {
  const professionalExperiences = [
    {
      role: "ML Intern",
      company: "Accolade Tech Solutions",
      period: "Jan 2025 - Feb 2025",
      description: "Built kidney stone detection system with X-Ray analysis",
      icon: "🧠"
    },
    {
      role: "Student Intern",
      company: "Technook & IIT Roorkee",
      period: "May 2024 - Jul 2024",
      description: "Machine Learning research intern",
      icon: "🔬"
    }
  ]

  const extracurriculars = [
    {
      role: "TEDx Organizer",
      company: "TEDxUniversityName",
      period: "2023 - 2024",
      description: "Coordinated speaker selection, venue logistics, and marketing for 300+ attendees",
      icon: "🎤",
      hasDetails: true,
      detailsPath: "/tedx-experience"
    },
    {
      role: "Basketball Team Captain",
      company: "University Team",
      period: "2022 - Present",
      description: "Led team to inter-university championships, organized training sessions",
      icon: "🏀"
    },
    {
      role: "Campus Ambassador",
      company: "IIT Kanpur (Exergy 2025)",
      period: "Nov 2024",
      description: "Represented tech fest and organized events",
      icon: "🎓"
    }
  ]

  return (
    <PageLayout>
      <section className="experience-section">
        <div className="container">
          {/* Professional Experience Section */}
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Professional Experience
          </motion.h2>
          
          <div className="timeline">
            {professionalExperiences.map((exp, index) => (
              <motion.div 
                key={`pro-${index}`}
                className="timeline-item"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="timeline-icon">{exp.icon}</div>
                <div className="timeline-content">
                  <h3>{exp.role} @ {exp.company}</h3>
                  <span className="timeline-period">{exp.period}</span>
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Extracurricular Activities Section */}
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ marginTop: "4rem" }}
          >
            Extracurricular Activities
          </motion.h2>
          
          <div className="timeline">
            {extracurriculars.map((exp, index) => (
              <motion.div 
                key={`extra-${index}`}
                className="timeline-item extracurricular"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 + 0.3 }}
              >
                <div className="timeline-icon">{exp.icon}</div>
                <div className="timeline-content">
                  <h3>{exp.role} @ {exp.company}</h3>
                  <span className="timeline-period">{exp.period}</span>
                  <p>{exp.description}</p>
                  {exp.hasDetails && (
                    <Link to={exp.detailsPath} className="details-btn">
                      View Details →
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Experience