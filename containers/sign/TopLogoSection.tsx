import Link from 'next/link';
import BigLogo from '@/assets/logos/BigLogo.svg';
import styles from './TopLogoSection.module.scss';

export default function TopLogoSection({ text }: { text: string }) {
  return (
    <div className={styles.box}>
      <Link href='/'>
        <div className={styles.Image}>
          <BigLogo className='Logo-Image' />
          <p className={styles.text}>{text}</p>
        </div>
      </Link>
    </div>
  );
}
