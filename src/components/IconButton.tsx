import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import { buttonSharedStyles } from './Button';

export const IconButton = ({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      className={clsx(
        'flex h-10 w-10 items-center justify-center focus:outline-none',
        buttonSharedStyles,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
