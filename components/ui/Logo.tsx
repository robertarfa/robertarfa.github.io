import Link from 'next/link';
import Image from 'next/image';
import logo from '@/layout/logo.svg';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`text-2xl font-bold text-orange-500 no-underline ${className}`}>
      <Image src={logo} alt="CollabTranslation Logo" width={150} height={50} />
    </Link>
  );
}
