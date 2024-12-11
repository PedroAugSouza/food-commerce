import { api } from '../lib/axios';
import { InputRegisterUser } from './register-user.contact';

export const registerUserService = async (input: InputRegisterUser) => {
  const response = await api.post('/register', { ...input, role: 'COMMOM' });

  return response.data;
};
