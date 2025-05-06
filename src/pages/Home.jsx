import { motion } from 'framer-motion';
import './Home.css';
import NeuralNetworkCanvas from '../components/NeuralNetwork';

const Home = () => {
  return (
    <div className="fullpage-container">
      {/* Neural Network Background */}
      <NeuralNetworkCanvas />
      
      {/* Hero Section */}
      <div className="fullpage-hero">
        <div className="hero-container">
          {/* Text Content - Left Side */}
          <motion.div 
            className="text-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              <span className="greeting">Hi, I'm</span>
              <br />
              <span className="name">Shrie</span>
              <span className="name">Varshini</span>
            </h1>
            <p className="subtitle">
              I get <span className="highlight">OBSESSED</span> with whatever I am learning - right now, it's all about 
              <span className="highlight"> AI and ML</span>
            </p>
            <div className="cta-buttons">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/projects"
                className="primary-btn"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="secondary-btn"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div 
            className="image-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="/1.jpg" alt="Shrie Varshini" />
          </motion.div>
        </div>
      </div>

      {/* About Me Section - Simplified */}
      <section className="about-section">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            <span className="highlight">WHO</span> AM I
          </h2>
          <div className="about-text">
            <p>
            Hey! I’m Shrie Varshini—someone who somehow manages to be techy, talkative, and totally into tinkering with weird little ideas that sometimes turn into actual projects.

I’m that person who gets excited over Python scripts, neural networks, and flow sensors—but also loves speaking on stage, helping friends beat stage fear, and slipping obscure English words into casual conversations (yes, I do that).

           </p>
            <p>
            Right now, I’m diving into the deep waters of <span className="highlight">AI, image encryption, and IoT</span>, and loving every second of it. 
            My current obsession? Encrypting images using chaotic maps and then making them unrecognizable (in a good way) 
            using CycleGAN—because why not bring some chaos into cybersecurity? I’m also working on real-world problems—like 
            making hospital admissions and bed availability smoother using smart models, and building a Smart Water Grid using MATLAB. 
            These aren’t just projects for me; they’re puzzle pieces I’m trying to fit into a better future. When I’m not coding 
            (and sneaking Raspberry Pi experiments into them), you’ll probably find me reading, shooting hoops, or going full-on creative 
            with color palettes for my website. Who says you can’t have a bold, neon-popping portfolio and be serious about tech? I’m part 
            of the CAMHI club, have dipped my toes into hackathons, and I don’t shy away from speaking up, leading teams, 
            or figuring things out on the fly. I’ve also discovered that I love building stuff—from webpages to workflows—and 
            I’m always chasing that "Aha!" moment when things just click.
            </p>
            <p>
            When I’m not coding (and sneaking Raspberry Pi experiments into them), you’ll probably find me reading, shooting hoops, 
            or going full-on creative with color palettes for my website. Who says you can’t have a bold, neon-popping portfolio and be 
            serious about tech? I’m part of the CAMHI club, have dipped my toes into hackathons, and I don’t shy away from speaking up, 
            leading teams, or figuring things out on the fly. I’ve also discovered that I love building stuff—from webpages to workflows—and 
            I’m always chasing that "Aha!" moment when things just click.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;