import { Icon } from './Icon';

export const Icons = () => {
  return (
    <div className="pointer-events-none absolute min-h-80 w-full p-4 opacity-10 lg:p-24">
      <Icon
        icon="code"
        className="absolute bottom-0 right-[80%] h-12 w-12 translate-y-32 rotate-45 colorful:fill-butterflyBush md:scale-[2.5]"
      />
      <Icon
        icon="git-branch"
        className="absolute right-[40%] top-10 h-12 w-12 -rotate-12 scale-150 colorful:fill-oldRose"
      />
      <Icon
        icon="code-slash"
        className="absolute right-[10%] h-12 w-12 rotate-12 colorful:fill-jacarta md:scale-[2.5]"
      />
      <Icon
        icon="git-fork"
        className="absolute bottom-[20%] right-[25%] h-12 w-12 -rotate-45 colorful:fill-froly md:scale-150"
      />
      <Icon
        icon="terminal"
        className="absolute right-[95%] h-12 w-12 rotate-12 colorful:fill-froly md:scale-100"
      />
      <Icon
        icon="git-pull"
        className="absolute bottom-[-90%] right-[1%] h-12 w-12 rotate-12 colorful:fill-strikemaster md:scale-[3]"
      />
      <Icon
        icon="hashtag"
        className="absolute right-[75%] top-[50%] h-12 w-12 -rotate-[25deg] colorful:fill-portGore md:scale-[2]"
      />
      <Icon
        icon="code"
        className="absolute bottom-[-90%] h-12 w-12 translate-y-32 rotate-45 colorful:fill-butterflyBush md:scale-[2.5]"
      />
      <Icon
        icon="git-pull"
        className="absolute bottom-[-180%] left-[10%] h-12 w-12 -rotate-12 colorful:fill-portGore md:scale-[3]"
      />
      <Icon
        icon="terminal"
        className="absolute bottom-[-150%] right-[50%] h-12 w-12 rotate-12 colorful:fill-froly md:scale-[2]"
      />
      <Icon
        icon="code-slash"
        className="absolute bottom-[-200%] right-[10%] h-12 w-12 rotate-12 colorful:fill-strikemaster md:scale-[2.5]"
      />
      <Icon
        icon="react"
        className="absolute bottom-[-220%] right-[30%] h-[128px] w-[128px] animate-[spin_20s_linear_infinite] transition-all colorful:fill-portGore"
      />
    </div>
  );
};
