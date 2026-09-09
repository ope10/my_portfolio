import './globals.css';

export const metadata = {
  title: 'Opeyemi Falana | Frontend Engineer',
  description: 'Portfolio of Opeyemi Falana, a frontend engineer building thoughtful digital experiences.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
