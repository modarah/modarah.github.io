/// <reference types="vite-plugin-svgr/client" />

import { CSSProperties } from 'react';
import Browser from '../assets/icons/browser.svg?react';
import CodeSlash from '../assets/icons/code-slash.svg?react';
import Code from '../assets/icons/code.svg?react';
import GitBranch from '../assets/icons/git-branch.svg?react';
import GitFork from '../assets/icons/git-fork.svg?react';
import GitPull from '../assets/icons/git-pull.svg?react';
import Hashtag from '../assets/icons/hashtag.svg?react';
import Moon from '../assets/icons/moon.svg?react';
import React from '../assets/icons/react.svg?react';
import Sun from '../assets/icons/sun.svg?react';
import Terminal from '../assets/icons/terminal.svg?react';

const icons = {
  code: Code,
  'code-slash': CodeSlash,
  'git-branch': GitBranch,
  'git-fork': GitFork,
  'git-pull': GitPull,
  hashtag: Hashtag,
  terminal: Terminal,
  browser: Browser,
  react: React,
  sun: Sun,
  moon: Moon,
};

export type IconKeys = keyof typeof icons;

export const Icon = ({
  icon,
  className,
  style,
}: {
  icon: IconKeys;
  className?: string;
  style?: CSSProperties;
}) => {
  const Svg = icons[icon];
  return <Svg className={className} style={style} />;
};
