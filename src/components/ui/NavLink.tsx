import { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./NavLink.module.css";

export function NavLink({
  children,
  href = "#",
  active = false,
  ...rest
}: {
  children: ReactNode;
  href?: string;
  active?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} className={[styles.link, active ? styles.active : ""].join(" ")} {...rest}>
      {children}
      <span className={styles.underline} />
    </a>
  );
}
