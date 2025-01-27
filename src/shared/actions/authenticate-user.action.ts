'use server';

import { ReasonsErrors } from '../constants/reasons-errors.constants';
import { authenticateUserService } from '../services/authenticate-user.service';
import { authenticateUserSchema } from './authenticate-user.schema';

export const AuthenticateUserAction = async (_: unknown, form: FormData) => {
  const result = authenticateUserSchema.safeParse(Object.fromEntries(form));

  if (!result.success) {
    return result.error.flatten().fieldErrors;
  }

  const response = await authenticateUserService({
    ...result.data,
  });

  if (response.response) {
    if (response.response.reason) {
      if ((response.reason = ReasonsErrors.USER_NOT_FOUND)) {
        return {
          email: ['Este usário não existe'],
        };
      }
      if ((response.response.reason = ReasonsErrors.PASSWORD_DOES_NOT_MATCH)) {
        return {
          password: ['A senha está incorreta'],
        };
      }
    } else {
      if (response.access_token) {
        return response.access_token;
      }
    }
  }
};
