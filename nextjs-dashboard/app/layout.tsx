import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ border: '1px solid #000'}}>
          {children}
        </div>
      </body>
    </html>
  );
}
