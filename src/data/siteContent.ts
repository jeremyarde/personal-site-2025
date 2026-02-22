export type Project = {
  project_title: string;
  tag: string;
  keywords: string[];
  featured: boolean;
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
      "I’m Jeremy Arde, a software engineer who builds backend systems, web apps, and desktop tools. I’ve shipped high-scale services at AWS and ML platforms at Laivly, and I now build automation-heavy client software and products like Hashdown and HoverPane.",
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
    clientTitle: "Client Projects",
    clientIntro:
      "Recent freelance work focused on automation, CNC workflows, and production tooling.",
  },
};

export const projectDetails: Project[] = [
  {
    project_title: "HoverPane",
    tag: "Desktop",
    keywords: ["Rust", "Wry", "Axum", "SQLite"],
    featured: true,
    site_url: "https://hoverpane.com",
    github_url: "",
    date: "",
    description:
      "Floating desktop widgets that track live web data with custom refresh intervals and element targeting.",
    imagePath: "/screenshots/hoverpane.png",
    technical_details:
      "Built in Rust with Wry, Axum, and SQLite. Tracks live web data with custom refresh intervals and element targeting.",
  },
  {
    project_title: "Hashdown",
    tag: "SaaS",
    keywords: ["Rust", "Axum", "WASM", "Postgres"],
    featured: true,
    site_url: "https://gethashdown.com",
    github_url: "",
    date: "",
    description:
      "Write forms in Markdown, publish instantly, and share a link to collect responses.",
    imagePath: "/screenshots/gethashdown-com.png",
    technical_details:
      "Rust backend (Axum, SQLx/SeaORM, Postgres) with a custom PEG-based Markdown parser compiled to WASM for client-side parsing.",
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
    tag: "Realtime",
    keywords: ["Rust", "Axum", "WebSocket", "Dioxus"],
    featured: true,
    site_url: "https://blackball.onrender.com/",
    github_url: "https://github.com/jeremyarde/blackballgame",
    date: "2024-03 - 2024-12",
    description:
      "A trick-taking card game for 2-10+ players with live rooms and round-based bidding.",
    imagePath: "/src/assets/bbgame.png",
    technical_details:
      "Rust server built on Axum with WebSocket sessions and game-state validation. Web client built with Dioxus.",
  },
  {
    project_title: "Screen Recorder",
    tag: "Desktop",
    keywords: ["Rust", "Egui", "GStreamer", "FFmpeg"],
    featured: false,
    site_url: "",
    github_url: "https://github.com/jeremyarde/egui-video-stream",
    date: "",
    description:
      "A screen recording app, for recording yourself and the desktop at the same time.",
    imagePath: "/src/assets/screenrecord.gif",
    technical_details: "Built with rust using egui, gstreamer and ffmpeg.",
  },
  {
    project_title: "Uptime",
    tag: "",
    keywords: ["Rust", "Axum", "Tokio", "SQLite"],
    featured: true,
    site_url: "https://uptime.jeremyarde.com/",
    github_url: "",
    date: "",
    description:
      "24/7 website monitoring with minute-level polling, response-time history, and instant alerts.",
    imagePath: "/screenshots/uptime.png",
    technical_details:
      "Built in Rust with Axum, Tokio, SQLx, and SQLite. Tracks uptime history, response-time metrics, and alerting.",
  },
];

export const clientProjects = [
  "Rebuilt a Python-based PDF modification tool for CNC file QA/QC processing.",
  "Split the project into a CLI + library, added variable page sizes, automatic edge detection, improved UI/UX, and doubled processing speed.",
  "Built a cross-platform Rust desktop app to automate NC1 CNC file management for CAD workflows, reducing manual effort by 200+ hours annually.",
];
