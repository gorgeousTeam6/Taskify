import axios from 'axios';
import { useUserStore } from '@/store/useUserStore';

const instance = axios.create({
  baseURL: 'https://sp-taskify-api.vercel.app/7-6',
});

instance.interceptors.request.use((config) => {
  // Zustand 상태를 직접 가져오기 위해 useUserStore를 사용
  const { accessToken } = useUserStore.getState();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default instance;
