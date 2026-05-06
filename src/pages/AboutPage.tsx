import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";

function AboutPage() {
  return (
    <main className="site-shell page-shell">
      <SectionHeader
        eyebrow="About"
        title="Jaden Tompkins"
        description="Computer and systems engineer focused on embedded software, systems tooling, hardware-aware development, and interactive technical prototypes."
      />
      <div className="about-layout">
        <section className="about-panel">
          <h3>Current Status</h3>
          <p>
            Finishing an M.S. in Computer & Systems Engineering at RPI in May
            2026 and preparing to start a full-time engineering role.
          </p>
          <p>
            Recent work includes firmware-adjacent tooling at Western Digital,
            Python automation at Moog Construction, and ongoing Unreal Engine
            systems experiments.
          </p>
        </section>
        <section className="about-panel">
          <h3>Contact</h3>
          <div className="contact-links">
            <a href="mailto:jadentompkins31@gmail.com">Email</a>
            <a href="https://github.com/DrJDen31">GitHub</a>
            <a href="https://www.linkedin.com/in/jaden-tompkins-074b17265/">
              LinkedIn
            </a>
          </div>
        </section>
        <section className="about-panel about-panel-wide">
          <h3>What This Site Contains</h3>
          <div className="site-map-links">
            <Link to="/projects">Searchable project archive</Link>
            <Link to="/collections">Collection hub</Link>
            <Link to="/courses-overview">College coursework overview</Link>
            <Link to="/unreal-engine/overview">
              Unreal systems and lab notes
            </Link>
            <Link to="/embedded-systems/overview">
              Embedded and hardware projects
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutPage;
