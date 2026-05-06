import { Link } from "react-router-dom";
import Hero from "../components/HomePage/Hero";
import NowPanel from "../components/HomePage/NowPanel";
import ProjectGrid from "../components/ProjectGrid";
import SectionHeader from "../components/SectionHeader";
import { featuredProjects, projectCategories, projects } from "../content/projects";

function Home() {
  const archivePreview = projectCategories
    .map((category) => ({
      category,
      projects: projects.filter((project) => project.category === category),
    }))
    .filter((group) => group.projects.length > 0);

  return (
    <main className="site-shell">
      <Hero />
      <NowPanel />

      <section className="content-section" id="featured">
        <SectionHeader
          eyebrow="Featured Work"
          title="Selected projects"
          description="Firmware tooling, hardware design, graphics, embedded games, and ongoing Unreal Engine systems."
        />
        <ProjectGrid projects={featuredProjects} />
      </section>

      <section className="content-section" id="collections">
        <div className="section-header-row">
          <SectionHeader
            eyebrow="Collections"
            title="Browse the archive"
            description="Projects, coursework, reports, work experience, Unreal systems, and future released products each have a place."
          />
          <Link className="secondary-link" to="/collections">
            View collections
          </Link>
        </div>
        <div className="archive-groups">
          {archivePreview.map((group) => (
            <article className="archive-group" key={group.category}>
              <h3>{group.category}</h3>
              <ul>
                {group.projects.slice(0, 4).map((project) => (
                  <li key={project.slug}>
                    <Link to={project.route}>{project.title}</Link>
                    <span>{project.status}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section skills-section" id="about">
        <SectionHeader
          eyebrow="Strengths"
          title="Technical range"
        />
        <div className="skill-grid">
          <article>
            <h3>Embedded & Systems</h3>
            <p>
              C/C++, Go, Python, SystemVerilog, UART, SPI, CAN, microcontrollers,
              computer architecture, and hardware-facing debugging.
            </p>
          </article>
          <article>
            <h3>Tooling & Observability</h3>
            <p>
              Repository analysis, automation, Docker, MySQL, Grafana, Loki,
              dashboards, logging, and workflow-focused engineering tools.
            </p>
          </article>
          <article>
            <h3>Interactive Systems</h3>
            <p>
              Unreal Engine 5, C++, Blueprint, gameplay systems, AI behavior,
              simulation, and technical prototypes for research or teaching.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;
