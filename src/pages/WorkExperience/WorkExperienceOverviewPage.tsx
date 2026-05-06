import ProjectGrid from "../../components/ProjectGrid";
import SectionHeader from "../../components/SectionHeader";
import { projects } from "../../content/projects";

function WorkExperienceOverviewPage() {
  const workProjects = projects.filter((project) => project.category === "Work");

  return (
    <main className="site-shell page-shell">
      <SectionHeader
        eyebrow="Experience"
        title="Work experience"
        description="Roles and teaching work framed by the technical systems, tools, and communication involved."
      />
      <ProjectGrid projects={workProjects} />
    </main>
  );
}

export default WorkExperienceOverviewPage;
