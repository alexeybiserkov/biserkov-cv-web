"use client";

import { FormEvent, useState } from "react";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Button } from "./ui/Button";
import { StatusPill } from "./ui/StatusPill";
import styles from "./ContactForm.module.css";

export function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "website"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className={styles.done}>
        <StatusPill status="success">sent</StatusPill>
        thanks — your email client should have opened. I&apos;ll get back to you soon.
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        label="Name"
        placeholder="Jane Doe"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
        prefix="@"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Textarea
        label="Message"
        placeholder="What are you building?"
        rows={6}
        required
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <div>
        <Button type="submit" variant="primary">
          Send message
        </Button>
      </div>
    </form>
  );
}
