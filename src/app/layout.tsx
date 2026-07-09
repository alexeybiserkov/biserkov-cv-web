import type { Metadata } from "next";
import { jetbrainsMono, inter } from "@/fonts";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.seo.siteUrl),
  title: {
    default: profile.seo.title,
    template: `%s — ${profile.name}`,
  },
  description: profile.seo.description,
  keywords: [
    "Alexey Biserkov",
    "full-stack developer",
    "Next.js developer Prague",
    "WordPress developer",
    "RAG pipelines",
    "n8n automation",
  ],
  authors: [{ name: profile.name, url: profile.seo.siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: profile.seo.siteUrl,
    title: profile.seo.title,
    description: profile.seo.description,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seo.title,
    description: profile.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: profile.seo.siteUrl,
  email: profile.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Prague",
    addressCountry: "CZ",
  },
  worksFor: {
    "@type": "Organization",
    name: profile.company,
  },
  sameAs: [profile.social.github, profile.social.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
