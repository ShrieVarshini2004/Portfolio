import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import ProjectDetails from './pages/ProjectDetails'
import NotFound from './pages/NotFound'
import TedxExperience from './components/TedxExperience'
import NeuralNetworkBackground from './components/NeuralNetwork'
import './App.css'

function App() {
  return (
    <>
      <NeuralNetworkBackground />
      <div className="content">
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/tedx-experience" element={<TedxExperience />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App