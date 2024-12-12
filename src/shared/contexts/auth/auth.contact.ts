import { RoleUser } from '@/shared/value-objects/role-user.value-object';

export interface AuthContextProps {
  signIn(input: SigninInput): Promise<void>;
  signOut(): void;
  serverErrors?: ServerErrorsType;
  user?: User;
}

export interface SigninInput {
  email: string;
  password: string;
}

export interface User {
  email: string;
  username: string;
  role: RoleUser;
  uuid: string;
}
export interface ServerErrorsType {
  email?: string;
  password?: string;
}
