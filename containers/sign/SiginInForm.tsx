import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Button from '@/components/Button';
import PwdLabel from '@/containers/sign/PwdLabel';
import TextInputLabel from '@/containers/sign/TextInputLabel';
import { useSignIn } from '@/hooks/useSignIn';
import { useUserStore } from '@/store/useUserStore';
import styles from './SignForm.module.scss';

export type TSignInInputs = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('유효한 이메일 주소를 입력해주세요.')
    .required('이메일을 입력해주세요.'),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .min(8, '비밀번호는 최소 8자 이상이어야 합니다.'),
});

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TSignInInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const mutation = useSignIn();
  const router = useRouter();

  // Zustand store의 상태를 조회
  const user = useUserStore((state) => state.user);
  const error = useUserStore((state) => state.error);

  const onSubmit = (data: TSignInInputs) => {
    mutation.mutate(data, {
      onSuccess: () => {
        router.push('/mydashboard');
      },
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <TextInputLabel
        id='email'
        label='이메일'
        placeholder='이메일을 입력해 주세요'
        error={errors.email?.message}
        register={register}
      />
      <PwdLabel
        id='password'
        label='비밀번호'
        placeholder='비밀번호를 입력해 주세요'
        error={errors.password?.message}
        register={register}
      />
      <div className='h'>
        <Button buttonType='login' disabled={mutation.isPending || !isValid}>
          {mutation.isPending ? '잠시만 기다려주세요..' : '로그인'}
        </Button>
      </div>
      {mutation.isError && (
        <p>
          Error:{' '}
          {mutation.error instanceof Error
            ? mutation.error.message
            : '알 수 없는 오류가 발생했습니다.'}
        </p>
      )}
      {user && (
        <p>
          로그인 성공: {user.nickname} ({user.id})
        </p>
      )}
      {error && <p>오류: {error}</p>}
    </form>
  );
}
