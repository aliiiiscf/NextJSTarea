import { Montserrat } from 'next/font/google';
import './ui/global.css'
import { montserrat } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <div style={{ border: '1px solid #000'}}>
          {children}
        </div>
      </body>
    </html>
  );
}
