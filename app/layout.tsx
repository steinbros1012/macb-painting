import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "MAC'B Painting & Pressure Washing | Triangle Area NC",
    template: "%s | MAC'B Painting & Pressure Washing",
  },
  description:
    "Family-owned painting and pressure washing company serving the Triangle Area of North Carolina. Interior, exterior, residential, commercial painting and deck cleaning. Free estimates.",
  keywords: [
    "painting contractor triangle area nc",
    "pressure washing raleigh nc",
    "residential painting durham nc",
    "commercial painting chapel hill nc",
    "exterior painting cary nc",
    "interior painting triangle nc",
    "deck cleaning nc",
    "fence cleaning nc",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MAC'B Painting & Pressure Washing",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
