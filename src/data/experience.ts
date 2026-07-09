export type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: string[];
};

export const experience: Job[] = [
  {
    company: "42DM",
    role: "Full-Stack Developer",
    period: "Oct 2023 — Present",
    location: "Prague, Czechia (Remote)",
    current: true,
    bullets: [
      "Own the full lifecycle of production sites for US clients (Flying Fish, Virsec, Agistix, Zeeto, Glue.net, Mention-me, Meibel.ai and others) — architecture, build, content migration, ongoing reliability.",
      "Built ClickLift, Click Lift AI, Clutch Parser, and an n8n-based SEO/AEO audit pipeline — see projects below.",
      "Led incident response on a compromised client site — traced the breach to stolen credentials, then eliminated the attack surface with VPN-gated admin access, Zero Trust, and credential rotation.",
      "Set up WireGuard VPN for team access to client environments and configured Cloudflare Access (Zero Trust) with Google SSO for internal services.",
      "Manage CI/CD pipelines and repository access for the team; deployments across GCP, Vercel, and WP Engine.",
      "Diagnosed and fixed performance bottlenecks — Core Web Vitals, render path, caching strategy — moving sites from failing to passing.",
    ],
  },
  {
    company: "Hyperion Tech",
    role: "Frontend Developer",
    period: "Apr 2020 — Aug 2023",
    location: "Kharkiv, Ukraine (Remote)",
    bullets: [
      "Frontend development for iGaming/betting clients on an outstaffing model.",
      "Built embeddable React widgets handling real-time data — odds comparison, filtering, monitoring dashboards — integrated into multiple client products.",
      "Maintained multiple client WordPress sites with custom sub-services.",
    ],
  },
  {
    company: "MAXBURST, Inc.",
    role: "Frontend → Full-Stack Developer (WordPress)",
    period: "Oct 2017 — Apr 2020",
    location: "New York, USA (Remote)",
    bullets: [
      "Started in frontend (HTML/CSS/JS), grew into full-stack WordPress development for US agency clients.",
      "Custom WordPress themes and plugins, WooCommerce development.",
      "Vue.js embedded services, responsive layouts from Figma/PSD.",
    ],
  },
  {
    company: "Growth / 360-media / Web-Holder",
    role: "Frontend Developer",
    period: "Mar 2016 — Oct 2017",
    location: "Ukraine (Remote)",
    bullets: [
      "Started as an HTML/CSS developer, grew into full project ownership.",
      "Built a book aggregator service and a hookah bar management system (POS dashboard, ordering app, inventory CRM).",
      "WordPress theme development and customization.",
    ],
  },
];
