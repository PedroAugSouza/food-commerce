import { Search, ShoppingCart, User } from 'lucide-react';
import colors from 'tailwindcss/colors';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/components/shadcn/drawer';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 grid w-full place-items-center bg-white py-3 text-zinc-700 backdrop-blur-sm">
      <div className="flex w-full max-w-6xl flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-4">
          <span className="cursor-pointer border-b-2 border-transparent transition-all duration-200 hover:border-zinc-700">
            Página inicial
          </span>
          <span className="cursor-pointer border-b-2 border-transparent transition-all duration-200 hover:border-zinc-700">
            Cardápio
          </span>
          <span className="cursor-pointer border-b-2 border-transparent transition-all duration-200 hover:border-zinc-700">
            Promoções
          </span>
          <span className="cursor-pointer border-b-2 border-transparent transition-all duration-200 hover:border-zinc-700">
            Sobre nós
          </span>
        </div>

        <div className="flex h-10 w-96 flex-row items-center gap-2 rounded-md border border-transparent bg-zinc-100 px-2 transition-all hover:border-zinc-300">
          <Search size={18} color={colors.zinc[500]} />
          <input
            type="text"
            className="h-full flex-1 bg-transparent outline-none placeholder:italic"
            placeholder="Pesquisar..."
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="flex h-10 items-center gap-1 rounded-md border border-transparent bg-zinc-100 px-2 text-zinc-700 hover:border-zinc-300">
            <User size={20} />
            <span>Conta</span>
          </button>

          <Drawer
            shouldScaleBackground={true}
            setBackgroundColorOnScale={false}
          >
            <DrawerTrigger className="relative flex h-10 items-center gap-1 rounded-md border border-transparent bg-zinc-100 px-2 text-zinc-700 hover:border-zinc-300">
              <div className="absolute -right-1 -top-1 grid size-2.5 place-items-center rounded-full bg-red-500 before:size-2.5 before:rounded-full before:bg-red-500 before:blur-sm" />
              <ShoppingCart size={20} />
              <span>1</span>
            </DrawerTrigger>

            <DrawerContent>
              <DrawerTitle>Carrinho</DrawerTitle>
              <div className="h-96">
                <span>produtos do carrinho</span>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};
