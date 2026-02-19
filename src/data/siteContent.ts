export type FeaturedProject = {
  name: string;
  tag: string;
  description: string;
  tech: string;
  url: string;
};

export type Project = {
  project_title: string;
  site_url: string;
  github_url: string;
  date: string;
  description: string;
  imagePath: string | undefined;
  technical_details: string;
};

export const siteCopy = {
  home: {
    // eyebrow: "Systems | TypeScript | Python | Rust",
    // headline: "hi, i'm jeremy",
    heroStatement:
      "I’m Jeremy. I write code and build systems. I work across TypeScript, Python, and Rust on backend services, web apps, and tooling.",
    focusLabel: "Focus",
    focusValue:
      "TypeScript, Python, Rust, Frontend/Backend, Desktop Apps, Distributed systems",
    availabilityLabel: "Availability",
    availabilityValue: "For select projects",
    panelTag: "Now",
    panelTitle: "What I'm working on",
    panelItems: ["HoverPane - Desktop window manager with Automation APIs"],
    panelFooterLabel: "Based in",
    panelFooterValue: "Vancouver, Canada",
    sectionTitle: "Sample Projects",
    projectsCta: "Explore All Projects",
  },
  projects: {
    eyebrow: "Work",
    title: "Projects",
    intro:
      "A selection of my open source work and experiments, spanning realtime systems, developer tools, and playful prototypes.",
  },
};

export const featuredProjects: FeaturedProject[] = [
  {
    tag: "Desktop",
    name: "HoverPane",
    description: "Desktop window manager with Automation APIs",
    tech: "Rust | TypeScript | WASM | SQLite",
    url: "https://hoverpane.com",
  },
  {
    tag: "SaaS",
    name: "Hashdown",
    description:
      "Markdown-driven forms with a custom PEG parser compiled to WebAssembly for client-side validation.",
    tech: "Rust | TypeScript | WASM | Postgres",
    url: "https://gethashdown.com",
  },
  {
    tag: "Infrastructure",
    name: "Uptime Monitor",
    description:
      "High-concurrency monitoring with Tokio scheduling, rate control, and failure isolation.",
    tech: "Rust | Tokio | Observability",
    url: "https://uptime.jeremyarde.com/",
  },
  {
    tag: "Realtime",
    name: "Blackball",
    description:
      "Multiplayer with WebSocket orchestration, authoritative server state, and Rust UI tooling.",
    tech: "Rust | WebSockets | Realtime",
    url: "https://jeremyarde.github.io/blackballgame/",
  },
];

export const projectDetails: Project[] = [
  {
    project_title: "Hashdown",
    site_url: "https://gethashdown.com",
    github_url: "",
    date: "",
    description: "Markdown-based form builder SaaS.",
    imagePath: "/screenshots/gethashdown-com.png",
    technical_details:
      "Full-stack application: Rust (Axum, SQLX, PostgreSQL) backend and TypeScript (React, Vite, Tailwind) frontend. Uses a custom parsing expression grammar (PEG) compiled to WASM for client-side parsing.",
  },
  // {
  //   project_title: "Gashapon Machine Sim",
  //   site_url: "https://jerecan.itch.io/gashapon-simulator",
  //   github_url: "",
  //   date: "",
  //   description: "",
  //   imagePath: "/src/assets/gasha.png",
  //   technical_details: "Built with rust and bevy.",
  // },
  {
    project_title: "Blackball",
    site_url: "https://blackball.onrender.com/",
    github_url: "https://github.com/jeremyarde/blackballgame",
    date: "2024-03 - 2024-12",
    description:
      "A card game similar to hearts. Players are dealt cards and bid on how many hands they can win.",
    imagePath: "/src/assets/bbgame.png",
    technical_details:
      "Website built with Dioxus (Rust UI framework). Server built with in Rust (axum, tokio). Website connects to the server via websocket, server handles game logic, syncing between players and validates moves.",
  },
  {
    project_title: "Screen Recorder",
    site_url: "",
    github_url: "https://github.com/jeremyarde/egui-video-stream",
    date: "",
    description:
      "A screen recording app, for recording yourself and the desktop at the same time.",
    imagePath: "/src/assets/screenrecord.gif",
    technical_details: "Built with rust using egui, gstreamer and ffmpeg.",
  },
  {
    project_title: "Uptime Monitor",
    site_url: "https://uptime.jeremyarde.com/",
    github_url: "",
    date: "",
    description: "A simple uptime monitor for websites.",
    imagePath: "/src/assets/uptime.png",
    technical_details: "Build in rust using axum, tokio, sqlx and sqlite.",
  },
];
