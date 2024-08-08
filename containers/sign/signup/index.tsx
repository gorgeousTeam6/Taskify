import Link from 'next/link';
import SignUpForm from '@/containers/sign/SiginUpForm';
import TopLogoSection from '@/containers/sign/TopLogoSection';
import styles from '../signin/index.module.scss';

export default function SignUp() {
  return (
    <div className={styles[`box`]}>
      <div className={styles[`login`]}>
        <TopLogoSection text='첫 방문을 환영합니다!' />
        <SignUpForm />
        <p className={styles[`member`]}>
          이미 가입하셨나요?{' '}
          <Link
            href='/signin'
            className={`${styles[`link`]} ${styles[`underline`]}`}
          >
            로그인하기
          </Link>
        </p>
      </div>
    </div>
  );
}
