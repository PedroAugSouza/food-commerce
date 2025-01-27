'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormType } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import { authenticateUserSchema } from './authenticate-user.schema';
import { useAuth } from '@/shared/contexts/auth/useAuth.hook';

export const LoginModule = () => {
  const { signIn, serverErrors } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(authenticateUserSchema),
  });

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    await signIn(data);
  };

  return (
    <form
      className="flex w-60 flex-col items-center gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-start justify-start text-zinc-700">
        <label htmlFor="email" className="px-1">
          Email:
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="w-60 rounded-md border border-zinc-400 px-2 py-1 shadow-md outline-none transition-all focus:border-black"
          placeholder="Digite um nome..."
        />
        <span className="px-1 text-sm text-red-500">
          {errors.email?.message || serverErrors?.email}
        </span>
      </div>
      <div className="flex flex-col items-start justify-start text-zinc-700">
        <label htmlFor="password" className="px-1">
          Senha:
        </label>
        <input
          type="password"
          id="password"
          {...register('password')}
          className="w-60 rounded-md border border-zinc-400 px-2 py-1 shadow-md outline-none transition-all focus:border-black"
          placeholder="Digite uma senha..."
        />
        <span className="px-1 text-sm text-red-500">
          {errors.password?.message || serverErrors?.password}
        </span>
      </div>

      <button className="mt-2 w-full rounded-md bg-black py-2 text-center text-white hover:bg-zinc-800">
        Entrar
      </button>
      <div className="h-[1px] w-full bg-zinc-300" />
      <p className="text-sm">
        Não posssui cadastro?{' '}
        <strong className="font-medium hover:underline">
          <a href="/register">Crie uma nova conta.</a>
        </strong>
      </p>
    </form>
  );
};
