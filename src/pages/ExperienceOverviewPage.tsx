import ProjectGrid from "../components/ProjectGrid";
import SectionHeader from "../components/SectionHeader";
import { projectCategories, projects } from "../content/projects";

function ExperienceOverview() {
  return (
    <main className="site-shell page-shell">
      <SectionHeader
        eyebrow="Project Archive"
        title="Projects, lab notes, and work experience"
        description="Browse the full set of public writeups by the kind of engineering experience each project demonstrates."
      />
      <div className="project-archive-stack">
        {projectCategories
          .map((category) => ({
            category,
            projects: projects.filter((project) => project.category === category),
          }))
          .filter((group) => group.projects.length > 0)
          .map((group) => (
            <section key={group.category} className="archive-section">
              <SectionHeader title={group.category} />
              <ProjectGrid projects={group.projects} compact />
            </section>
          ))}
      </div>
    </main>
  );
}

export default ExperienceOverview;
