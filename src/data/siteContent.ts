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
  technical_details: string | undefined;
};

export const siteCopy = {
  // This is the primary place to edit the site's text. Page templates should
  // only contain layout and rendering logic.
  layout: {
    navigation: [
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
      { name: "Apps", path: "/orbits" },
      { name: "Contact", path: "mailto:jeremy@jeremyarde.com" },
    ],
    footer: {
      github: { label: "github", href: "https://github.com/jeremyarde" },
      email: { label: "email", href: "mailto:jeremy@jeremyarde.com" },
      linkedin: {
        label: "linkedin",
        href: "https://www.linkedin.com/in/j-arde/",
      },
    },
  },
  home: {
    introduction: "I design and build software.",
    summary:
      "I build desktop and iOS apps, CLI and internal tools. Previously, I worked on distributed systems at AWS and machine-learning systems at Laivly.",
    selectedWorkTitle: "Selected work",
    allProjectsLabel: "All projects and experiments →",
  },
  projects: {
    title: "Projects",
    // intro:
    //   "A selection of software projects, spanning developer tools, desktop apps, and realtime systems.",
    clientTitle: "Client Projects",
    clientIntro:
      "Recent freelance work focused on automation, CNC workflows, and production tooling.",
  },
  projectCard: {
    noPreview: "No Preview",
    viewProject: "View Project",
    live: "Live",
    source: "Source",
    technicalDetails: "Technical Details",
    viewLive: "View Live",
    viewSource: "View Source",
    fallbackDescription:
      "A project showcasing modern development practices and technical expertise.",
  },
  orbits: {
    appStore: {
      badge: {
        href: "https://apps.apple.com/us/app/orbits-visual-focus-timer/id6797258061?itscg=30200&itsct=apps_box_badge&mttnsubad=6797258061",
        src: "https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/white/en-us?releaseDate=1786924800",
        alt: "Download on the App Store",
      },
      artwork: {
        href: "https://apps.apple.com/us/app/orbits-visual-focus-timer/id6797258061?itscg=30200&itsct=apps_box_artwork&mttnsubad=6797258061",
        src: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a4/60/11/a4601152-cc74-ddd5-ade6-ddb87e521a4f/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/540x540bb.jpg",
      },
    },
    title: "Orbits — A visual focus timer for your day",
    description:
      "Orbits is a visual timer for keeping track of the things you want to do. Available for desktop, iPhone, and iPad.",
    headline: "A visual focus timer for your day.",
    heroBody: "Setup your timers and turn them into habits",
    desktop: {
      href: "https://jerecan.itch.io/orbits",
      label: "Download for desktop",
    },
    featuresTitle: "A different way to look at your day.",
    features: [
      {
        title: "Everything at a glance",
        body: "Setup your timers, and watch as they rotate around the sun in your solar system.",
      },
      {
        title: "Get reminded on your terms",
        body: "Let Orbits create and manage your alarms so you can be reminded even when the app is closed.",
      },
      {
        title: "Respecting privacy",
        body: "Your timers and settings stay on your device. No accounts, tracking, or analytics.",
      },
    ],
    spotlight: {
      title: "Less fiddling. More doing.",
      body: "Pick something to work on, start a timer, and carry on. Orbits keeps time in view without demanding your attention.",
    },
    links: { privacy: "Privacy", support: "Support" },
    mobile: {
      eyebrow: "iPhone & iPad",
      title: "Take your timers with you.",
      body: "Orbits is also available on iPhone and iPad.",
    },
    maker: {
      before: "A small side project by",
      name: "Jeremy Arde",
      href: "https://jeremyarde.com",
      after: "Want a new feature or found a bug?",
      emailLabel: "Send a note",
    },
    supportEmail: "jeremy@jeremyarde.com",
    detailsTitle: "A few details",
    details: [
      { label: "Available on", value: "Desktop, iPhone, and iPad" },
      { label: "Privacy", value: "No accounts, tracking, or analytics" },
      {
        label: "Support",
        value: "jeremy@jeremyarde.com",
        href: "mailto:jeremy@jeremyarde.com",
      },
    ],
    faqTitle: "Questions",
    faqs: [
      {
        question: "What is Orbits?",
        answer:
          "Orbits is a visual timer for tasks, goals, and focus sessions. It turns timers into a small solar system so you can see them at a glance.",
      },
      {
        question: "Does Orbits collect my data?",
        answer:
          "No. Your timers and settings stay on your device; Orbits does not use accounts, analytics, advertising, or tracking.",
      },
    ],
    alt: {
      icon: "Orbits app icon",
      overview: "Orbits showing timers orbiting a glowing sun",
      focus: "A focused timer view in Orbits",
      mobile: "Orbits running on an iPhone",
    },
  },
  support: {
    title: "Orbits Support | Jeremy Arde",
    description: "Get help with Orbits, the visual timer app.",
    productLabel: "Orbits",
    heading: "Support",
    body: "For bug reports, issues or feedback, send me an email and I’ll get back to you.",
    cta: "Email support",
    email: "mailto:jeremy@jeremyarde.com",
  },
  privacy: {
    title: "Orbits Privacy Policy | Jeremy Arde",
    description: "Privacy policy for Orbits, a visual timer app.",
    productLabel: "Orbits",
    heading: "Privacy Policy",
    updated: "August 10, 2026",
    sections: [
      {
        body: "Orbits is a visual timer app. Orbits is designed to work without collecting personal information.",
      },
      {
        title: "Data we collect",
        body: "Orbits does not collect, transmit, sell, or share personal data. We do not use analytics, advertising, tracking, accounts, or third-party data collection services.",
      },
      {
        title: "Data stored on your device",
        body: "Orbits stores your timers, goals, completion history, and app settings locally on your device so the app can work and preserve your preferences. This information is not sent to us or to any third party.",
      },
      {
        title: "Children's privacy",
        body: "Orbits does not knowingly collect personal information from anyone, including children.",
      },
      {
        title: "Changes to this policy",
        body: "If this policy changes, we will update this page and its Last updated date.",
      },
    ],
    contact: {
      title: "Contact",
      before: "If you have questions about this policy, contact Jeremy at",
      email: "jeremy@jeremyarde.com",
    },
  },
};

