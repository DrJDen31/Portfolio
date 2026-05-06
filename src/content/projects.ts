import moogpic from "./images/IMG_7301 (1).jpg";
import troytutors from "./images/tt.png";
import wd from "./images/western-digital.png";
import iot from "./images/IoTVerifiedClockIn.jpg";
import module from "./images/Module.png";
import adlib from "./images/adlib_chase.png";
import genotype from "./images/Genotype_BP_Player3.png";
import chineseroom from "./images/ChineseRoom_lvl1.png";
import npc from "./images/npc_behavior_tree.png";
import chd from "./images/chd_lab9.png";
import snow from "./images/sparkle.png";
import cm from "./images/our_tetrachromatic.png";
import buckshot from "./images/buckshot.png";
import capstone from "./images/capstone.png";
import placeholder from "./images/flower_25.png";

export type ProjectStatus = "Featured" | "Archive" | "Lab Notes";

export type ProjectType =
  | "case-study"
  | "lab-note"
  | "wiki"
  | "product"
  | "coursework";

export type ProjectCategory =
  | "Work"
  | "Embedded & Systems"
  | "Graphics & Game Dev"
  | "Research & Modeling"
  | "Mobile & Web";

export type Project = {
  title: string;
  slug: string;
  dates: string;
  status: ProjectStatus;
  type: ProjectType;
  category: ProjectCategory;
  summary: string;
  outcome: string;
  tags: string[];
  image: string;
  route: string;
  featured?: boolean;
  externalUrl?: string;
  githubUrl?: string;
  docsUrl?: string;
  releaseStatus?: string;
};

export type ProjectIntake = {
  title: string;
  dates: string;
  status: ProjectStatus;
  type: ProjectType;
  category: ProjectCategory;
  summary: string;
  outcome: string;
  tags: string[];
  links?: {
    product?: string;
    github?: string;
    docs?: string;
    report?: string;
  };
  images?: string[];
  whatIBuilt: string;
  whatChanged: string;
  whatIsStillRough?: string;
};

