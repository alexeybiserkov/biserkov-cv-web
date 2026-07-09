import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  prefix?: string;
};

export function Input({ label, error, prefix, className, ...rest }: Props) {
  return (
    <label className={styles.label}>
      {label && <span className={styles.labelText}>{label}</span>}
      <div className={[styles.box, error ? styles.boxError : ""].join(" ")}>
        {prefix && <span className={styles.prefix}>{prefix}</span>}
        <input className={[styles.input, className].filter(Boolean).join(" ")} {...rest} />
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
}
