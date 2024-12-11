import { z } from 'zod';

export const authenticateUserSchema = z.object({
  email: z.string().email('Digite um email válido.'),
  password: z.string(),
});
