import { getCookie } from 'cookies-next';
import { COOKIE_KEY } from '../constants';
import { jwtDecode } from 'jwt-decode';
import { Session, Token } from './get-session.contact';

export const getSession = () => {
  const cookie = getCookie(COOKIE_KEY);

  if (cookie) {
    const token = jwtDecode(cookie) as Token;
    return {
      sub: token.sub,
      username: token.username,
      email: token.email,
      role: token.role,
      access_token: cookie,
    } as Session;
  }
};
