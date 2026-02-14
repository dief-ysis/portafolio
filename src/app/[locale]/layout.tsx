import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import MotionProvider from "@/components/providers/MotionProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { routing } from "@/i18n/routing";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://david-dev.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "David | Full Stack Developer",
    template: "%s | David Dev",
  },
  description:
    "Portafolio de David - Estudiante de Ingenieria Informatica y Full Stack Developer.",
  keywords: [
    "David",
    "Full Stack Developer",
    "Portafolio",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "David" }],
  creator: "David",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "David | Full Stack Developer",
    description:
      "Estudiante de Ingenieria Informatica apasionado por el desarrollo Full Stack.",
    siteName: "David Dev Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "David | Full Stack Developer",
    description:
      "Estudiante de Ingenieria Informatica apasionado por el desarrollo Full Stack.",
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

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider locale={locale}>
          <ThemeProvider>
            <MotionProvider>
              <Header />
              {children}
              <Footer />
              <ScrollToTop />
            </MotionProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
