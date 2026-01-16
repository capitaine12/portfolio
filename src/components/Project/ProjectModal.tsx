import { useState } from "react";
import type { Project } from "@/types/types";
import { BsArrowRight, BsChevronCompactLeft, BsChevronCompactRight, BsFullscreenExit } from "react-icons/bs";
import { useSwipe } from "@/hooks/useSwipe";

type Props = {
  project: Project;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: Props) => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? project.images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === project.images.length - 1 ? 0 : i + 1));
  };

 const { swipeHandlers } = useSwipe({
  onSwipeLeft: next,
  onSwipeRight: prev,
});

  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
  <div className="absolute inset-0 bg-black/60 animate-overlay" onClick={onClose} />
  <div className="relative bg-white w-full max-w-5xl rounded-2xl overflow-hidden animate-modal z-10">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-2xl bg-gray-200 border rounded-full p-2 opacity-60 hover:opacity-100">
          <BsFullscreenExit />
        </button>

        <div className="flex flex-col lg:grid lg:grid-cols-[1.4fr_1fr] gap-6 p-4 lg:p-8">


          {/* LEFT – VISUAL */}
          <div className="flex flex-col">
            {/* Slider */}
            <div className="relative rounded-xl overflow-hidden ">
              <img
                key={project.images[index]}
                src={project.images[index]}
                alt={project.title}
                {...swipeHandlers}
                draggable={false}
                className="
                 w-full
                 h-[280px]
                 sm:h-[340px]
                 lg:h-[390px]
                 object-contain
                 transition-transform 
                 duration-300
                 relative rounded-xl overflow-hidden touch-pan-y
                 "/>
                
              {project.images.length > 1 && (
  <>
    <button
      onClick={prev}
      className="hidden lg:flex absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 rounded-full px-1 py-1 shadow"
    >
      <BsChevronCompactLeft size={20} />
    </button>

    <button
      onClick={next}
      className="hidden lg:flex absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 rounded-full px-1 py-1 shadow"
    >
      <BsChevronCompactRight size={20} />
    </button>
  </>
)}

            </div>
{/* Thumbnails */}

<div className="hidden lg:flex gap-4 mt-6 overflow-x-auto pb-2 scrollbar-hide">
  {project.images.map((img, i) => {
    const active = i === index;

    return (
      <div
        key={img}
        onClick={() => setIndex(i)}
        className={`
          relative shrink-0 rounded-xl overflow-hidden
          transition-all duration-300
          ${active
            ? "ring-2 ring-black scale-105"
            : "opacity-60 hover:opacity-100 hover:scale-105"
          }
        `}
      >
        <img
          src={img}
          alt={project.title}
          className="w-32 h-16 object-cover"
        />

        {/* Overlay active */}
        {active && (
          <span className="absolute inset-0 ring-1 ring-white/40 rounded-xl pointer-events-none" />
        )}
      </div>
    );
  })}
</div>

          </div>

          {/* RIGHT – INFOS */}
          <div className="flex flex-col gap-5 px-2 lg:p-8 lg:h-96 lg:w-4/5 lg:mx-auto">

            <h2 className="text-3xl font-bold">
              {project.title}
            </h2>

            <p className="text-xl leading-relaxed opacity-80">
              {project.description}
            </p>

            <div className="mt-auto">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-3 py-1 
                  rounded-full border-2 border-black text-sm 
                  font-medium hover:bg-black 
                  md:w-auto hover:text-white transition">
                  
                  <span>Lien du site </span> <BsArrowRight size={25} />
                </a>
              ) : (
                <span className="inline-block text-sm opacity-50 px-3 py-1 border-2 rounded-full border-gray-400">
                  En production
                </span>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default ProjectModal;
