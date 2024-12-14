'use client';

import { Divider } from '@/shared/components/divider';
import { useAuth } from '@/shared/contexts/auth/useAuth.hook';
import { User } from 'lucide-react';
import colors from 'tailwindcss/colors';

export const Sidebar = () => {
  const { user } = useAuth();

  return (
    <section className="flex h-full w-full max-w-60 flex-col items-center justify-start bg-zinc-900 p-2 text-sm text-white">
      {/* Title */}
      <button className="font flex w-full items-start justify-start italic text-zinc-400">
        Food Commerce
      </button>
      <Divider color={colors.zinc[500]} />
      {/* Itens */}
      <div className="mt-2 flex w-full grow flex-col items-center justify-start gap-2 text-zinc-200">
        <button className="w-full rounded px-2 py-1 text-start hover:bg-zinc-800 hover:text-white">
          Produtos
        </button>
      </div>
      {/* Fast settings user profile */}
      <div className="flex h-12 w-full items-center gap-2 rounded-md bg-zinc-700 px-2">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-zinc-600">
          <User size={18} />
        </div>
        <div className="flex flex-1 flex-col items-start justify-start">
          <div className="flex w-full items-center justify-between">
            <span className="flex-1 text-sm text-zinc-200">
              {user?.username}
            </span>
            <div className="mr-2 h-2 w-2 rounded-full border border-zinc-500 bg-emerald-500" />
          </div>
          <span className="text-xs text-zinc-300">
            {user?.role.toLocaleLowerCase()}
          </span>
        </div>
      </div>
    </section>
  );
};
