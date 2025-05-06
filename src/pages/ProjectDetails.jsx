import { useParams } from 'react-router-dom'
import { projectsData } from '../data/projects'
import PageLayout from '../components/PageLayout'
import './ProjectDetails.css'
import { FaShieldAlt, FaMicrochip, FaBrain, FaLock } from 'react-icons/fa'
import { SiTensorflow, SiRaspberrypi } from 'react-icons/si'

const ProjectDetails = () => {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === id)

  if (!project) {
    return <div>Project not found</div>
  }

  // Features specific to medical encryption project
  const projectFeatures = [
    { icon: <FaShieldAlt />, title: "Hybrid Encryption", description: "Combines chaotic maps with deep learning for robust security" },
    { icon: <SiTensorflow />, title: "CycleGAN Integration", description: "Uses adversarial networks for additional security layer" },
    { icon: <SiRaspberrypi />, title: "Edge Computing", description: "Optimized for Raspberry Pi deployment in clinical settings" },
    { icon: <FaBrain />, title: "High Entropy", description: "Achieves entropy >7.85 for near-perfect randomness" },
    { icon: <FaLock />, title: "Deterministic Recovery", description: "Ensures accurate decryption with proper keys" },
    { icon: <FaMicrochip />, title: "Fast Processing", description: "Encryption times under 0.2s for 512×512 images" }
  ]

  return (
    <PageLayout>
      <section className="project-details">
        <div className="container">
          <div className="project-header">
            <h1>{project.title}</h1>
            <p className="project-subtitle">Secure Medical Image Encryption Using Hybrid Chaotic Maps and CycleGAN</p>
            <div className="project-meta">
              <span>{project.date}</span>
              <span>{project.category}</span>
              <span>Team: {project.team || 'Solo'}</span>
            </div>
          </div>
          
          <div className="project-content">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="image-caption">Encryption process visualization showing original, chaotic-encrypted, and CycleGAN-transformed images</div>
            </div>
            
            <div className="project-description">
              <h3>Project Overview</h3>
              <p>{project.description}</p>
              
              <h3>Technical Approach</h3>
              <p>This framework combines two-stage encryption: first using Henon-Tent chaotic maps for pixel permutation and diffusion, followed by CycleGAN transformation to create an adversarial representation. The hybrid approach ensures both cryptographic strength and practical deployability on edge devices like Raspberry Pi.</p>
              
              <div className="project-features">
                {projectFeatures.map((feature, index) => (
                  <div key={index} className="feature-card">
                    <div className="feature-icon">{feature.icon}</div>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3>Technologies Used</h3>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              
              <div className="project-results">
                <h3>Key Results</h3>
                <ul>
                  <li>Near-ideal statistical security with entropy {'>'}7.85</li>
                  <li>Strong resistance to differential attacks (NPCR 99.6%, UACI 33%)</li>
                  <li>Raspberry Pi 4 implementation with encryption times under 0.2s</li>
                  <li>Preserved diagnostic quality post-decryption (SSIM 0.95)</li>
                </ul>
              </div>
              
              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} className="live-demo-btn" target="_blank" rel="noopener noreferrer">
                    View Demo
                  </a>
                )}
                {project.codeUrl && (
                  <a href={project.codeUrl} className="source-code-btn" target="_blank" rel="noopener noreferrer">
                    GitHub Repository
                  </a>
                )}
                {project.paperUrl && (
                  <a href={project.paperUrl} className="paper-link-btn" target="_blank" rel="noopener noreferrer">
                    Research Paper
                  </a>
                )}
              </div>
            </div>
          </div>
          
          <a href="/projects" className="back-to-projects">
            ← Back to Projects
          </a>
        </div>
      </section>
    </PageLayout>
  )
}

export default ProjectDetails