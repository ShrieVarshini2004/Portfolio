import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p className="project-description">{project.shortDescription}</p>
        <div className="project-tags">
          {project.technologies.map((tech, i) => (
            <span key={i} className="project-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="live-link">
              Live Demo
            </a>
          )}
          <Link to={`/projects/${project.id}`} className="details-link">
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubUrl: PropTypes.string,
    liveUrl: PropTypes.string
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default ProjectCard;