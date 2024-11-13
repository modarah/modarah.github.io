import clsx from 'clsx';
import { Button } from './Button';
import { Icon } from './Icon';

export const Card = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        'flex w-fit flex-col items-center justify-center gap-4 rounded-3xl p-4',
        'transition-all duration-500',
        'hover:z-10 hover:scale-[1.15]',
        className,
      )}
    >
      <h3 className="text-xl font-bold sm:text-2xl md:text-3xl">
        {'{ '}lovely title{' }'}
      </h3>
      <Icon
        icon="browser"
        className="h-24 w-24 sm:h-32 sm:w-32 md:h-48 md:w-48"
      />
      <p className="text-xs sm:text-sm md:text-base">
        a long text descriping interesting stuff and why it's nice, yeah
        something like that I guess.
      </p>
      <div>
        <Button>Button</Button>
      </div>
    </div>
  );
};
