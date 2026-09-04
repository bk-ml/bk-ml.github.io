import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkSection from './components/work';
import InstagramCaseStudy from './components/InstagramCaseStudy';
import ExperienceSection from './components/experience';
import ProjectSection from './components/projects';
import './App.css';
import ExpertiseSection from './components/expertise';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instagram-case-study" element={<InstagramCaseStudy />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="container">
      {/* NAV */}
      <nav className="nav">
        <div className="navLeft">
          <div className="logo">Bhawna Kochhar</div>
          <div className="role">Senior Software Engineer</div>
        </div>

        <div className="navRight">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="cta">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO (cleaned + structured) */}
      <section className="hero">
        <div className="heroTop">
          <h1>Senior Software Engineer</h1>

          <h1>
            Building <span className="highlight">scalable</span>,{' '}
            <span className="highlight">reliable</span>, and{' '}
            <span className="highlight">maintainable systems</span>
          </h1>
        </div>

        <h2>Full Stack • System Design • Distributed Systems • AI Systems</h2>

        <p className="heroDesc">
          I design and build end-to-end products — from scalable backend systems
          and APIs to responsive frontend interfaces — with a focus on
          performance, reliability, and clean architecture.
        </p>
      </section>

      {/* WORK */}
      <section id="work" className="section">
        <WorkSection />
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="section">
        <ExpertiseSection />
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <ExperienceSection />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <ProjectSection />
      </section>

      {/* RESUME */}
      <section id="resume" className="section">
        <h2 className="sectionTitle">Resume</h2>

        <a
          className="btn"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2 className="sectionTitle">Contact</h2>

        <p>
          Email:{' '}
          <a href="mailto:bhawnakochhar2@gmail.com">bhawnakochhar2@gmail.com</a>
        </p>

        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/bhawnakochhar"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.linkedin.com/in/bhawnakochhar
          </a>
        </p>

        <p>
          GitHub:{' '}
          <a
            href="https://github.com/bk-ml"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/bk-ml
          </a>
        </p>
      </section>
    </div>
  );
}
