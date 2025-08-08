import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Precedent AI - Smarter Legal Research with Natural Language",
  description:
    "Revolutionary legal research platform that uses natural language search to find real case law instantly. Get grounded legal reasoning, not AI guesses. Free alternative to expensive legal databases like Lexis and Westlaw.",
  keywords:
    "legal research, case law search, natural language legal search, affordable legal database, AI legal assistant, precedent search, legal reasoning, alternative to Lexis Westlaw",
  authors: [{ name: "Precedent AI" }],
  creator: "Precedent AI",
  publisher: "Precedent AI",
  openGraph: {
    title: "Precedent AI - Smarter Legal Research",
    description:
      "Search case law in plain English. Get real legal reasoning, not AI guesses. Save hours on legal research.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Precedent AI - Smarter Legal Research",
    description:
      "Search case law in plain English. Get real legal reasoning, not AI guesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