export const projectDetails: Project[] = [
  {
    project_title: "Orbits",
    tag: "",
    keywords: ["Rust", "iOS", "app", "timer", "focus"],
    featured: true,
    site_url: "/orbits",
    github_url: "",
    date: "",
    description: "A visual timer for focus, habits, and everyday goals.",
    imagePath: "/src/assets/orbits/overview.png",
    technical_details: "Built in Rust using the Bevy game engine.",
  },
  {
    project_title: "HoverPane",
    tag: "Desktop",
    keywords: ["Rust", "Wry", "Axum", "SQLite"],
    featured: true,
    site_url: "https://hoverpane.com",
    github_url: "",
    date: "",
    description: "Floating desktop windows.",
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
    description: "Write forms in Markdown.",
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
  // {
  //   project_title: "Blackball",
  //   tag: "Realtime",
  //   keywords: ["Rust", "Axum", "WebSocket", "Dioxus"],
  //   featured: true,
  //   site_url: "https://blackball.onrender.com/",
  //   github_url: "https://github.com/jeremyarde/blackballgame",
  //   date: "2024-03 - 2024-12",
  //   description:
  //     "A trick-taking card game for 2-10+ players with live rooms and round-based bidding.",
  //   imagePath: "/src/assets/bbgame.png",
  //   technical_details:
  //     "Rust server built on Axum with WebSocket sessions and game-state validation. Web client built with Dioxus.",
  // },
  // {
  //   project_title: "Screen Recorder",
  //   tag: "Desktop",
  //   keywords: ["Rust", "Egui", "GStreamer", "FFmpeg"],
  //   featured: false,
  //   site_url: "",
  //   github_url: "https://github.com/jeremyarde/egui-video-stream",
  //   date: "",
  //   description:
  //     "A screen recording app, for recording yourself and the desktop at the same time.",
  //   imagePath: "/src/assets/screenrecord.gif",
  //   technical_details: "Built with rust using egui, gstreamer and ffmpeg.",
  // },
  // {
  //   project_title: "Uptime",
  //   tag: "",
  //   keywords: ["Rust", "Axum", "Tokio", "SQLite"],
  //   featured: true,
  //   site_url: "https://uptime.jeremyarde.com/",
  //   github_url: "",
  //   date: "",
  //   description:
  //     "24/7 website monitoring with minute-level polling, response-time history, and instant alerts.",
  //   imagePath: "/screenshots/uptime.png",
  //   technical_details:
  //     "Built in Rust with Axum, Tokio, SQLx, and SQLite. Tracks uptime history, response-time metrics, and alerting.",
  // },
];

export const clientProjects = [
  "Rebuilt a Python-based PDF modification tool for CNC file QA/QC processing.",
  "Split the project into a CLI + library, added variable page sizes, automatic edge detection, improved UI/UX, and doubled processing speed.",
  "Built a cross-platform Rust desktop app to automate NC1 CNC file management for CAD workflows, reducing manual effort by 200+ hours annually.",
];
