'use client';
import { useEffect, useState } from 'react';
import { ServerErrorsType, SigninInput, User } from './auth.contact';
import { AuthContext } from './auth.context';
import { authenticateUserService } from '@/shared/services/authenticate-user.service';
import { ReasonsErrors } from '@/shared/constants/reasons-errors.constants';
import { COOKIE_KEY } from '@/shared/constants';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';
import { IToken } from '@/shared/types/middleware.contact';
import { RoleUser } from '@/shared/value-objects/role-user.value-object';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>();
  const [serverErrors, setServerErrors] = useState<ServerErrorsType>();
  const { push } = useRouter();

  useEffect(() => {
    const cookie = getCookie(COOKIE_KEY);
    if (cookie) {
      setUser(jwtDecode(cookie));
    }
  }, []);

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
      const userToken = jwtDecode(result.access_token) as User;
      setUser(userToken);

      if (userToken.role === RoleUser.ADMIN) {
        push('/admin');
      } else {
        push('/');
      }
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
