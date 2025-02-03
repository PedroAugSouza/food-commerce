import { getSession } from '../utils/get-session';

export const DEFAULT_OPTIONS_QUERY = {
  axios: {
    headers: {
      Authorization: `Bearer ${getSession()!.access_token}`,
    },
  },
};
