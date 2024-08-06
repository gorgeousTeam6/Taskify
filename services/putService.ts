import instance from './axios';
import { User } from '@/types/User.interface';
import { UpdatePasswordForm } from '@/types/UpdatePasswordForm.interface';
import { UpdateProfileForm } from '@/types/UpdateProfileForm.interface';

export const putProfile = async (FormData: UpdateProfileForm) => {
  const response = await instance.put<User>(`/user/me`, FormData);
  return response.data;
};

export const putPassword = async (formData: UpdatePasswordForm) => {
  return await instance.put<User>(`/auth/password`, formData);
};

export const verifyPassword = async (password: string) => {
  const response = await instance.post('/auth/verify-password', { password });
  return response.data;
};
