export type Project = {
  slug: string;
  name: string;
  tagline: string;
  stack: string[];
  status: { label: string; tone: "success" | "neutral" | "warning" | "danger" };
  year: string;
  body: string;
  code: string;
};

export const projects: Project[] = [
  {
    slug: "networktools",
    name: "networktools.cloud",
    tagline:
      "30+ free network utilities — IP lookup, DNS checker, encoders and more — in four languages.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    status: { label: "live", tone: "success" },
    year: "2024",
    body: "Started as a single subnet calculator I kept rebuilding for client work, grew into 30+ tools covering DNS, IP lookup, encoding and more. Everything runs client-side — no backend, nothing uploaded — which doubles as the privacy pitch. Localized into four languages since a good chunk of traffic comes from outside English-speaking search. Built and maintained solo.",
    code: "$ curl -s https://networktools.cloud/api/dns/A/example.com",
  },
  {
    slug: "clicklift",
    name: "ClickLift",
    tagline:
      "Internal SEO automation platform, driven off Search Console data, across 10+ client sites.",
    stack: ["React", "Django", "PostgreSQL", "Redis", "Celery"],
    status: { label: "internal", tone: "neutral" },
    year: "2023",
    body: "Pulls impressions and CTR straight from Google Search Console, flags underperforming pages, and triggers automated meta-tag rewrites across 10+ client sites and hundreds of pages — replacing what used to be a manual, AI-assisted process. Orchestration (this platform) is split from execution (Click Lift AI, a WordPress plugin with Yoast/RankMath/AIOSEO/SEOPress support) so changes stay safe and reversible per site. Every change is tracked against Search Console and analytics to measure real impact.",
    code: "$ celery -A clicklift worker -Q gsc_sync --loglevel=info",
  },
  {
    slug: "askmeanything",
    name: "AskMeAnything",
    tagline: "RAG-powered Slack bot answering questions over the team's internal docs.",
    stack: ["FastAPI", "Qdrant", "OpenAI"],
    status: { label: "live", tone: "success" },
    year: "2024",
    body: "Chunks and embeds the internal Outline knowledge base into Qdrant, retrieves top-k context, and calls out to OpenAI for the final answer. Built mostly to stop getting paged for questions that are already written down somewhere in the team wiki.",
    code: '$ POST /ask  {"question": "how do I rotate the wireguard keys?"}',
  },
  {
    slug: "clutch-parser",
    name: "Clutch Parser",
    tagline: "Distributed scraping platform coordinating Puppeteer workers at scale.",
    stack: ["Laravel", "Puppeteer", "PM2"],
    status: { label: "internal", tone: "neutral" },
    year: "2023",
    body: "A Laravel coordinator backend that fans scraping jobs out across any number of PM2-managed Puppeteer worker instances, tracking progress and collecting results as they come in. Used it to scrape and dedupe roughly 300K profiles from third-party aggregators out of about 5M raw entries.",
    code: "$ pm2 start ecosystem.config.js --instances 8",
  },
];
