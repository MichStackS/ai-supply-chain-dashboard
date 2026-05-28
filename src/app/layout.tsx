import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Supply Chain Operations Dashboard",
  description:
    "AI-assisted operations dashboard for supply chain visibility and human-approved recommendations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
