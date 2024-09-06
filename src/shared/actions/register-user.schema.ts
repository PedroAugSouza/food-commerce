import { z } from 'zod';

export const registerUserSchema = z
  .object({
    username: z.string(),
    email: z.string().endsWith('.com', 'Este email não é válido'),
    password: z
      .string()
      .min(6, 'Senha precisa conter mais de 6 caracteres')
      .regex(/^(?=.*[A-Za-z])(?=.*\d)/, 'Senha deve conter letras e números'),
    confirmPassword: z.string(),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        path: ['confirmPassword'],
        message: 'As senhas devem ser iguais',
        code: 'custom',
      });
    }
  });
