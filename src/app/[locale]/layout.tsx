import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, localeDirection, type Locale } from '@/i18n/config';
import Navbar from "@/components/Navbar";
import "../globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const baseUrl = 'https://holylabs.io';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages();
  const t = messages.metadata as { title: string; description: string };

  const url = `${baseUrl}/${locale}`;

  return {
    title: t.title,
    description: t.description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        'en': `${baseUrl}/en`,
        'he': `${baseUrl}/he`,
        'ru': `${baseUrl}/ru`,
        'x-default': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: url,
      siteName: 'HolyLabs',
      locale: locale === 'he' ? 'he_IL' : locale === 'ru' ? 'ru_RU' : 'en_US',
      alternateLocale: locales.filter(l => l !== locale).map(l =>
        l === 'he' ? 'he_IL' : l === 'ru' ? 'ru_RU' : 'en_US'
      ),
      type: 'website',
      images: [
        {
          url: '/images/og-image.png',
          width: 1200,
          height: 630,
          alt: 'HolyLabs - Creative Development Studio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/og-image.png'],
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();
  const direction = localeDirection[locale as Locale];

  return (
    <html lang={locale} dir={direction}>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; } window.scrollTo(0, 0);`
        }} />
        <link rel="alternate" hrefLang="en" href="/en" />
        <link rel="alternate" hrefLang="he" href="/he" />
        <link rel="alternate" hrefLang="ru" href="/ru" />
        <link rel="alternate" hrefLang="x-default" href="/en" />
      </head>
      <body className={`${manrope.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
