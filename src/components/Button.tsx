import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

export const buttonSharedStyles =
  'dark:text-gallery dark:hover:bg-gallery rounded-lg bg-black text-white transition-all duration-300 hover:bg-white hover:text-black colorful:bg-butterflyBush colorful:hover:bg-classicRose';

export const Button = ({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={clsx(
        'group px-4 py-2 focus:outline-0 active:translate-y-[1px] active:outline-0',
        buttonSharedStyles,
        className,
      )}
      {...rest}
    >
      {children}
      <p className="dark:text-amber-500 absolute hidden pt-2 text-xs text-butterflyBush transition-all duration-300 group-hover:block">
        I do nothing!
      </p>
    </button>
  );
};
