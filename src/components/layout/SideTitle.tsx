import type { FC } from 'react';
import clsx from 'clsx';
import type { SideTitleProps } from "@/types/types";


const SideTitle: FC<SideTitleProps> = ({ text, className }) => {
  return (
    <div
      className={clsx(
        'fixed left-6 top-[60%] -translate-y-1/2',
        'hidden lg:flex flex-col items-center gap-10',
        className
      )}
    >
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className="
            text-5xl
            font-bold
            text-white
            tracking-widest
            text-stroke
          "
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default SideTitle;
