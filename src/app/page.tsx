import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { StatusPill } from "@/components/ui/StatusPill";
import { TerminalWindow, Prompt } from "@/components/ui/TerminalWindow";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: profile.seo.title,
  description: profile.seo.description,
};

export default function Home() {
  return (
    <>
      <div id="top" />
      <Nav />
      <main className={styles.wrap}>
        <section className={styles.hero}>
          <div>
            <div className={styles.eyebrow}>{profile.eyebrow}</div>
            <h1 className={styles.h1}>{profile.heroTitle}</h1>
            <p className={styles.sub}>{profile.heroSub}</p>
            <div className={styles.ctaRow}>
              <Button variant="primary" href="#contact">
                Get in touch
              </Button>
              <Button variant="ghost" href="#projects">
                View projects →
              </Button>
            </div>
          </div>
          <TerminalWindow title={profile.terminal.title}>
            <Prompt>$</Prompt> whoami
            <br />
            {profile.terminal.whoami}
            <br />
            <br />
            <Prompt>$</Prompt> stack --primary
            <br />
            {profile.terminal.stack}
            <br />
            <br />
            <Prompt>$</Prompt> status
            <br />
            <StatusPill status="success">{profile.terminal.status}</StatusPill>
          </TerminalWindow>
        </section>

        <section id="projects" className={styles.section}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>selected projects</h2>
          </div>
          <div className={styles.grid}>
            {projects.map((p) => (
              <Card key={p.slug}>
                <div className={styles.projHead}>
                  <h3 className={styles.projTitle}>{p.name}</h3>
                  <StatusPill status={p.status.tone}>{p.status.label}</StatusPill>
                </div>
                <p className={styles.projTag}>{p.tagline}</p>
                <div className={styles.tagRow}>
                  {p.stack.slice(0, 3).map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="writing" className={styles.section}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>writing</h2>
          </div>
          <div className={styles.postList}>
            {posts.map((post) => (
              <div key={post.slug} className={styles.post}>
                <div>
                  <div className={styles.postTitle}>{post.title}</div>
                  <div className={styles.postExcerpt}>{post.excerpt}</div>
                </div>
                <div className={styles.postMeta}>
                  <span className={styles.postDate}>{post.date}</span>
                  <div className={styles.tagRow}>
                    {post.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
          <div className={styles.contactHead}>
            <h2 className={styles.h2}>let&apos;s talk</h2>
            <p className={styles.sub} style={{ marginTop: 12 }}>
              Open to new roles, freelance work, or just talking shop about RAG pipelines and
              homelab setups.
            </p>
          </div>
          <ContactForm email={profile.email} />
        </section>
      </main>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div className={styles.footerLinks}>
          <a href={`mailto:${profile.email}`}>email</a>
          <a href={profile.social.github}>github</a>
          <a href={profile.social.linkedin}>linkedin</a>
        </div>
      </footer>
    </>
  );
}
