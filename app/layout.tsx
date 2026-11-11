import type { Metadata } from "next";
import "./globals.css";
import "./brand-modes.css";
import { FloatingActions, SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Exclusive Credit Solutions | Debt Review Removal",
  description: "Eligibility-led Debt Review Removal support, clearance guidance and debt mediation in South Africa.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body className="antialiased"><SiteHeader />{children}<SiteFooter /><FloatingActions /></body>
    </html>
  );
}
