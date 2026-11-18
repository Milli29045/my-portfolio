
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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Malaika Mohsin",
  url: "https://malaika-portfolio-milli.vercel.app/",
  jobTitle: "Full-Stack Web Developer",
  description:
    "Full-Stack Web Developer offering business websites, school websites, e-commerce websites and custom web development services in Shahdra, Lahore, Pakistan.",
  email: "mailto:malikashoukat777@gmail.com",
  telephone: "+923281717213",
  knowsAbout: [
    "Web Development",
    "Website Design",
    "React.js",
    "Next.js",
    "Laravel",
    "Node.js",
    "Express.js",
    "MongoDB",
    "E-commerce Development",
  ],
  sameAs: [
    "https://github.com/Milli29045",
    "https://youtube.com/@its_web.developer",
    "https://www.instagram.com/its_web._develper/",
    "https://www.tiktok.com/@its_web._developer",
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Malaika Mohsin | Web Developer in Shahdra, Lahore",
    template: "%s | Malaika Mohsin",
  },
  description:
    "Malaika Mohsin is a Full-Stack Web Developer in Shahdra, Lahore, Pakistan. Offering professional website design, Next.js, React.js, Laravel, e-commerce and custom web development services.",
  verification: {
    google: "ynPNw1UdNQSdu_zf37L3FvJOP68JgrSvihqeGtVnTb8",
  },
  keywords: [
    "Malaika Mohsin",
    "Full Stack Web Developer",
    "Web Developer in Shahdra Lahore",
    "Website Developer in Lahore",
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />

        {children}
      </body>
    </html>
  );
}
