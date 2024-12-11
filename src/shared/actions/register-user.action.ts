'use server';
import { redirect } from 'next/navigation';
import { registerUserService } from '../services/register-user.service';
import { registerUserSchema } from './register-user.schema';
import { ReasonsErrors } from '../constants/reasons-errors.constants';

export const registerUserAction = async (_: unknown, form: FormData) => {
  const result = registerUserSchema.safeParse(Object.fromEntries(form));
  

  if (!result.success) {
    return result.error.flatten().fieldErrors;
  }

  const response = await registerUserService({
    email: result.data.email,
    username: result.data.username,
    password: result.data.password,
  });

  if (response) {
    if (response.reason === ReasonsErrors.USER_ALREADY_EXIST) {
      return {
        email: ['Este usário já existe'],
      };
    }
  }
  redirect('/login');
};