export const projects: Project[] = [
  {
    title: "Western Digital Engineering Tools",
    slug: "western-digital",
    dates: "Summer 2025",
    status: "Featured",
    type: "case-study",
    category: "Work",
    summary:
      "Firmware and embedded software internship focused on repository health tooling, data pipelines, and observability.",
    outcome:
      "Improved a Go analysis tool with concurrency, persistence, MySQL reporting, Grafana dashboards, and Loki logging.",
    tags: ["Go", "Python", "Docker", "Grafana"],
    image: wd,
    route: "/work-experience/western-digital",
    featured: true,
  },
  {
    title: "Moog Construction ZQuip Tools",
    slug: "moog",
    dates: "Fall 2023",
    status: "Featured",
    type: "case-study",
    category: "Work",
    summary:
      "Engineering internship building a full stack Python application and automation tools for a construction robotics team.",
    outcome:
      "Connected software workflows to field engineering needs across Python, Bash, CODESYS, and machine data.",
    tags: ["Python", "Bash", "CODESYS"],
    image: moogpic,
    route: "/work-experience/moog",
    featured: true,
  },
  {
    title: "Module Zero",
    slug: "module-zero",
    dates: "Spring 2022 to present",
    status: "Lab Notes",
    type: "wiki",
    category: "Graphics & Game Dev",
    summary:
      "An ongoing Unreal Engine systems project exploring modular player abilities, replicated movement, and FPS mechanics.",
    outcome:
      "Documents the transition from Blueprint-heavy prototypes toward C++ and plugin-backed multiplayer systems.",
    tags: ["UE5", "C++", "Blueprint", "GAS"],
    image: module,
    route: "/unreal-engine/module-zero",
    featured: true,
    docsUrl: "https://github.com/DrJDen31/ModuleWiki/wiki",
  },
  {
    title: "RISC-V Processor Labs",
    slug: "risc-v",
    dates: "Spring 2025",
    status: "Featured",
    type: "coursework",
    category: "Embedded & Systems",
    summary:
      "Computer hardware design labs culminating in simulated RISC-V processor implementations.",
    outcome:
      "Shows hardware reasoning through datapaths, control logic, assembly, and SystemVerilog simulation.",
    tags: ["SystemVerilog", "RISC-V", "Computer Architecture"],
    image: chd,
    route: "/computer-engineering/risc-v",
    featured: true,
  },
  {
    title: "Buckshot Roulette on Microcontrollers",
    slug: "buckshot",
    dates: "Spring 2025",
    status: "Featured",
    type: "case-study",
    category: "Embedded & Systems",
    summary:
      "A two-microcontroller recreation of Buckshot Roulette for a microprocessor systems final project.",
    outcome:
      "Implemented a multiplayer embedded game using C, UART communication, display logic, and hardware constraints.",
    tags: ["C", "UART", "Microcontrollers"],
    image: buckshot,
    route: "/embedded-systems/buckshot",
    featured: true,
  },
  {
    title: "Realistic Snow Rendering",
    slug: "realistic-snow",
    dates: "Spring 2025",
    status: "Featured",
    type: "case-study",
    category: "Research & Modeling",
    summary:
      "Advanced graphics investigation into snow rendering and physical simulation with C++ and OpenGL.",
    outcome:
      "Explored volumetric bidirectional path tracing and MPM-based simulation for visual and physical snow effects.",
    tags: ["C++", "OpenGL", "Simulation"],
    image: snow,
    route: "/research/realistic-snow",
    featured: true,
  },
  {
    title: "Capstone Multiplexer Module",
    slug: "capstone",
    dates: "Fall 2024",
    status: "Archive",
    type: "coursework",
    category: "Embedded & Systems",
    summary:
      "Multidisciplinary capstone project for a multiplexer module supporting bioelectrochemical experiments.",
    outcome:
      "Good archive candidate for explaining hardware/software integration, SPI communication, and experimental constraints.",
    tags: ["C++", "SPI", "Hardware"],
    image: capstone,
    route: "/embedded-systems/capstone",
  },
  {
    title: "Verified Clock In",
    slug: "verified-clock-in",
    dates: "Fall 2024",
    status: "Archive",
    type: "case-study",
    category: "Embedded & Systems",
    summary:
      "Internet of Things final project using networked verification to support a clock-in workflow.",
    outcome:
      "Preserves IoT, Python, HTTP, and systems integration experience without making the homepage download the largest source image.",
    tags: ["Python", "HTTP", "IoT"],
    image: iot,
    route: "/internet-of-things/verified-clock-in",
  },
  {
    title: "Embedded Controls Car Maze",
    slug: "embedded-controls-maze",
    dates: "Spring 2024",
    status: "Archive",
    type: "case-study",
    category: "Embedded & Systems",
    summary:
      "Robotic car maze traversal project for embedded controls with sensors, control logic, and C firmware.",
    outcome:
      "A useful embedded systems archive entry for hardware interaction, timing, and sensor-driven behavior.",
    tags: ["C", "Embedded", "Controls"],
    image: placeholder,
    route: "/embedded-systems/embedded-controls-maze",
  },
  {
    title: "Cone Cell Cognitive Model",
    slug: "cone-cell-model",
    dates: "Fall 2024",
    status: "Archive",
    type: "case-study",
    category: "Research & Modeling",
    summary:
      "A cognitive modeling project simulating how cone cell signals can be interpreted into color perception.",
    outcome:
      "Connects AI/cognitive science coursework to Python-based modeling and experimental interpretation.",
    tags: ["Python", "Modeling", "Cognitive Science"],
    image: cm,
    route: "/research/cone-cell-model",
  },
  {
    title: "Adlib",
    slug: "adlib",
    dates: "Spring 2024 to present",
    status: "Lab Notes",
    type: "lab-note",
    category: "Graphics & Game Dev",
    summary:
      "A UE5 horror prototype centered on audio-driven pursuit, camera mechanics, and arcade scoring loops.",
    outcome:
      "Best presented as a systems design note around player feedback, AI pressure, and prototype mechanics.",
    tags: ["UE5", "Blueprint", "Game Design"],
    image: adlib,
    route: "/unreal-engine/adlib",
  },
  {
    title: "Genotype",
    slug: "genotype",
    dates: "Spring 2023",
    status: "Archive",
    type: "coursework",
    category: "Graphics & Game Dev",
    summary:
      "An Unreal Engine educational game about protein creation and ribosome behavior.",
    outcome:
      "Shows rapid game prototyping and using interactive systems to teach a non-game domain.",
    tags: ["UE5", "Blueprint", "Education"],
    image: genotype,
    route: "/unreal-engine/genotype",
  },
  {
    title: "Chinese Room",
    slug: "chinese-room",
    dates: "Spring 2023",
    status: "Archive",
    type: "coursework",
    category: "Graphics & Game Dev",
    summary:
      "A 2D Unreal Engine project demonstrating the Chinese Room thought experiment.",
    outcome:
      "Combines cognitive science material with interactive design and technical implementation.",
    tags: ["UE5", "C++", "Blueprint"],
    image: chineseroom,
    route: "/unreal-engine/chinese-room",
  },
  {
    title: "NPC Analysis",
    slug: "npc-analysis",
    dates: "Fall 2022",
    status: "Archive",
    type: "coursework",
    category: "Graphics & Game Dev",
    summary:
      "A class project analyzing AI NPC behavior and cognition levels in Unreal Engine.",
    outcome:
      "Useful evidence for behavior trees, NPC design, and cognition-informed game AI thinking.",
    tags: ["UE5", "AI", "Behavior Trees"],
    image: npc,
    route: "/unreal-engine/npc-analysis",
  },
  {
    title: "Troy Tutors",
    slug: "troy-tutors",
    dates: "August 2024 to present",
    status: "Archive",
    type: "case-study",
    category: "Work",
    summary:
      "Part-time tutoring for computer science and computer systems engineering courses.",
    outcome:
      "Shows communication depth across data structures, CANOS, embedded systems, and foundational CS topics.",
    tags: ["Teaching", "Data Structures", "CANOS"],
    image: troytutors,
    route: "/work-experience/troy-tutors",
  },
];

export const projectCategories: ProjectCategory[] = [
  "Embedded & Systems",
  "Graphics & Game Dev",
  "Research & Modeling",
  "Mobile & Web",
  "Work",
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectTypeLabels: Record<ProjectType, string> = {
  "case-study": "Case Study",
  "lab-note": "Lab Note",
  wiki: "Wiki",
  product: "Product",
  coursework: "Coursework",
};

export const projectIntakeTemplate: ProjectIntake = {
  title: "",
  dates: "",
  status: "Archive",
  type: "case-study",
  category: "Embedded & Systems",
  summary: "",
  outcome: "",
  tags: [],
  links: {
    product: "",
    github: "",
    docs: "",
    report: "",
  },
  images: [],
  whatIBuilt: "",
  whatChanged: "",
  whatIsStillRough: "",
};
