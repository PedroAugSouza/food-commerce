import { api } from '../lib/axios';
import { getSession } from '../utils/get-session';

export const saveProductService = async (input: FormData) => {
  try {
    await api.post('/product', input, {
      headers: {
        Authorization: `Bearer ${getSession()?.access_token}`,
      },
    });
  } catch (error) {
    return error;
  }
};
