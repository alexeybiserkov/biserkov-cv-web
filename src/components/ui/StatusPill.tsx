import { ReactNode } from "react";
import styles from "./StatusPill.module.css";

export function StatusPill({
  children,
  status = "success",
}: {
  children: ReactNode;
  status?: "success" | "warning" | "danger" | "neutral";
}) {
  return (
    <span className={[styles.pill, styles[status]].join(" ")}>
      <span className={styles.dot} />
      {children}
    </span>
  );
}
