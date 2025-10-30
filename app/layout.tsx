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
      <head>
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN'
          crossOrigin='anonymous'
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
