import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ className = '', size = 160, unlinked = false }) {
  const img = (
    <Image
      src="/images/maas-clean-logo.png"
      alt="MAAS CLEAN"
      width={size}
      height={size}
      priority
      className="h-auto w-auto object-contain"
      style={{ maxWidth: size }}
    />
  );

  if (unlinked) {
    return <div className={className}>{img}</div>;
  }

  return (
    <Link
      href="/"
      aria-label="MAAS CLEAN – Home"
      className={className}
    >
      {img}
    </Link>
  );
}
