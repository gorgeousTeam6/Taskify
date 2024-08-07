import instance from './axios';
import { SignInForm, SignInResponse } from '@/types/SignInForm.interface';
import { SignUpForm } from '@/types/SignUpForm.interface';
import {
  UploadImageForm,
  UploadImageResponse,
} from '@/types/UploadImageForm.interface';

export const postSignUp = async (formData: SignUpForm) => {
  return await instance.post(`/users`, formData);
};

export const postSignIn = async (
  formData: SignInForm,
): Promise<SignInResponse> => {
  const response = await instance.post<SignInResponse>(`/auth/login`, formData);
  return response.data;
};

export const postImage = async (formData: UploadImageForm) => {
  const response = await instance.post<UploadImageResponse>(
    `/users/me/image`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return response.data;
};
