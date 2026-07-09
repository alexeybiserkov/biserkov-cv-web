export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Front-end",
    items: ["React", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind"],
  },
  {
    category: "Back-end",
    items: ["PHP", "Laravel", "Node.js", "REST APIs", "SQL", "Python / Django"],
  },
  {
    category: "CMS / CRM",
    items: ["WordPress", "HubSpot CMS", "WooCommerce", "ACF", "Webflow"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Linux", "Cloudflare", "WireGuard", "CI/CD", "GitHub Actions", "GCP", "Vercel"],
  },
  {
    category: "Automation",
    items: ["n8n", "Puppeteer", "AI pipelines (OpenAI, Gemini, RAG / Qdrant)", "Web scraping"],
  },
  {
    category: "AI Tools",
    items: ["Claude Code", "Cursor", "MCP connectors", "Agentic workflows"],
  },
];

export const languages = [
  { name: "English", level: "Professional Working" },
  { name: "Ukrainian", level: "Native" },
  { name: "Russian", level: "Native" },
  { name: "Czech", level: "Elementary (learning)" },
];

export const certifications = [
  "Meta Front-End Developer Professional Certificate",
  "Meta React Specialization",
  "Principles of UX/UI Design — Meta",
  "EF SET English Certificate — B2",
];
