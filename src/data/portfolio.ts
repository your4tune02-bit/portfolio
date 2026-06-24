export const site = {
  title: "Chris",
  tagline: "2nd Year IT Student & Developer",
  description:
    "Building projects across web and desktop — from interactive city guides to JavaFX collaboration tools.",
  url: "https://your4tune02-bit.github.io/portfolio",
  domain: "portfolio",
};

export const hero = {
  greeting: "Hi, I'm",
  name: "Chris",
  subtitle: "2nd year IT student exploring full-stack web and desktop development.",
  roles: ["IT Student", "Web Developer", "Java Developer"],
  cta: { label: "See My Work", href: "#projects" },
  secondaryCta: { label: "Get In Touch", href: "#contact" },
};

export const about = {
  badge: "About",
  title: "Who I Am",
  paragraphs: [
    "I'm Chris, a 2nd year IT student with a passion for building practical applications that solve real problems. I've worked on web apps with Next.js and desktop apps with JavaFX, always focusing on clean code and good user experience.",
    "My projects range from an interactive Manila travel guide to a project-collaboration desktop app called SkillSync. I enjoy learning new technologies and turning ideas into working software.",
    "I'm looking for opportunities to grow as a developer and contribute to meaningful projects. Let's build something cool together!",
  ],
  avatar: "/avatar-placeholder.svg",
  resumeUrl: "#",
};

export const skills = {
  badge: "Skills",
  title: "Tools & Technologies",
  categories: [
    {
      name: "Web",
      items: [
        { name: "Next.js", level: 75 },
        { name: "TypeScript", level: 70 },
        { name: "Tailwind CSS", level: 80 },
        { name: "HTML/CSS", level: 85 },
        { name: "Motion", level: 65 },
      ],
    },
    {
      name: "Desktop",
      items: [
        { name: "Java", level: 80 },
        { name: "JavaFX", level: 75 },
        { name: "Maven", level: 70 },
        { name: "SQLite", level: 65 },
      ],
    },
    {
      name: "Tools",
      items: [
        { name: "Git", level: 70 },
        { name: "VS Code", level: 85 },
        { name: "IntelliJ IDEA", level: 80 },
        { name: "Figma", level: 55 },
      ],
    },
  ],
};

export const projects = {
  badge: "Projects",
  title: "Things I've Built",
  description: "Projects I've worked on during my IT studies and personal development.",
  list: [
    {
      title: "Manila City Guide",
      description:
        "Interactive travel guide for Manila with 3D tilt cards, smooth page transitions, an animated robot mascot, and dark/light theme. Covers 6 categories of attractions, food, transport, and culture.",
      tags: ["Next.js", "TypeScript", "Motion", "Tailwind"],
      image: "/project-placeholder.svg",
      links: { live: "https://your4tune02-bit.github.io/portfolio", github: "https://github.com/your4tune02-bit/city-guide" },
    },
    {
      title: "SkillSync",
      description:
        "JavaFX desktop application for student project collaboration. Features project creation, task boards, real-time chat, invitation system, and skill-based recommendations. Uses SQLite for local data persistence.",
      tags: ["Java", "JavaFX", "Maven", "SQLite"],
      image: "/project-placeholder.svg",
      links: { live: "#", github: "https://github.com/your4tune02-bit/skillsync" },
    },
    {
      title: "StockFlow",
      description:
        "Inventory and sales management system with daily sales reporting, transaction tracking, and revenue analytics. Generates CSV reports for business insights.",
      tags: ["Python", "CSV", "Data Analysis", "CLI"],
      image: "/project-placeholder.svg",
      links: { live: "#", github: "https://github.com/your4tune02-bit/stockflow" },
    },
  ],
};

export const experience = {
  badge: "Experience",
  title: "My Journey",
  jobs: [
    {
      role: "2nd Year IT Student",
      company: "University",
      period: "2025 — Present",
      description:
        "Studying Information Technology with a focus on software development. Building projects across web and desktop platforms to strengthen my programming skills.",
      tags: ["Java", "Web Dev", "Databases", "OOP"],
    },
    {
      role: "Project: Manila City Guide",
      company: "Personal Project",
      period: "2026",
      description:
        "Built a multi-page Next.js travel guide with 3D interactions, page transitions, animated SVG robot, and full dark/light theme support. Focused on performance (60fps) and responsive design.",
      tags: ["Next.js", "Motion", "Tailwind", "TypeScript"],
    },
    {
      role: "Project: SkillSync",
      company: "Academic Project",
      period: "2026",
      description:
        "Developed a JavaFX desktop application for project collaboration among students. Implemented real-time chat, task management, invitation system, and SQLite persistence layer.",
      tags: ["Java", "JavaFX", "SQLite", "OOP Design"],
    },
    {
      role: "Project: StockFlow",
      company: "Personal Project",
      period: "2026",
      description:
        "Created an inventory and sales tracking system with automated CSV reporting and revenue analytics.",
      tags: ["Python", "Data Processing", "CLI", "CSV"],
    },
  ],
};

export const contact = {
  badge: "Contact",
  title: "Let's Talk",
  description: "Have a question, project idea, or just want to connect? Reach out!",
  email: "chris@example.com",
  social: [
    { name: "GitHub", url: "https://github.com/your4tune02-bit", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/chris", icon: "linkedin" },
    { name: "Email", url: "mailto:chris@example.com", icon: "email" },
  ],
};

export const footer = {
  text: `© ${new Date().getFullYear()} Chris. Built with Next.js & Tailwind CSS.`,
};
