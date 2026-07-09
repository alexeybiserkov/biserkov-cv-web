import styles from "./CodeBlock.module.css";

export function CodeBlock({ code, language = "" }: { code: string; language?: string }) {
  return (
    <div className={styles.wrap}>
      {language && <div className={styles.lang}>{language}</div>}
      <pre className={styles.pre}>{code}</pre>
    </div>
  );
}
