import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Centini Tech — Tecnologia que move negócios",
  description:
    "A Centini Tech cria sistemas, aplicativos, automações e experiências digitais sob medida para negócios que querem avançar.",
  openGraph: {
    title: "Centini Tech",
    description: "Tecnologia que move negócios.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

