/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props {
  register: UseFormRegister<any>;
}

export const InputFile = ({ register }: Props) => {
  const [imageSelected, setImageSelected] = useState<string>();

  const onSelectImage = (imagePath: File) => {
    const url = URL.createObjectURL(imagePath);
    setImageSelected(url);
  };

  return (
    <>
      <label htmlFor="file">
        <div
          className={clsx(
            'grid h-64 w-64 cursor-pointer place-items-center overflow-hidden rounded-lg border-2 text-sm text-zinc-600 transition-all',
            {
              'border-solid border-transparent': imageSelected,
              'border-dashed border-zinc-400 hover:border-zinc-600':
                !imageSelected,
            },
          )}
        >
          {imageSelected ? (
            <img src={imageSelected} className="h-auto w-full" />
          ) : (
            <h1>Selecione a imagem do produto.</h1>
          )}
        </div>
      </label>

      <input
        type="file"
        id="file"
        hidden
        accept=".png, .jpg"
        {...register('image')}
        onChange={(e) => {
          onSelectImage(e.target.files![0]);
          register('file').onChange(e);
        }}
      />
    </>
  );
};
