'use client';

import { Divider } from '@/shared/components/divider';
import { useAuth } from '@/shared/contexts/auth/useAuth.hook';
import { LogOut, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import colors from 'tailwindcss/colors';

export const Sidebar = () => {
  const { user, signOut } = useAuth();
  const { push } = useRouter();

  return (
    <section className="flex h-full w-full max-w-60 flex-col items-center justify-start bg-zinc-900 p-2 text-sm text-white">
      {/* Title */}
      <button className="font flex w-full items-start justify-start italic text-zinc-400">
        Food Commerce
      </button>
      <Divider color={colors.zinc[500]} />
      {/* Items */}
      <div className="mt-2 flex w-full grow flex-col items-center justify-start gap-2 text-zinc-200">
        <button className="w-full rounded px-2 py-1 text-start hover:bg-zinc-800 hover:text-white">
          Produtos
        </button>
      </div>

      <button
        className="my-2 h-8 w-full rounded-md bg-zinc-700 transition-all hover:bg-zinc-600"
        onClick={() => push('/')}
      >
        Página inicial
      </button>
      {/* Fast settings user profile */}
      <div className="flex h-12 w-full items-center gap-2 rounded-md bg-zinc-700 px-2">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-zinc-600">
          <User size={18} />
        </div>
        <div className="flex flex-1 flex-col items-start justify-start">
          <div className="flex items-center justify-between">
            <span className="flex-1 text-sm text-zinc-200">
              {user?.username}
            </span>
          </div>
          <span className="text-xs text-zinc-300">
            {user?.role.toLocaleLowerCase()}
          </span>
        </div>
        <button className="pr-2" onClick={signOut}>
          <LogOut size={16} />
        </button>
      </div>
    </section>
  );
};
