function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-content">
        <p className="section-eyebrow">Computer & Systems Engineer</p>
        <h1>Jaden Tompkins</h1>
        <p className="hero-context">
          M.S. Computer & Systems Engineering, RPI.
          <br />
          B.S. Dual in Computer & Systems Engineering and Computer Science, RPI.
          <br />
          Minor in Cognitive Science for Artificial Intelligence.
        </p>
        <div className="hero-actions" aria-label="Primary links">
          <a href="https://github.com/DrJDen31">GitHub</a>
          <a href="https://www.linkedin.com/in/jaden-tompkins-074b17265/">
            LinkedIn
          </a>
          <a href="mailto:jadentompkins31@gmail.com">Email</a>
        </div>
      </div>
      <aside className="hero-snapshot" aria-label="Technical focus">
        <div>
          <span>01</span>
          <p>
            Embedded firmware, systems tooling, and hardware/software
            integration.
          </p>
        </div>
        <div>
          <span>02</span>
          <p>
            Go, Python, C/C++, SystemVerilog, React, and observability tools.
          </p>
        </div>
        <div>
          <span>03</span>
          <p>
            Game systems, graphics reports, cognitive modeling, and class
            projects.
          </p>
        </div>
      </aside>
    </section>
  );
}

export default Hero;
