import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ELA Restaurant",
  description: "Award-winning Mediterranean cuisine",
  icons: {
    icon: '/FAVICO.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
