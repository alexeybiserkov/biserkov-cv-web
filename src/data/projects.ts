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
      "40+ small network utilities — DNS lookups, subnet calculators, header inspectors — in four languages.",
    stack: ["Next.js", "TypeScript", "Vercel"],
    status: { label: "live", tone: "success" },
    year: "2024",
    body: "Solo-built end to end. Started as a single subnet calculator I kept needing for client work, grew into 40+ tools covering DNS, HTTP headers, SSL, IP info and more. Localized into four languages since a good chunk of traffic comes from outside English-speaking search.",
    code: "$ curl -s https://networktools.cloud/api/dns/A/example.com",
  },
  {
    slug: "clicklift",
    name: "ClickLift",
    tagline:
      "Internal meta-tag automation platform, driven off Search Console data.",
    stack: ["React", "Django", "PostgreSQL", "Celery"],
    status: { label: "internal", tone: "neutral" },
    year: "2023",
    body: "Built for the agency to stop manually rewriting title tags and meta descriptions across client sites. Pulls impressions/CTR from GSC, flags underperforming pages, and queues rewrite suggestions for review through a Celery task pipeline.",
    code: "$ celery -A clicklift worker -Q gsc_sync --loglevel=info",
  },
  {
    slug: "askmeanything",
    name: "AskMeAnything",
    tagline: "RAG-powered Slack bot for internal docs Q&A.",
    stack: ["FastAPI", "Qdrant", "OpenAI"],
    status: { label: "live", tone: "success" },
    year: "2024",
    body: "A Slack bot that answers questions against our internal docs and runbooks. Chunks + embeds docs into Qdrant, retrieves top-k context, and calls out to OpenAI for the final answer. Mostly built to stop getting paged for questions that are already written down somewhere.",
    code: '$ POST /ask  {"question": "how do I rotate the wireguard keys?"}',
  },
  {
    slug: "clutch-parser",
    name: "Clutch Parser",
    tagline: "Distributed scraping coordinator for structured web data.",
    stack: ["Python", "Redis", "Docker"],
    status: { label: "archived", tone: "neutral" },
    year: "2022",
    body: "A coordinator + worker pool for distributed scraping jobs — job queue in Redis, workers in Docker, retry/backoff baked in. Retired once the specific data source it targeted shut off public access.",
    code: "$ docker compose up --scale worker=8",
  },
];
