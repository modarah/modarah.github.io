import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Icon } from './Icon';

const icons = [
  'code',
  'code-slash',
  'git-branch',
  'git-fork',
  'code',
  'code-slash',
  'git-pull',
  'hashtag',
  'terminal',
  'code',
  'code-slash',
  'browser',
  'react',
  'code',
  'code-slash',
] as const;

const colors = [
  'colorful:fill-jacarta',
  'colorful:fill-strikemaster',
  'colorful:fill-wewak',
  'colorful:fill-butterflyBush',
  'colorful:fill-kimberly',
  'colorful:fill-londonHue',
  'colorful:fill-azalea',
  'colorful:fill-froly',
];

export const RandomIcons = () => {
  const [rootHeight, setRootHeight] = useState(window.innerHeight);

  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      setRootHeight(root.scrollHeight);
    }
  }, []);

  // Function to generate a random position within given limits
  const getRandomPosition = (max: number, min: number = 0) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // Size of the icon (e.g., h-12, w-12)
  const iconSize = 48; // Assuming 12 (h-12) = 48px

  // Get screen width and height
  const screenWidth = window.innerWidth;
  // const screenHeight = window.innerHeight;
  const screenHeight = rootHeight - 100;

  // Generate random positions for the icons
  const positions = [...icons, ...icons, ...icons, ...icons].map((icon) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return {
      top: `${getRandomPosition(screenHeight - iconSize)}px`,
      left: `${getRandomPosition(screenWidth - iconSize)}px`,
      rotate: `${getRandomPosition(360)}deg`,
      scale: `${(Math.random() * 2 + 1).toFixed(2)}`, // Random scale between 1 and 3
      icon,
      randomColor,
    };
  });

  return (
    <div className="pointer-events-none absolute z-10 p-4 opacity-10 lg:p-24">
      {positions.map((position, index) => (
        <Icon
          key={index}
          icon={position.icon}
          className={clsx('absolute', iconSize, position.randomColor)}
          style={{
            top: position.top,
            left: position.left,
            transform: `rotate(${position.rotate}) scale(${position.scale})`,
          }}
        />
      ))}
    </div>
  );
};
