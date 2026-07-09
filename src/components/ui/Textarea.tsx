import { TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.css";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & { label?: string };

export function Textarea({ label, rows = 5, className, ...rest }: Props) {
  return (
    <label className={styles.label}>
      {label && <span className={styles.labelText}>{label}</span>}
      <textarea rows={rows} className={[styles.textarea, className].filter(Boolean).join(" ")} {...rest} />
    </label>
  );
}
