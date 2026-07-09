import localFont from "next/font/local";

export const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Variable.woff2",
  variable: "--font-mono",
  weight: "100 800",
  display: "swap",
});

export const inter = localFont({
  src: "./fonts/Inter-Variable.woff2",
  variable: "--font-sans",
  weight: "100 900",
  display: "swap",
});
