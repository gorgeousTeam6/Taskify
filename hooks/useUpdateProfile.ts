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
      return null;
    },
    onSuccess: (user) => {
      console.log('User after update:', user); // 확인을 위한 로그
      const accessToken = localStorage.getItem('accessToken') || '';
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
