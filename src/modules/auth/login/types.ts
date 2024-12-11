import { z } from 'zod';
import { authenticateUserSchema } from './authenticate-user.schema';

export type LoginFormType = z.infer<typeof authenticateUserSchema>;

export interface ServerErrorsType {
  email?: string;
  password?: string;
}
