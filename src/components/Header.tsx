import { useState } from 'react';
import { ColorMode, getColorMode, setColorMode } from '../utils/color-mode';
import { Icon } from './Icon';
import { IconButton } from './IconButton';

export const Header = () => {
  const [colorMode, setColorModeState] = useState<ColorMode>(getColorMode());

  const toggleTheme = () => {
    const nextMode =
      colorMode === ColorMode.Normal
        ? ColorMode.Colorful
        : colorMode === ColorMode.Colorful
          ? ColorMode.Dark
          : ColorMode.Normal;

    setColorMode(nextMode);
    setColorModeState(nextMode);
  };

  return (
    <header className="top-0 w-full items-center justify-between p-2 sm:p-4">
      <nav className="flex items-center justify-between">
        <a href="/" className="flex items-center text-xl font-bold sm:text-2xl">
          modar.dev
        </a>
        <div className="flex items-center gap-2">
          <IconButton
            onClick={toggleTheme}
            className="bg- bg-butterflyBush bg-gradient-to-bl from-jacarta via-kimberly to-azalea hover:bg-none hover:from-londonHue hover:to-butterflyBush colorful:bg-none dark:bg-none"
          >
            {colorMode === ColorMode.Dark ? (
              <Icon icon="sun" className="h-3.5 w-3.5" />
            ) : colorMode === ColorMode.Colorful ? (
              <Icon icon="moon" className="h-3.5 w-3.5" />
            ) : (
              <Icon icon="sun" className="h-3.5 w-3.5" />
            )}
          </IconButton>
        </div>
      </nav>
    </header>
  );
};
