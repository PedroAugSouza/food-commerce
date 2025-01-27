import { api } from '../lib/axios';
import { InputAuthenticateUser } from './authenticate-user.contact';

export const authenticateUserService = async (input: InputAuthenticateUser) => {
  try {
    const result = await api.post('/login', input);
    return result.data;
  } catch (error) {
    return error;
  }
};
