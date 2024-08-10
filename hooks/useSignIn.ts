// src/hooks/useSignIn.ts
import { useMutation } from '@tanstack/react-query';
import { useUserStore } from '@/store/useUserStore';
import { User } from '@/types/User.interface';
import { SignInError } from './SignInError';

interface SignInResponse {
  user: {
    nickname: string;
    id: number;
    email: string;
    profileImageUrl?: string | null;
    createdAt?: string;
    updatedAt?: string;
  };
  accessToken: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

const signIn = async (
  credentials: SignInCredentials,
): Promise<SignInResponse> => {
  const response = await fetch(
    'https://sp-taskify-api.vercel.app/7-6/auth/login',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    },
  );

  if (!response.ok) {
    const error = new SignInError('Login failed', response);
    throw error;
  }

  const data: SignInResponse = await response.json();
  localStorage.setItem('accessToken', data.accessToken);

  return data;
};

export const useSignIn = () => {
  const setUser = useUserStore((state) => state.setUser);
  const setLoading = useUserStore((state) => state.setLoading);
  const setError = useUserStore((state) => state.setError);

  return useMutation<SignInResponse, SignInError, SignInCredentials>({
    mutationFn: signIn,
    onMutate: () => {
      setLoading(true);
      setError(null);
    },
    onSuccess: (data) => {
      const user: User = {
        ...data.user,
        createdAt: data.user.createdAt || '',
        updatedAt: data.user.updatedAt || '',
      };
      setUser(user, data.accessToken);
      setLoading(false);
    },
    onError: (error: SignInError) => {
      let errorMessage = '로그인에 실패했습니다. 다시 시도해주세요.';

      if (error.response) {
        if (error.response.status === 404) {
          errorMessage = '존재하지 않는 유저입니다.';
        } else if (error.response.status === 400) {
          errorMessage = '이메일 형식으로 작성해주세요.';
        }
      } else if (error.message) {
        errorMessage = error.message;
      }

      setError(errorMessage);
      setLoading(false);
    },
  });
};
