import { API_URL } from '../constants';
import { api } from '../lib/axios';
import { InputRegisterUser } from './register-user.contracts';

export const registerUserService = async (input: InputRegisterUser) => {
  const response = await api.post('/register', { ...input, role: 'COMMOM' });

  return response.data;
};
