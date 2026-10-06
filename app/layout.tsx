import type { ReactNode } from 'react';
import NavBar from './components/NavBar';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body>
        <NavBar />
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}