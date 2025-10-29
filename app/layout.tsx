import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CollabTranslation',
  description: 'Serviços profissionais de tradução',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt' suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
