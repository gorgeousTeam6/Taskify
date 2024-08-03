import Link from 'next/link';
import { IconLogoLarge } from '@/assets/icongroup';
import styles from './TopLogoSection.module.scss';

export default function TopLogoSection({ text }: { text: string }) {
  return (
    <div className={styles.box}>
      <Link href='/'>
        <div className={styles.Image}>
          <IconLogoLarge className='Logo-Image' />
          <p className={styles.text}>{text}</p>
        </div>
      </Link>
    </div>
  );
}
