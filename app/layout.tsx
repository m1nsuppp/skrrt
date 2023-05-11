import { siteConfig } from '@/config';
import '@/styles/globals.css';
import type { Metadata } from 'next';

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body className="min-h-screen">
        {children}
        <div id="modal" />
      </body>
    </html>
  );
}
