import instance from './axios';
import { SignInForm, SignInResponse } from '@/types/SignInForm.interface';
import { SignUpForm } from '@/types/SignUpForm.interface';

export const postSignUp = async (formData: SignUpForm) => {
  return await instance.post(`/users`, formData);
};

export const postSignIn = async (
  formData: SignInForm,
): Promise<SignInResponse> => {
  const response = await instance.post<SignInResponse>(`/auth/login`, formData);
  return response.data;
};
