import Image from 'next/image';
import Link from 'next/link';
import IconLogoLarge from '@/assets/icons/ic_logo_large.svg';

export default function TopLogoSection({ text }: { text: string }) {
  return (
    <div>
      <Link href='/'>
        <div>
          <Image
            src={IconLogoLarge}
            alt='로고 이미지'
            className='Logo-Image'
            priority
          />
          <p>{text}</p>
        </div>
      </Link>
    </div>
  );
}
