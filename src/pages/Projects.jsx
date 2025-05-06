import PageLayout from '../components/PageLayout'
import ProjectCard from '../components/ProjectCard'
import { projectsData } from '../data/projects'
import './Projects.css'

// Import skill icons
import { 
  FaReact, 
  FaJs, 
  FaCss3Alt, 
  FaPython,
  FaGitAlt,
  FaShieldAlt,
  FaMicrochip
} from 'react-icons/fa'
import { SiTensorflow, SiRaspberrypi } from 'react-icons/si'

const Projects = () => {
  // Skills data with skills relevant to your medical encryption project
  const skills = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#2965F1' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00' },
    { name: 'Cybersecurity', icon: <FaShieldAlt />, color: '#4CAF50' },
    { name: 'Raspberry Pi', icon: <SiRaspberrypi />, color: '#C51A4A' },
    { name: 'Embedded Systems', icon: <FaMicrochip />, color: '#2196F3' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' }
  ]

  // Mini projects data focused on security/encryption
  const miniProjectsData = [
    {
      title: "Chaotic Map Visualizer",
      category: "Encryption Tool",
      description: "Interactive visualization of Henon and Tent chaotic maps used in image encryption.",
      techStack: ["Python", "Matplotlib", "NumPy"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Image Encryption Demo",
      category: "Web App",
      description: "Simple web-based demo of chaotic map pixel permutation for images.",
      techStack: ["JavaScript", "HTML5 Canvas"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Raspberry Pi Security Dashboard",
      category: "IoT Application",
      description: "Monitoring dashboard for encrypted medical image transmission on edge devices.",
      techStack: ["Python", "Flask", "RPi"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "GAN Image Obfuscation",
      category: "Deep Learning",
      description: "Basic implementation of CycleGAN for image transformation experiments.",
      techStack: ["Python", "TensorFlow", "Keras"],
      liveLink: "#",
      codeLink: "#"
    }
  ]

  return (
    <PageLayout>
      <section className="projects-section">
        <div className="container">
          {/* Skills Section */}
          <div className="skills-section">
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">Technologies I've worked with in my projects</p>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Main Projects Grid */}
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
          
          {/* Mini Projects Section */}
          <div className="mini-projects-section">
            <h2 className="section-title">Mini Projects</h2>
            <p className="section-subtitle">Smaller projects </p>
            <div className="mini-projects-grid">
              {miniProjectsData.map((project, index) => (
                <div key={index} className="mini-project-card">
                  <h3 className="mini-project-title">{project.title}</h3>
                  <p className="mini-project-category">{project.category}</p>
                  <p className="mini-project-description">{project.description}</p>
                  <div className="mini-project-tech">
                    {project.techStack.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                  <div className="mini-project-links">
                    <a href={project.liveLink} className="mini-project-link" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                    <a href={project.codeLink} className="mini-project-link" target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Projects