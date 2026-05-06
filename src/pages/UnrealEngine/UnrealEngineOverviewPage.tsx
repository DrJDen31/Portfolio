import ProjectGrid from "../../components/ProjectGrid";
import SectionHeader from "../../components/SectionHeader";
import { projects } from "../../content/projects";

function UnrealEngineOverviewPage() {
  const unrealProjects = projects.filter(
    (project) => project.category === "Graphics & Game Dev",
  );

  return (
    <main className="site-shell page-shell">
      <SectionHeader
        eyebrow="Graphics & Game Dev"
        title="Unreal Engine and interactive systems"
        description="Game projects and prototypes presented as systems design notes, class artifacts, and ongoing lab work."
      />
      <ProjectGrid projects={unrealProjects} />
    </main>
  );
}

export default UnrealEngineOverviewPage;
