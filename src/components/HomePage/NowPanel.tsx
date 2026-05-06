function NowPanel() {
  return (
    <section className="now-panel" aria-label="Now and recently">
      <div>
        <p className="section-eyebrow">Now</p>
        <h2>Finished at RPI, on to Western Digital</h2>
      </div>
      <div className="now-list">
        <article>
          <h3>RPI Graduate Year</h3>
          <p>
            Computer architecture, VLSI design, network programming, numerical
            computing, and a master's project.
          </p>
        </article>
        <article>
          <h3>Western Digital</h3>
          <p>
            Continuing a Western Digital internship focused on Go tooling,
            repository analysis, dashboards, and production-style logging as a
            full time engineer.
          </p>
        </article>
      </div>
    </section>
  );
}

export default NowPanel;
