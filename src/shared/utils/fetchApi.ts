import { api } from '../lib/axios';

export const fetchApi = async <T>(
  method: 'post' | 'get' | 'patch' | 'put' | 'delete',
  endpoint: string,
  token: string,
  data?: any,
): Promise<T> => {
  const response = await api[method](endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...(data && { data }),
  });
  return response.data as T | any;
};
