import { useSwipeDrag } from "@/hooks/useSwipe";
import type { DesignModalProps } from "@/types/types";
import { type FC, useEffect } from "react";
import { BsChevronLeft, BsChevronRight, BsFullscreenExit } from "react-icons/bs";

const DesignModal: FC<DesignModalProps> = ({
  images,
  currentIndex,
  title,
  date,
  onClose,
  onPrev,
  onNext,
}) => {
  
//? Bloquer le scroll de l'arrière-plan
  useEffect(() => {
  document.body.style.overflow = "hidden";
  return () => {
    document.body.style.overflow = "";
  };
}, []);

// Swipe handling
const {
  swipeHandlers,
  swipeStyle,
  isDragging,
  resetPosition,
} = useSwipeDrag({
  onSwipeLeft: onNext,
  onSwipeRight: onPrev,
});

// Préchargement de l'image suivante
useEffect(() => {
  const nextIndex =
    (currentIndex + 1) % images.length;

  const img = new Image();
  img.src = images[nextIndex];
}, [currentIndex, images]);
// Reset position after changing image
useEffect(() => {
  resetPosition();
}, [currentIndex, resetPosition]);


  // Navigation clavier
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onPrev, onNext, onClose]);

  return (
    <div
      onClick={onClose}
      className="
        fixed inset-0 z-50
        bg-black/70
        flex items-center justify-center
        px-4
        animate-modal
        
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full flex items-center justify-center"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-3xl"
        >
          <BsFullscreenExit />
        </button>

        {/* LEFT */}
        {currentIndex > 0 && (
            <button
    onClick={onPrev}
    className="
    z-[2]
      absolute left-2 sm:-left-14
      top-1/2 -translate-y-1/2
      text-white text-4xl
      p-2
      bg-black/40
      rounded-full
      backdrop-blur
      active:scale-95
    "
  >
    <BsChevronLeft />
  </button>
        )}

        {/* IMAGE */}
        <img
        src={images[currentIndex]}
        alt={title}
        {...swipeHandlers}
        style={{...swipeStyle,
          opacity: isDragging ? 0.9 : 1,
          transform: `${swipeStyle.transform} 
          scale(${isDragging ? 0.98 : 1})`,
        }}
        draggable={false}
        className="
        max-h-[72svh]
        sm:max-h-[80vh]
        max-w-full
        object-contain
        rounded-lg
        will-change-transform
        select-none
        touch-pan-y"/>

        {/* RIGHT */}
        {currentIndex < images.length - 1 && (
          <button
    onClick={onNext}
    className="
      absolute right-2 sm:-right-14
      top-1/2 -translate-y-1/2
      text-white text-4xl
      p-2
      bg-black/40
      rounded-full
      backdrop-blur
      active:scale-95
    ">
    <BsChevronRight />
  </button>
        )}
      </div>

      {/* FOOTER */}
      <div
  className="
    absolute bottom-3
    text-white text-sm sm:text-sm
    opacity-80
    text-center
    px-4
  "
>
  {title} • {date} • {currentIndex + 1}/{images.length}
</div>

    </div>
  );
};

export default DesignModal;
