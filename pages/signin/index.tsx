import Link from 'next/link';
import SignInForm from '@/containers/sign/SiginInForm';
import TopLogoSection from '@/containers/sign/TopLogoSection';
import styles from './index.module.scss';

export default function SignInPage() {
  return (
    <div className={styles.box}>
      <div className={styles.login}>
        <TopLogoSection text='오늘도 만나서 반가워요!' />
        <SignInForm />
        <p className={styles.member}>
          회원이 아니신가요?{' '}
          <Link href='/signup' className={`${styles.link} ${styles.underline}`}>
            회원가입하기
          </Link>
        </p>
      </div>
    </div>
  );
}
