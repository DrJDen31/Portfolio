import { projectTypeLabels, type ProjectStatus, type ProjectType } from "../content/projects";

type ProjectStatusBadgeProps = {
  status: ProjectStatus;
};

const statusClassNames: Record<ProjectStatus, string> = {
  Featured: "status-badge status-badge-featured",
  Archive: "status-badge status-badge-archive",
  "Lab Notes": "status-badge status-badge-lab",
};

function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
  return <span className={statusClassNames[status]}>{status}</span>;
}

export default ProjectStatusBadge;

type ProjectTypeBadgeProps = {
  type: ProjectType;
};

export function ProjectTypeBadge({ type }: ProjectTypeBadgeProps) {
  return <span className="status-badge status-badge-type">{projectTypeLabels[type]}</span>;
}
