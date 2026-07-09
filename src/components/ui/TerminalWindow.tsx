import { ReactNode } from "react";
import styles from "./TerminalWindow.module.css";

export function TerminalWindow({
  title = "",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.window}>
      <div className={styles.titlebar}>
        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.dotRed}`} />
          <span className={`${styles.dot} ${styles.dotAmber}`} />
          <span className={`${styles.dot} ${styles.dotGreen}`} />
        </div>
        {title && <span className={styles.title}>{title}</span>}
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

export function Prompt({ children }: { children: ReactNode }) {
  return <span className={styles.prompt}>{children}</span>;
}
