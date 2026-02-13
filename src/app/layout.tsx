import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MotionProvider from "@/components/providers/MotionProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import ThemeProvider from "@/components/providers/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://david-dev.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "David | Full Stack Developer",
    template: "%s | David Dev",
  },
  description:
    "Portafolio de David - Estudiante de Ingenieria Informatica y Full Stack Developer. Proyectos, habilidades y contacto.",
  keywords: [
    "David",
    "Full Stack Developer",
    "Ingenieria Informatica",
    "Portafolio",
    "Next.js",
    "React",
    "TypeScript",
    "Desarrollador Web",
  ],
  authors: [{ name: "David" }],
  creator: "David",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    title: "David | Full Stack Developer",
    description:
      "Estudiante de Ingenieria Informatica apasionado por el desarrollo Full Stack. Explora mis proyectos y habilidades.",
    siteName: "David Dev Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "David - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David | Full Stack Developer",
    description:
      "Estudiante de Ingenieria Informatica apasionado por el desarrollo Full Stack.",
    images: ["/og-image.svg"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <MotionProvider>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
