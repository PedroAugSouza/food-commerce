'use client';
import { Divider } from '@/shared/components/common/divider';
import * as Dialog from '@radix-ui/react-dialog';
import { ProductFormModal } from '../components/product-form/product-form.component';
import useSWR from 'swr';
import { IProducts } from '@/shared/types/products.contact';
import { fetchApi } from '@/shared/utils/fetchApi';
import { getSession } from '@/shared/utils/get-session';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/shared/components/shadcn/popover';

export const AdminModule = () => {
  const { data: products } = useSWR<IProducts[]>(
    '/products',
    async (path: string) => {
      const result = await fetchApi<IProducts[]>(
        'get',
        path,
        getSession()!.access_token,
      );

      return result;
    },
  );

  return (
    <div className="flex h-full w-full flex-row items-start justify-center">
      <section className="flex h-full flex-1 flex-col items-center justify-start gap-2 px-12 pt-12">
        <header className="flex w-full items-center justify-between">
          <h1 className="text-3xl font-bold text-black">Produtos</h1>
          <div className="flex items-center gap-2">
            <Dialog.Root>
              <Dialog.Trigger className="h-10 rounded-md bg-zinc-900 px-3 text-white transition-all duration-300 hover:shadow-md hover:shadow-zinc-300">
                Adicionar
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-zinc-900/20 backdrop-blur-[1px]" />
                <ProductFormModal />
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </header>
        <Divider />

        <div className="mt-2 flex w-full items-center pr-2 text-sm text-zinc-500">
          <span className="mx-2">Ord</span>
          <span className="ml-2 w-44">Nome</span>
          <span className="ml-2 w-60">Descrição</span>
          <div className="flex flex-1 items-end justify-end">
            <span className="w-20 text-center">Preço</span>
            <span className="mr-2 w-20 text-center">Off</span>
          </div>
        </div>

        <div className="flex w-full grow flex-col items-center justify-start overflow-auto">
          {products?.map(({ name, description, price }, index) => (
            <div
              className="flex h-10 w-full cursor-pointer items-center rounded-md border border-transparent bg-zinc-100 p-2 transition-all duration-200 hover:border-zinc-300"
              key={index}
            >
              <h1 className="mx-2 text-zinc-700">{index + 1}</h1>
              <div className="ml-2 w-44 truncate text-sm text-zinc-700">
                <h1 className="truncate">{name}</h1>
              </div>
              <div className="ml-2 w-60 truncate text-sm font-light italic text-zinc-500">
                <span className="truncate">{description}</span>
              </div>
              <div className="mr-2 flex flex-1 items-center justify-end text-sm text-zinc-700">
                <div className="w-20 text-center">
                  <span>{price}</span>
                </div>
                <div className="w-20 text-center">
                  <span> - </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
