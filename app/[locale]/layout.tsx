import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import "../globals.css";
import Navigation from '@/app/components/Navigation';
import { getSiteUrl } from "../utils/site";
import Script from "next/script";
import { ThemeProvider } from '@/app/components/ThemeProvider';
import { locales, localeMetadata, type Locale } from "../../i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const metadata = localeMetadata[locale] || localeMetadata.en;

  return {
    metadataBase: new URL(getSiteUrl()),
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: "MLP Test" }],
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "website",
      locale: locale === 'en' ? 'en_US' : locale === 'tr' ? 'tr_TR' : locale === 'pl' ? 'pl_PL' : locale === 'es-MX' ? 'es_MX' : 'pt_BR',
      url: locale === 'en' ? getSiteUrl() : `${getSiteUrl()}/${locale}`,
      siteName: "My Little Pony Test",
      images: [
        {
          url: `${getSiteUrl()}/og-image.png`,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/mlp-logo.png", type: "image/png" },
      ],
      apple: "/mlp-logo.png",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: locale === 'en' ? getSiteUrl() : `${getSiteUrl()}/${locale}`,
      languages: {
        'en': getSiteUrl(),                    // 英语：https://www.mylittleponytest.xyz
        'tr': `${getSiteUrl()}/tr`,
        'pl': `${getSiteUrl()}/pl`,
        'es-MX': `${getSiteUrl()}/es-MX`,
        'pt-BR': `${getSiteUrl()}/pt-BR`,
      }
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // 验证 locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // 获取消息
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased font-sans">
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7779254174392960"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <Navigation />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        {/* Google Analytics */}
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
