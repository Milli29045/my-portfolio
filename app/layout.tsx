
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Malaika Mohsin | Full-Stack Web Developer",
    template: "%s | Malaika Mohsin",
  },
  description:
    "Malaika Mohsin is a Full-Stack Web Developer specializing in React.js, Next.js, Laravel, Node.js, Express.js, MongoDB, and modern web development.",
    verification: {
  google: "ynPNw1UdNQSdu_zf37L3FvJOP68JgrSvihqeGtVnTb8",
},
  keywords: [
    "Malaika Mohsin",
    "Full Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Malaika Mohsin" }],
  creator: "Malaika Mohsin",
  openGraph: {
    title: "Malaika Mohsin | Full-Stack Web Developer",
    description:
      "Explore my portfolio, web development skills, services, and projects.",
    url: "https://malaika-portfolio-milli.vercel.app/",
    siteName: "Malaika Mohsin Portfolio",
    type: "website",  
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
