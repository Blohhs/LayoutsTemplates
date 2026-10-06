
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { CSSProperties } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();

  const linkStyle = (href: string): CSSProperties => ({
    marginRight: '16px',
    fontWeight: pathname === href ? 'bold' : 'normal',
    textDecoration: pathname === href ? 'underline' : 'none',
    color: '#1a7f8a',
  });

  return (
    <nav style={{ padding: '16px', borderBottom: '1px solid #cccccc', backgroundColor: '#ffffff' }}>
      <Link href="/" style={linkStyle('/')}>Главная</Link>
      <Link href="/about" style={linkStyle('/about')}>О нас</Link>
      <Link href="/blog" style={linkStyle('/blog')}>Блог</Link>
      <button
        onClick={() => router.push('/about')}
        style={{ padding: '8px 16px', cursor: 'pointer', fontFamily: 'inherit' }}
      >
        Перейти к «О нас»
      </button>
    </nav>
  );
}