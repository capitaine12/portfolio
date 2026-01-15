import type { FC } from 'react';
import type { HeroProps } from '@/types/types';
import { BsArrowRight, BsChevronDown } from 'react-icons/bs';
import profile from '@/assets/images/profile.png';
import Button from '@/components/UI/Button';
import { useDownloadCV } from "@/hooks/useDownloadCV";
import cv from "@/assets/cv/Cheikh_Ndiaye_CV.pdf";


export const HeroContent: FC<HeroProps> = ({
  onMoreClick,
}) => {


  const { downloadCV, loading } = useDownloadCV({
    fileUrl: cv,
    fileName: "Cheikh_Ndiaye_CV.pdf",
  })


  return (
    <section >

     {/* MOBILE */}
<div className="relative w-full h-[107svh] lg:hidden overflow-hidden">
  <img
    src={profile}
    alt="Cheikh Ndiaye"
    fetchPriority="high"
    className="absolute inset-0 w-full h-full     object-[center_20%]
     "
  />

  {/* OVERLAY */}
  <div
    className="
      absolute inset-0
      flex flex-col
      justify-end
      bg-black/30
      px-6
      pb-[clamp(32px,8vh,64px)]
      text-black
      animate-hero
    "
  >
    {/* TEXTE */}
    <div className="flex flex-col items-center">
      <span className="relative -left-24 text-sm font-semibold">
        Je me nomme
      </span>

      <h1 className="font-extrabold leading-none text-[clamp(3rem,19vw,5rem)]">
        CHEIKH
      </h1>

      <div className="flex items-center gap-3">
        <span className="bg-black px-3 py-1 
        text-[clamp(0.6rem,1.8vw,0.85rem)] 
        whitespace-nowrap font-bold text-white">
          Développeur frontend & UI / UX
        </span>

        <h2 className="font-bold text-[clamp(1.8rem,6vw,2.6rem)]">
          NDIAYE
        </h2>
      </div>
    </div>

    {/* BOUTONS */}
    <div className=" flex flex-col gap-3">
      <Button
        variant="primary"
        icon={<BsArrowRight size={22} />}
        onClick={onMoreClick}
      >
        Voir Plus
      </Button>

      <Button
        variant="download"
        icon={<BsChevronDown size={22} />}
        onClick={downloadCV}
        loading={loading}
      >
        Télécharger CV
      </Button>
    </div>
  </div>
</div>

      
      {/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
      {/*::::::::::::::::::::::::::::: PARTIE DESKTOP :::::::::::::::::::::::::::::::::: */}
      {/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}



      {/* DESKTOP (INCHANGÉ) */}
      <div className="
        relative
        hidden
        min-h-screen
        grid-cols-[2fr_1fr]
        lg:grid
      ">
        {/* TEXTE */}
        <div className="flex flex-col justify-center pl-32 pr-8  animate-hero">
          <div className="flex items-center flex-col">
            <h5 className="text-lg text-start">Je me nomme</h5>

            <h1 className="text-9xl font-extrabold leading-[0.95] hover:tracking-widest transition-all duration-300">
              CHEIKH
            </h1>

            <div className="flex items-center gap-5">
              <span className="bg-black px-4 py-1 font-bold text-white">
                Développeur frontend & UI / UX
              </span>

              <h2 className="text-5xl font-bold">
                NDIAYE
              </h2>
            </div>

            <Button
              variant="primary"
              icon={<BsArrowRight size={25} />}
              onClick={onMoreClick}>Voir Plus</Button>

          </div>
          <Button
            variant="download"
            icon={<BsChevronDown size={25} />}
            onClick={downloadCV}
            loading={loading}
            ariaLabel="Télécharger mon CV">
            Télécharger CV
          </Button>
        </div>

        {/* IMAGE */}
        <div className="bg-neutral-100">
          <img
            src={profile}
            alt="Cheikh Ndiaye"
            className="h-screen w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
