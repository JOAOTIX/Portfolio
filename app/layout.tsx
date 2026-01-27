import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans", 
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono", 
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-nine-delta-32.vercel.app/'),

  title: {
    default: 'Joao Urteaga Sanchez | Full Stack Developer - Java & React',
    template: '%s | Joao Urteaga Sanchez' 
  },

  description: 'Portafolio profesional de Joao Urteaga Sanchez. Desarrollador Full Stack especializado en arquitecturas robustas con Java (Spring Boot), Node.js y React. Experto en seguridad y escalabilidad.',

  keywords: ['Full Stack Developer', 'Backend Developer', 'Java', 'Spring Boot', 'React', 'Next.js', 'Node.js', 'Software Engineer', 'Portafolio'],

  authors: [{ name: 'Joao Urteaga Sanchez' }],
  creator: 'Joao Urteaga Sanchez',

  openGraph: {
    title: 'Joao Urteaga Sanchez | Full Stack Developer',
    description: 'Especialista en Java, Spring Boot y arquitecturas modernas. Mira mis proyectos y experiencia.',
    url: 'https://portfolio-nine-delta-32.vercel.app/',
    siteName: 'Portafolio de Joao Urteaga Sanchez',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'Portafolio de Desarrollo',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Joao Urteaga Sanchez | Full Stack Developer',
    description: 'Desarrollador especializado en Java y React. Mira mis proyectos.',
    images: ['/icon.png'],
  },

  icons: {
    icon: [
      { url: '/icon.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth"> 
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}