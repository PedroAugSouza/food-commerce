export interface Session {
  sub: string;
  username: string;
  email: string;
  role: string;
  access_token: string;
}
export type Token = Omit<Session, 'access_token'>;
