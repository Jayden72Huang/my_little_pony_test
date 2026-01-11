import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import { getSiteUrl } from "./utils/site";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Dating Standards Calculator - Are Your Standards Realistic?",
  description: "Check if your dating standards are realistic. Calculate match percentage using real US Census and CDC data based on age, height, income, and preferences.",
  keywords: ["dating standards calculator", "dating standards", "realistic dating expectations", "dating compatibility"],
  authors: [{ name: "Dating Easy" }],
  openGraph: {
    title: "Dating Standards Calculator - Are Your Standards Realistic?",
    description: "Discover what percentage of potential partners match your dating criteria using real demographic data.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dating Standards Calculator",
    description: "Check if your dating standards are realistic with our data-driven calculator.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/dating-easy-logo.png", type: "image/png" },
    ],
    apple: "/dating-easy-logo.png",
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
      <body className="antialiased font-sans">
        <Navigation />
        {children}
        {/* Google Analytics (gtag.js) */}
        <div style={{ display: "none" }} aria-hidden="true">
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-8L7CPZ0TR9"
            strategy="afterInteractive"
          />
          <Script id="google-gtag" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8L7CPZ0TR9');
            `}
          </Script>
        </div>
      </body>
    </html>
  );
}
