/* eslint-disable @next/next/no-img-element */
'use client';

import { Footer } from '@/shared/components/common/footer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/shared/components/shadcn/carousel';
import { DEFAULT_OPTIONS_QUERY } from '@/shared/http/default-options';
import { useFilterProductControllerHandle } from '@/shared/http/http';
import { ChevronRight, Plus } from 'lucide-react';

export const HomePageModule = () => {
  const { data, error } = useFilterProductControllerHandle(
    {
      category: 'DRINK',
      price: '',
    },
    DEFAULT_OPTIONS_QUERY,
  );

  return (
    <main className="flex h-screen flex-col items-center justify-start pt-16">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem className="grid h-96 w-full place-items-center bg-yellow-200">
            1
          </CarouselItem>
          <CarouselItem className="grid h-96 w-full place-items-center bg-blue-200">
            2
          </CarouselItem>
          <CarouselItem className="grid h-96 w-full place-items-center bg-red-400">
            3
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <section className="mt-6 flex w-full max-w-6xl flex-col items-start justify-start gap-2">
        <header className="flex w-full items-center justify-between text-zinc-500">
          <span className="border-b border-zinc-400">Ofertas</span>
          <button className="flex items-center gap-2 rounded border border-transparent bg-zinc-100 px-2 py-1 transition-all duration-200 hover:border-zinc-300">
            <span>Ver todos</span>
            <ChevronRight size={18} />
          </button>
        </header>
        <div className="relative flex w-full items-center gap-2 overflow-hidden before:absolute before:right-0 before:h-full before:w-8 before:bg-gradient-to-l before:from-white before:to-transparent">
          {data?.data?.map((product, index) => (
            <div
              key={index}
              className="flex w-[168px] flex-none flex-col items-start justify-start rounded-lg bg-zinc-100 p-3"
            >
              <figure className="grid size-36 place-items-center rounded-md bg-zinc-200 text-zinc-400">
                <img
                  src={`http://localhost:8000${product.image}`}
                  alt=""
                  className="h-full w-full"
                />
              </figure>
              <div className="mt-1 w-full truncate">
                <span className="truncate">{product.name}</span>
              </div>
              <div className="w-full truncate text-sm text-zinc-600">
                <span className="truncate">{product.price}</span>
              </div>
              <button className="mt-3 grid h-8 w-full place-items-center rounded-md bg-green-500 text-white">
                <Plus />
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-20 flex w-full max-w-6xl flex-col items-start justify-start gap-2">
        <header className="flex w-full items-center justify-between text-zinc-500">
          <span className="border-b border-zinc-400">Bebidas</span>
          <button className="flex items-center gap-2 rounded border border-transparent bg-zinc-100 px-2 py-1 transition-all duration-200 hover:border-zinc-300">
            <span>Ver todos</span>
            <ChevronRight size={18} />
          </button>
        </header>
        <div className="relative flex w-full items-center gap-2 overflow-hidden before:absolute before:right-0 before:h-full before:w-8 before:bg-gradient-to-l before:from-white before:to-transparent">
          {data?.data.map(
            (product, index) =>
              product.category === 'DRINK' && (
                <div
                  key={index}
                  className="flex w-[168px] flex-none flex-col items-start justify-start rounded-lg bg-zinc-100 p-3"
                >
                  <figure className="grid size-36 place-items-center rounded-md bg-zinc-200 text-zinc-400">
                    <img
                      src={`http://localhost:8000${product.image}`}
                      alt=""
                      className="h-full w-full"
                    />
                  </figure>
                  <div className="mt-1 w-full truncate">
                    <span className="truncate">{product.name}</span>
                  </div>
                  <div className="w-full truncate text-sm text-zinc-600">
                    <span className="truncate">{product.price}</span>
                  </div>
                  <button className="mt-3 grid h-8 w-full place-items-center rounded-md bg-green-500 text-white">
                    <Plus />
                  </button>
                </div>
              ),
          )}
        </div>
      </section>
      <section className="mt-20 flex w-full max-w-6xl flex-col items-start justify-start gap-2">
        <header className="flex w-full items-center justify-between text-zinc-500">
          <span className="border-b border-zinc-400">Comidas</span>
          <button className="flex items-center gap-2 rounded border border-transparent bg-zinc-100 px-2 py-1 transition-all duration-200 hover:border-zinc-300">
            <span>Ver todos</span>
            <ChevronRight size={18} />
          </button>
        </header>
        <div className="relative flex w-full items-center gap-2 overflow-hidden before:absolute before:right-0 before:h-full before:w-8 before:bg-gradient-to-l before:from-white before:to-transparent">
          {data?.data?.map(
            (product, index) =>
              product.category === 'FOOD' && (
                <div
                  key={index}
                  className="flex w-[168px] flex-none flex-col items-start justify-start rounded-lg bg-zinc-100 p-3"
                >
                  <figure className="grid size-36 place-items-center rounded-md bg-zinc-200 text-zinc-400">
                    <img
                      src={`http://localhost:8000${product.image}`}
                      alt=""
                      className="h-full w-full"
                    />
                  </figure>
                  <div className="mt-1 w-full truncate">
                    <span className="truncate">{product.name}</span>
                  </div>
                  <div className="w-full truncate text-sm text-zinc-600">
                    <span className="truncate">{product.price}</span>
                  </div>
                  <button className="mt-3 grid h-8 w-full place-items-center rounded-md bg-green-500 text-white">
                    <Plus />
                  </button>
                </div>
              ),
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};
