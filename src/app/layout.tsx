import './globals.css';

export const metadata = {
  title: 'Quote',
  description: 'My quotes list',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
