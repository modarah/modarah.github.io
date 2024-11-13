const html = document.querySelector('html');

export const COLOR_MODE_KEY = 'color-mode';

export enum ColorMode {
  Normal = 'normal',
  Dark = 'dark',
  Colorful = 'colorful',
}

// Get current color mode from localStorage
export const getColorMode = (): ColorMode => {
  const savedMode = localStorage.getItem(COLOR_MODE_KEY) as ColorMode;
  return savedMode || ColorMode.Normal;
};

// Set the color mode and update the HTML class
export const setColorMode = (mode: ColorMode) => {
  if (html) {
    localStorage.setItem(COLOR_MODE_KEY, mode);
    html.className = mode === ColorMode.Normal ? '' : mode;
  }
};
