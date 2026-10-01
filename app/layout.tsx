import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FLAG Automotives — Care Today. Better Tomorrow.",
  description: "Professional vehicle care, transparent updates and doorstep pickup and delivery.",
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

