import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MAC'B Painting & Pressure Washing | Triangle Area, NC",
    template: "%s | MAC'B Painting",
  },
  description:
    "Family-owned painting and pressure washing company serving Raleigh, Durham, Chapel Hill, Cary & the Triangle Area of NC since the early 2000s. Free estimates.",
  keywords: [
    "painting contractor triangle area nc",
    "pressure washing raleigh nc",
    "residential painting durham nc",
    "commercial painting nc",
    "exterior painting cary nc",
    "interior painting triangle nc",
    "deck cleaning nc",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MAC'B Painting & Pressure Washing",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
