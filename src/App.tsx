import clsx from 'clsx';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { Icons } from './components/Icons';
import { RandomIcons } from './components/RandomIcons';
import { getColorMode, setColorMode } from './utils/color-mode';

const Hero = () => (
  <>
    <h1 className="mt-16 text-2xl font-bold sm:text-3xl md:text-5xl lg:text-7xl">
      Hey! I'm Modar {':)'}
    </h1>
    <div className="md:px-[6rem]">
      <h2 className="text-center text-sm sm:text-base md:text-2xl">
        I'm a web developer based in Leipzig, Germany. I work as a Software
        Engineer at Spread Group.
      </h2>
    </div>
  </>
);

const Cards = () => (
  <div className="grid w-full justify-items-center gap-0 px-4 xs:px-10 sm:grid-cols-3 sm:p-10 md:p-10 lg:p-16">
    <Card
      className={clsx(
        'bg-neutral-500 colorful:bg-paleDogwood dark:bg-mulledWine',
        '-rotate-6 hover:-translate-y-2 hover:-rotate-6',
      )}
    />
    <Card
      className={clsx(
        'bg-neutral-300 colorful:bg-wewak dark:bg-gunPowder',
        '-translate-y-6 hover:-translate-y-8',
      )}
    />
    <Card className="bg-neutral-400 -mt-10 rotate-6 hover:-translate-y-2 hover:rotate-6 colorful:bg-londonHue sm:mt-0 dark:bg-ebonyClay" />
  </div>
);

const Block = () => (
  <div className="bg-white colorful:bg-white max-w-3xl rounded-bl-[2000px] rounded-br-[1500px] rounded-tl-[1500px] rounded-tr-[2000px] p-12 sm:p-16 dark:bg-mulledWine">
    <p className="text-lg font-bold sm:text-xl">lovely stuff:</p>
    <p className="text-sm sm:text-base">
      react, tailwindcss, styled-components, typescript, php, kotlin, mysql,
      terraform.
    </p>
    <br />
    <p className="text-sm sm:text-base">
      Write me:{' '}
      <a href="mailto:modar.abohassoun@gmail.com">modar.abohassoun@gmail.com</a>
    </p>
  </div>
);

function App() {
  const colorMode = getColorMode();
  setColorMode(colorMode);
  return (
    <div className="colorful:fill-black colorful:text-black h-full w-full bg-gallery transition-[background-color] duration-500 colorful:bg-softPeach dark:bg-steelGray dark:fill-gallery dark:text-gallery">
      <Header />
      <Icons />
      <RandomIcons />
      <div className="flex h-full flex-col items-center justify-center gap-8 px-4">
        <Hero />
        <Cards />
        <Block />
      </div>
    </div>
  );
}

export default App;
