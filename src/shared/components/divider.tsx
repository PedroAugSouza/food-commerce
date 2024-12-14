'use client';

import clsx from 'clsx';
import colors from 'tailwindcss/colors';

interface Props {
  size?: 'xs' | 'md' | 'lg';
  color?: string;
}

export const Divider = ({ color, size = 'xs' }: Props) => {
  return (
    <div
      className={clsx(`mt-1 w-full`, {
        'h-[1px]': size === 'xs',
        'h-1': size === 'md',
        'h-2': size === 'lg',
      })}
      style={{ backgroundColor: color ? color : colors.zinc[300] }}
    />
  );
};
