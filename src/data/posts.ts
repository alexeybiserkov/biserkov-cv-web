export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  body: string[];
  code: string;
};

export const posts: Post[] = [
  {
    slug: "incident-response",
    title: "What a credential-compromise incident actually looks like",
    date: "2026-03-14",
    excerpt:
      "Notes from a real casino-spam injection incident — detection, cleanup, and the Cloudflare Zero Trust + WireGuard setup that came out of it.",
    tags: ["security", "incident-response"],
    body: [
      "A client site started serving casino-spam pages to Googlebot only — invisible if you loaded the page normally, obvious the moment you checked Search Console.",
      "The entry point was a compromised WordPress admin credential, reused from another breach. No 2FA, no IP allowlist, no rate limiting on wp-login.php.",
      "Cleanup was mechanical: diff every file against a clean install, rotate every credential, force logout on every session, and reissue a fresh salt for the auth cookies.",
      "The more useful part came after: I put Cloudflare Zero Trust in front of the admin panel and set up a WireGuard tunnel for anything that still needed direct server access. Nobody touches wp-admin from the open internet anymore.",
    ],
    code: "$ wg genkey | tee privatekey | wg pubkey > publickey",
  },
  {
    slug: "networktools-retro",
    title: "Building networktools.cloud solo, in four languages",
    date: "2025-11-02",
    excerpt:
      "What it took to go from one subnet calculator to 40+ tools without it turning into an unmaintainable pile.",
    tags: ["sideproject", "nextjs"],
    body: [
      "It started as one tool: a subnet calculator I kept rebuilding from scratch for client work. Eventually I just put it on a domain.",
      "Every tool follows the same shape — a form, a pure function, a result panel — so adding tool #38 takes about the same effort as tool #4 did.",
      "Localization was the hard part, not the tools themselves. Four languages means every UI string, every error message, every unit label needs a translation key, not a hardcoded string.",
    ],
    code: "$ pnpm i && pnpm dev",
  },
  {
    slug: "rag-in-slack",
    title: "Notes on running a RAG bot in production Slack",
    date: "2025-06-20",
    excerpt:
      "Chunking strategy, retrieval tuning, and why the boring parts (auth, rate limits) took longer than the LLM integration.",
    tags: ["ai", "rag"],
    body: [
      "The embedding/retrieval part of AskMeAnything took a weekend. Making it safe to run against real internal docs took three weeks.",
      "Chunk size ended up mattering more than model choice — too small and you lose context, too large and retrieval gets noisy.",
      "Slack rate limits and thread-context handling ate more engineering time than the RAG pipeline itself.",
    ],
    code: "$ n8n execute --workflow rag-ingest",
  },
];
