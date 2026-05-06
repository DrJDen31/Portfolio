import ProjectGrid from "../components/ProjectGrid";
import SectionHeader from "../components/SectionHeader";
import { projects, type ProjectCategory } from "../content/projects";

type CategoryOverviewPageProps = {
  category: ProjectCategory;
  eyebrow: string;
  title: string;
  description: string;
};

function CategoryOverviewPage({
  category,
  eyebrow,
  title,
  description,
}: CategoryOverviewPageProps) {
  const categoryProjects = projects.filter((project) => project.category === category);

  return (
    <main className="site-shell page-shell">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      {categoryProjects.length > 0 ? (
        <ProjectGrid projects={categoryProjects} />
      ) : (
        <div className="empty-state">
          <h3>Nothing public here yet</h3>
          <p>
            This collection is reserved for future released products, writeups,
            and deeper documentation.
          </p>
        </div>
      )}
    </main>
  );
}

export default CategoryOverviewPage;
