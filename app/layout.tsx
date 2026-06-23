import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import { ThemeProvider } from "@/components/theme-provider";
import { TranslationProvider } from "@/hooks/use-translation";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const iranSansX = localFont({
  src: "../public/fonts/iran-sans-x/woff2/IRANSansXV.woff2",
  variable: "--font-iran-sans-x",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechRuby — Premium Software Engineering Services",
  description:
    "End-to-end technical implementations: Backend, DevOps, Frontend, Microservices, Cloud Infrastructure, and Distributed Systems.",
  keywords: [
    "software engineering",
    "backend development",
    "devops",
    "cloud infrastructure",
    "microservices",
    "distributed systems",
  ],
  openGraph: {
    title: "TechRuby — Premium Software Engineering Services",
    description:
      "Engineering systems that scale without limits. Full-stack technical implementations for mission-critical platforms.",
    type: "website",
  },
};

const themeScript = `
  try {
    var theme = localStorage.getItem('techruby-theme') || localStorage.getItem('rubytech-theme') || 'dark';
    var root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.style.colorScheme = theme;
    
    var locale = localStorage.getItem('techruby-locale') || localStorage.getItem('rubytech-locale') || 'en';
    root.dir = locale === 'fa' ? 'rtl' : 'ltr';
    root.lang = locale;
  } catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${iranSansX.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground">
        <TranslationProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
