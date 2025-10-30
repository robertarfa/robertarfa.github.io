import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link
      href='/'
      className={`navbar-brand text-primary-orange fw-bold ${className}`}
      style={{ lineHeight: 0 }}
    >
      <Image
        src='/layout/logo.svg'
        alt='CollabTranslation Logo'
        width={220}
        height={60}
        style={{ display: 'block' }}
      />
    </Link>
  );
}
