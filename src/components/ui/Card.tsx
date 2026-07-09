import { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import styles from "./Card.module.css";

type Props = {
  children: ReactNode;
  href?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Card({ children, href, className, ...rest }: Props) {
  const cls = [styles.card, href ? styles.clickable : "", className]
    .filter(Boolean)
    .join(" ");
  if (href) {
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return <div className={cls}>{children}</div>;
}
