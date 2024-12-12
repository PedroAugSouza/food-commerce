'use client';
import { useState } from 'react';
import { ServerErrorsType, SigninInput, User } from './auth.contact';
import { AuthContext } from './auth.context';
import { authenticateUserService } from '@/shared/services/authenticate-user.service';
import { ReasonsErrors } from '@/shared/constants/reasons-errors.constants';
import { COOKIE_KEY } from '@/shared/constants';
import { deleteCookie, setCookie } from 'cookies-next';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>();
  const [serverErrors, setServerErrors] = useState<ServerErrorsType>();

  const signIn = async (input: SigninInput) => {
    const result = await authenticateUserService({ ...input });
    if (result.response) {
      if (
        result.response.data.reason === ReasonsErrors.PASSWORD_DOES_NOT_MATCH
      ) {
        setServerErrors((previousValue) => ({
          ...previousValue,
          password: 'Senha está incorreta',
        }));
      } else if (result.response.data.reason === ReasonsErrors.USER_NOT_FOUND) {
        setServerErrors((previousValue) => ({
          ...previousValue,
          email: 'Usuário não encontrado',
        }));
      }
    } else {
      setCookie(COOKIE_KEY, result.access_token);
    }
  };

  const signOut = () => {
    deleteCookie(COOKIE_KEY);
    setUser(undefined);
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, serverErrors }}>
      {children}
    </AuthContext.Provider>
  );
};
