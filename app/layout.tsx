import { Manrope } from 'next/font/google';

import type { Metadata } from 'next';

import { Footer, Header, SubscriptionForm } from '@/core/components';
import { Providers } from '@/core/providers';

import './globals.css';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Официальный сайт бренда Network в России',
  description: 'Выбирайте стиль в самых ярких и актуальных образах сезона.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} h-full antialiased`}>
      <body className="h-full min-h-dvh flex flex-col">
        <Providers>
          <Header />
          {children}
          <SubscriptionForm />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
