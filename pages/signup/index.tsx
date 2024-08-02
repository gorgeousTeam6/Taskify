import Link from 'next/link';
import SignUpForm from '@/containers/sign/SiginUpForm';
import TopLogoSection from '@/containers/sign/TopLogoSection';

export default function SignUp() {
  return (
    <div>
      <div>
        <TopLogoSection text='첫 방문을 환영합니다!' />
        <SignUpForm />
        <p>
          이미 가입하셨나요? <Link href='/signin'>로그인하기</Link>
        </p>
      </div>
    </div>
  );
}
