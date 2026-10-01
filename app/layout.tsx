import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FLAG Automotives — Care Today. Better Tomorrow.",
  description: "FLAG Automotives — professional car servicing, repairs, maintenance, wash and detailing.",
  other: {
    "codex-preview": "development",
  },
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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

