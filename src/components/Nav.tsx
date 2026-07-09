"use client";

import { useEffect, useState } from "react";
import { NavLink } from "./ui/NavLink";
import { profile } from "@/data/profile";
import styles from "./Nav.module.css";

const items: [string, string][] = [
  ["#experience", "experience"],
  ["#skills", "skills"],
  ["#projects", "projects"],
  ["#contact", "contact"],
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={[styles.bar, scrolled ? styles.scrolled : ""].join(" ")}>
      <a href="#top" className={styles.mark}>
        <span className={styles.prompt}>$</span> {profile.handle}
      </a>
      <div className={styles.links}>
        {items.map(([href, label]) => (
          <NavLink key={href} href={href}>
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
