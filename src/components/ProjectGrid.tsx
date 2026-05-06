import type { Project } from "../content/projects";
import ProjectCard from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
  compact?: boolean;
};

function ProjectGrid({ projects, compact = false }: ProjectGridProps) {
  return (
    <div className={compact ? "project-grid project-grid-compact" : "project-grid"}>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} compact={compact} />
      ))}
    </div>
  );
}

export default ProjectGrid;
