import { User } from './User.interface';

export interface SignInForm {
  email: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
  user: User;
}
