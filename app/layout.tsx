import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Source_Serif_4,
  Cookie,
  Noto_Sans_JP,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const cookie = Cookie({
  variable: "--font-cookie",
  subsets: ["latin"],
  weight: "400",
});

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["900"],
});

export const metadata: Metadata = {
  title: "Dovery | FemTech for Teens",
  description:
    "Stateless, privacy-first period tracking and AI health support for teenage girls.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} ${cookie.variable} ${notoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
