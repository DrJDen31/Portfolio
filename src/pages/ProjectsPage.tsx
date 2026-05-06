import { useMemo, useState } from "react";
import ProjectGrid from "../components/ProjectGrid";
import SectionHeader from "../components/SectionHeader";
import {
  projectCategories,
  projects,
  projectTypeLabels,
  type ProjectCategory,
  type ProjectStatus,
} from "../content/projects";

const statusOptions: ProjectStatus[] = ["Featured", "Archive", "Lab Notes"];
const quickTags = ["C++", "Python", "Go", "UE5", "Embedded", "SystemVerilog"];

function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProjectCategory | "All">("All");
  const [status, setStatus] = useState<ProjectStatus | "All">("All");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const searchCorpus = [
        project.title,
        project.category,
        project.status,
        project.dates,
        project.summary,
        project.outcome,
        projectTypeLabels[project.type],
        ...project.tags,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery = !normalizedQuery || searchCorpus.includes(normalizedQuery);
      const matchesCategory = category === "All" || project.category === category;
      const matchesStatus = status === "All" || project.status === status;
      const matchesTag = !activeTag || project.tags.includes(activeTag);

      return matchesQuery && matchesCategory && matchesStatus && matchesTag;
    });
  }, [activeTag, category, query, status]);

  return (
    <main className="site-shell page-shell">
      <SectionHeader
        eyebrow="Projects"
        title="Find the work"
        description="Search by project, technology, category, class, status, or writeup type."
      />

      <section className="filter-panel" aria-label="Project filters">
        <label>
          <span>Search</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try Go, UE5, firmware, RISC-V..."
          />
        </label>
        <label>
          <span>Category</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value as ProjectCategory | "All")}
          >
            <option value="All">All categories</option>
            {projectCategories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Status</span>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value as ProjectStatus | "All")}
          >
            <option value="All">All statuses</option>
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </section>

      <div className="quick-filter-row" aria-label="Quick technology filters">
        {quickTags.map((tag) => (
          <button
            key={tag}
            className={activeTag === tag ? "quick-filter active" : "quick-filter"}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            type="button"
          >
            {tag}
          </button>
        ))}
      </div>

      <p className="result-count">
        {filteredProjects.length} {filteredProjects.length === 1 ? "result" : "results"}
      </p>

      {filteredProjects.length > 0 ? (
        <ProjectGrid projects={filteredProjects} />
      ) : (
        <div className="empty-state">
          <h3>No matching projects</h3>
          <p>Clear one of the filters or search for a broader technology area.</p>
        </div>
      )}
    </main>
  );
}

export default ProjectsPage;
