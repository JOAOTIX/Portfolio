import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/lib/portfolio-data";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Joao Urteaga Sanchez",
  title: {
    default: "Joao Urteaga Sanchez | Full Stack Developer - Java & React",
    template: "%s | Joao Urteaga Sanchez",
  },
  description:
    "Portafolio de Joao Urteaga Sanchez, Desarrollador Full Stack en Lima, Perú. Especializado en Java, Spring Boot, React, Next.js, Node.js y Docker.",
  keywords: [
    "Joao Urteaga Sanchez",
    "Full Stack Developer",
    "Backend Developer",
    "Java",
    "Spring Boot",
    "React",
    "Next.js",
    "Node.js",
    "Lima Perú",
  ],
  authors: [{ name: "Joao Urteaga Sanchez", url: SITE_URL }],
  creator: "Joao Urteaga Sanchez",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Joao Urteaga Sanchez | Full Stack Developer",
    description:
      "Desarrollador Full Stack especializado en Java, Spring Boot, React y arquitecturas escalables. Explora mis proyectos y experiencia.",
    url: SITE_URL,
    siteName: "Portafolio de Joao Urteaga Sanchez",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portafolio de Desarrollo de Joao Urteaga Sanchez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joao Urteaga Sanchez | Full Stack Developer",
    description:
      "Desarrollador Full Stack especializado en Java, Spring Boot y React. Mira mis proyectos.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  verification: {
    google: "IU2OzihCF-EVoKREXIpSwIwBr8G5E9u56_X-ntSpX-M",
  },
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateModified: "2026-11-25",
  mainEntity: {
    "@type": "Person",
    name: "Joao Urteaga Sanchez",
    jobTitle: "Full Stack Developer",
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    email: "mailto:joao.software.dev@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lima",
      addressCountry: "PE",
    },
    knowsAbout: [
      "Java",
      "Spring Boot",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Docker",
      "SQL",
    ],
    sameAs: [
      "https://github.com/JOAOTIX",
      "https://www.linkedin.com/in/joao-urteaga-sanchez-724740369",
    ],
  },
};
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Joao Urteaga Sanchez",
  alternateName: "Joao Urteaga Dev",
  url: "https://joao-urteaga-dev.vercel.app/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PE" className="scroll-smooth">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}