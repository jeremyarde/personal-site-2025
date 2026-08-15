export const designLab = {
  themes: [
    { id: "paper", label: "Paper", background: "#fbfbfa", foreground: "#111111", muted: "#737373", accent: "#111111", surface: "#ffffff", border: "#d4d4d4" },
    { id: "night", label: "Night", background: "#101113", foreground: "#f6f3ee", muted: "#a6a29b", accent: "#d4ff5f", surface: "#1a1c20", border: "#35383d" },
    { id: "clay", label: "Clay", background: "#f4eee5", foreground: "#30251e", muted: "#806f60", accent: "#bc5b3c", surface: "#fffaf4", border: "#dacbbc" },
    { id: "lake", label: "Lake", background: "#e8f1ef", foreground: "#153b3a", muted: "#52716f", accent: "#26736c", surface: "#f7fbfa", border: "#bfd4d0" },
  ],
  effects: [
    { id: "grid", label: "Grid" },
    { id: "glow", label: "Glow" },
    { id: "noise", label: "Noise" },
    { id: "spotlight", label: "Spotlight" },
  ],
  motion: [
    { id: "still", label: "Still" },
    { id: "pulse", label: "Pulse" },
    { id: "spin", label: "Spin" },
    { id: "drift", label: "Drift" },
    { id: "bounce", label: "Bounce" },
  ],
  interactions: [
    { id: "magnet", label: "Magnet" },
    { id: "tilt", label: "Tilt" },
    { id: "scatter", label: "Scatter" },
  ],
  surfaces: [
    { id: "crisp", label: "Crisp" },
    { id: "soft", label: "Soft" },
    { id: "outline", label: "Outline" },
  ],
} as const;
