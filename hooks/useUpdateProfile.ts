// hooks/useUpdateProfile.ts
import { useMutation } from '@tanstack/react-query';
import { useUserStore } from '@/store/useUserStore';
import { putProfile } from '@/services/putService';
import { UpdateProfileForm } from '@/types/UpdateProfileForm.interface';
import { User } from '@/types/User.interface';

export const useUpdateProfile = () => {
  const { setUser, setLoading, setError } = useUserStore();

  return useMutation<User, unknown, UpdateProfileForm>({
    mutationFn: putProfile,
    onMutate: () => {
      setLoading(true);
      setError(null);
      // 필요한 경우, 이전 상태를 저장하거나 다른 작업을 수행할 수 있음
      return null; // 반환 값은 나중에 revert 함수에서 사용할 수 있음
    },
    onSuccess: (user) => {
      // accessToken을 `localStorage`에서 가져온다고 가정
      const accessToken = localStorage.getItem('accessToken') || '';

      // 두 개의 인수 전달
      setUser(user, accessToken);
      setLoading(false);
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('알 수 없는 오류가 발생했습니다.');
      }
      setLoading(false);
    },
  });
};
