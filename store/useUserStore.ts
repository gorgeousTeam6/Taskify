// src/store/useUserStore.ts
import create from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  user: { nickname: string; id: number } | null;
  accessToken: string | null;
  loading: boolean;
  error: string | null;
  setUser: (
    user: { nickname: string; id: number },
    accessToken: string,
  ) => void;
  clearUser: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      loading: false,
      error: null,
      setUser: (user, accessToken) => set({ user, accessToken }),
      clearUser: () => set({ user: null, accessToken: null }),
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
    }),
    {
      name: 'user-storage', // 로컬 스토리지에 저장될 항목의 이름
    },
  ),
);
