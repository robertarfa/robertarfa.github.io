'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { i18n } from '@/i18n-config';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${i18n.defaultLocale}`);
  }, [router]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <p>Redirecting...</p>
    </div>
  );
}
