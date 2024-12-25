'use client';
import { Divider } from '@/shared/components/divider';
import * as Select from '@radix-ui/react-select';
import * as Dialog from '@radix-ui/react-dialog';
import { ChevronDown, ChevronUp, ListFilter } from 'lucide-react';
import { ProductFormModal } from '../components/product-form-modal';

export const AdminModule = () => {
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

            <button className="h-10 rounded-md border-2 border-zinc-900 px-3 text-zinc-900 transition-all duration-300 hover:shadow-md hover:shadow-zinc-300">
              Selecionar
            </button>
          </div>
        </header>
        <Divider />
        <div className="flex w-full items-center justify-start gap-2">
          <Select.Root>
            <Select.Trigger className="flex w-24 items-center justify-between rounded-full border border-zinc-300 bg-zinc-900 px-2 py-0.5 text-sm text-white">
              <Select.Value placeholder="Categoria" />
              <Select.Icon>
                <ChevronDown size={18} />
              </Select.Icon>
            </Select.Trigger>

            <Select.Content
              className="w-[98px] overflow-hidden rounded-md border border-zinc-300 bg-white text-sm text-black"
              side="bottom"
            >
              <Select.Viewport className="p-0.5">
                <Select.Group className="item-center flex flex-col gap-1">
                  <Select.Item
                    className="cursor-pointer rounded px-2 outline-none hover:bg-zinc-300"
                    value="food"
                  >
                    <Select.ItemText>Comida</Select.ItemText>
                  </Select.Item>
                  <Select.Item
                    className="cursor-pointer rounded px-2 outline-none hover:bg-zinc-300"
                    value="bebida"
                  >
                    <Select.ItemText>Bebida</Select.ItemText>
                  </Select.Item>
                  <Select.Item
                    className="cursor-pointer rounded px-2 outline-none hover:bg-zinc-300"
                    value="combo"
                  >
                    <Select.ItemText>Combo</Select.ItemText>
                  </Select.Item>
                </Select.Group>
              </Select.Viewport>
            </Select.Content>
          </Select.Root>
          <Select.Root>
            <Select.Trigger className="flex w-28 items-center justify-between rounded-full border border-zinc-300 bg-zinc-900 px-2 py-0.5 text-sm text-white">
              <Select.Value placeholder="Valor" />
              <Select.Icon>
                <ChevronDown size={18} />
              </Select.Icon>
            </Select.Trigger>

            <Select.Content
              className="w-28 overflow-hidden rounded-md border border-zinc-300 bg-white text-sm text-black"
              side="bottom"
            >
              <Select.Viewport className="p-0.5">
                <Select.Group className="item-center flex flex-col gap-1">
                  <Select.Item
                    className="cursor-pointer rounded px-2 outline-none hover:bg-zinc-300"
                    value="asc"
                  >
                    <Select.ItemText>
                      <div className="flex items-center gap-1">
                        <span>Valor</span>
                        <ChevronDown size={18} />
                      </div>
                    </Select.ItemText>
                  </Select.Item>
                  <Select.Item
                    className="cursor-pointer rounded px-2 outline-none hover:bg-zinc-300"
                    value="desc"
                  >
                    <Select.ItemText>
                      <div className="flex items-center gap-1">
                        <span>Valor</span>
                        <ChevronUp size={18} />
                      </div>
                    </Select.ItemText>
                  </Select.Item>
                </Select.Group>
              </Select.Viewport>
            </Select.Content>
          </Select.Root>
          <button className="rounded-full border border-zinc-900 px-1 hover:bg-zinc-100">
            <ListFilter size={18} />
          </button>
        </div>
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
          <div className="flex h-10 w-full cursor-pointer items-center rounded-md border border-transparent bg-zinc-100 p-2 transition-all duration-200 hover:border-zinc-300">
            {/* <div className="h-4 w-4 rounded border-2 border-zinc-300" /> */}
            <h1 className="mx-2 text-zinc-700">1</h1>
            <div className="ml-2 w-44 truncate text-sm text-zinc-700">
              <h1 className="truncate">Nome do produto</h1>
            </div>
            <div className="ml-2 w-60 truncate text-sm font-light italic text-zinc-500">
              <span className="truncate">
                Breve descrição de um breve produto que compõe
              </span>
            </div>
            <div className="mr-2 flex flex-1 items-center justify-end text-sm text-zinc-700">
              <div className="w-20 text-center">
                <span>R$19,90</span>
              </div>
              <div className="w-20 text-center">
                <span> - </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="size-80 border">Dashboard</section>
    </div>
  );
};
