import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://daniel-kargari.com"),
  alternates: {
    canonical: "https://daniel-kargari.com",
  },
  title: "Daniel Kargari",
  description: "Daniel Kargari is a Senior Front-end Developer",
  keywords:
    "Daniel Kargari, Front-end Engineer, Front-end Developer, Web Development, Web3, Quality Assurance, Software Engineering, Developer",
  openGraph: {
    locale: "en_US",
    siteName: "Daniel Kargari",
    type: "website",
    title: "Daniel Kargari",
    description: "Daniel Kargari is a Senior Front-end Developer",
    url: "https://daniel-kargari.com",
    images: [
      {
        url: "./og-large-dan.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Kargari",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
