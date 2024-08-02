import Link from 'next/link';
import SignInForm from '@/containers/sign/SiginInForm';
import TopLogoSection from '@/containers/sign/TopLogoSection';

export default function SignInPage() {
  return (
    <div>
      <div>
        <TopLogoSection text='오늘도 만나서 반가워요!' />
        <SignInForm />
        <p>
          회원이 아니신가요? <Link href='/signup'>회원가입하기</Link>
        </p>
      </div>
    </div>
  );
}
