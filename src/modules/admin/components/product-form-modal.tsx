'use client';
import { InputFile } from '@/shared/components/input-file';
import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';
import { ChevronDown, X } from 'lucide-react';

export const ProductFormModal = () => {
  return (
    <Dialog.Content className="fixed left-1/2 top-1/2 flex max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-md border border-zinc-400 bg-white p-2 outline-none">
      <header className="flex w-full items-center justify-between">
        <Dialog.Title>Adicionar produto</Dialog.Title>
        <Dialog.Close className="text-zinc-800 hover:text-red-400">
          <X size={18} className="transition-all duration-200" />
        </Dialog.Close>
      </header>
      <main className="flex w-full flex-col items-center justify-start gap-3 p-4">
        <InputFile />

        <div className="flex h-max w-full flex-col items-start justify-start">
          <span className="ml-1 text-sm">Nome</span>
          <input
            type="text"
            placeholder="Digite o nome do produto."
            className="h-8 w-full rounded border border-zinc-900 px-2 text-sm outline-none"
          />
        </div>
        <div className="flex h-max w-full flex-col items-start justify-start">
          <span className="ml-1 text-sm">Descrição</span>
          <textarea
            placeholder="Informe a descrição do produto."
            rows={4}
            className="w-full resize-none rounded border border-zinc-900 px-2 text-sm outline-none"
          />
        </div>

        <Select.Root>
          <div className="flex h-max w-full flex-col items-start justify-start">
            <span className="ml-1 text-sm">Categoria</span>
            <Select.Trigger className="flex h-8 w-full items-center justify-between rounded border border-zinc-900 px-2 text-sm text-zinc-900">
              <Select.Value placeholder="Selecione uma categoria" />
              <Select.Icon>
                <ChevronDown size={18} />
              </Select.Icon>
            </Select.Trigger>
          </div>
          <Select.Portal>
            <Select.Content
              className="w-[calc(100%+1px)] overflow-hidden rounded-md border border-zinc-300 bg-white p-2 text-sm text-black"
              side="bottom"
            >
              <Select.Viewport>
                <Select.Group className="item-center flex w-full flex-col gap-1 *:cursor-pointer">
                  <Select.Item
                    value="food"
                    className="rounded px-2 py-1 hover:bg-zinc-200"
                  >
                    <Select.ItemText>Comida</Select.ItemText>
                    {/* <Select.Icon></Select.Icon> */}
                  </Select.Item>
                  <Select.Item
                    value="drink"
                    className="rounded px-2 py-1 hover:bg-zinc-200"
                  >
                    <Select.ItemText>Bebida</Select.ItemText>
                    {/* <Select.Icon></Select.Icon> */}
                  </Select.Item>
                  <Select.Item
                    value="Combo"
                    className="rounded px-2 py-1 hover:bg-zinc-200"
                  >
                    <Select.ItemText>Combo</Select.ItemText>
                    {/* <Select.Icon></Select.Icon> */}
                  </Select.Item>
                </Select.Group>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
        <div className="flex h-max w-full flex-col items-start justify-start">
          <span className="ml-1 text-sm">Preço</span>
          <div className="flex w-full items-center gap-1">
            <span className="text-sm">R$:</span>
            <input
              type="text"
              placeholder="Adicione o preço do produto."
              className="h-8 flex-1 rounded border border-zinc-900 px-2 text-sm outline-none"
            />
          </div>
        </div>

        <div className="flex w-full items-center justify-end gap-2">
          <Dialog.Close className="rounded bg-red-500 px-2 py-1 text-white">
            Cancelar
          </Dialog.Close>
          <button className="rounded bg-emerald-500 px-2 py-1 text-white">
            Salvar
          </button>
        </div>
      </main>
    </Dialog.Content>
  );
};
