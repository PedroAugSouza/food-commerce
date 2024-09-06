'use client';
import { registerUserAction } from '@/shared/actions/register-user.action';
import { Croissant } from 'lucide-react';
import { useActionState } from 'react';

export const RegisterModule = () => {
  const [result, handle] = useActionState(registerUserAction, null);

  return (
    <form className="flex w-60 flex-col items-center gap-2" action={handle}>
      <Croissant size={100} strokeWidth={1.5} />
      <div className="mt-2 flex flex-col items-start justify-start">
        <label htmlFor="username" className="px-1 text-zinc-700">
          Nome de usuário:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="w-60 rounded-md border border-zinc-400 px-2 py-1 shadow-md outline-none transition-all focus:border-black"
          placeholder="Digite um nome..."
        />
        <span></span>
      </div>
      <div className="flex flex-col items-start justify-start text-zinc-700">
        <label htmlFor="email" className="px-1">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-60 rounded-md border border-zinc-400 px-2 py-1 shadow-md outline-none transition-all focus:border-black"
          placeholder="Digite um nome..."
        />
        <span className="px-1 text-sm text-red-500">{result?.email?.[0]}</span>
      </div>
      <div className="flex flex-col items-start justify-start text-zinc-700">
        <label htmlFor="password" className="px-1">
          Senha:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-60 rounded-md border border-zinc-400 px-2 py-1 shadow-md outline-none transition-all focus:border-black"
          placeholder="Digite uma senha..."
        />
      </div>
      <span className="px-1 text-sm text-red-500">{result?.password?.[0]}</span>
      <div className="flex flex-col items-start justify-start text-zinc-700">
        <label htmlFor="confirmPassword" className="px-1">
          Confirmar senha:
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="w-60 rounded-md border border-zinc-400 px-2 py-1 shadow-md outline-none transition-all focus:border-black"
          placeholder="Confirme sua senhas..."
        />
        <span className="px-1 text-sm text-red-500">
          {result?.confirmPassword?.[0]}
        </span>
      </div>
      <button className="mt-2 w-full rounded-md bg-black py-2 text-center text-white hover:bg-zinc-800">
        Cadastrar
      </button>
      <div className="h-[1px] w-full bg-zinc-300" />
      <p className="text-sm">
        Já posssui cadastro?{' '}
        <strong className="font-medium hover:underline">
          <a href="#">Entre com sua conta</a>
        </strong>
      </p>
    </form>
  );
};
