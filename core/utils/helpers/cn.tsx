import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

type cnArgs =
  | string
  | number
  | boolean
  | undefined
  | null
  | Record<string, unknown>
  | cnArgs[];

export const cn = (...args: cnArgs[]): string => {
  return twMerge(clsx(args));
};
