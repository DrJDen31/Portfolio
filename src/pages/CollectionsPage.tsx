import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";

const collections = [
  {
    title: "Projects & Case Studies",
    text: "Outcome-focused writeups, reports, and build notes.",
    to: "/projects",
  },
  {
    title: "Coursework & Schedule",
    text: "Class history, technical topics, and course-linked projects.",
    to: "/courses-overview",
  },
  {
    title: "Work Experience",
    text: "Internships, tutoring, engineering tools, and team context.",
    to: "/work-experience/overview",
  },
  {
    title: "Game / Unreal Systems",
    text: "UE5 systems, prototypes, gameplay mechanics, and wiki-style docs.",
    to: "/unreal-engine/overview",
  },
  {
    title: "Embedded & Hardware",
    text: "Firmware, microcontrollers, computer architecture, and hardware interfaces.",
    to: "/embedded-systems/overview",
  },
  {
    title: "Research & Reports",
    text: "Graphics, cognitive modeling, and report-backed class projects.",
    to: "/projects",
  },
  {
    title: "Product / Released Work",
    text: "A home for future shipped products, public docs, changelogs, and demos.",
    to: "/projects",
  },
];

function CollectionsPage() {
  return (
    <main className="site-shell page-shell">
      <SectionHeader
        eyebrow="Collections"
        title="Browse by format"
        description="Different work deserves different presentation: some projects are reports, some are living docs, and some will become product pages."
      />
      <div className="collection-grid">
        {collections.map((collection) => (
          <Link className="collection-card" to={collection.to} key={collection.title}>
            <h3>{collection.title}</h3>
            <p>{collection.text}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default CollectionsPage;
