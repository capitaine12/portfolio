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

  // 🎹 Navigation clavier
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
              absolute left-0 md:-left-14
              text-white text-4xl
              hover:scale-110 transition
            "
          >
            <BsChevronLeft />
          </button>
        )}

        {/* IMAGE */}
        <img
          src={images[currentIndex]}
          alt={title}
          className="
  max-h-[80vh]
  max-w-full
  object-contain
  rounded-lg
  will-change-transform
"/>

        {/* RIGHT */}
        {currentIndex < images.length - 1 && (
          <button
            onClick={onNext}
            className="
              absolute right-0 md:-right-14
              text-white text-4xl
              hover:scale-110 transition
            "
          >
            <BsChevronRight />
          </button>
        )}
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-6 text-white text-sm opacity-80">
        {title} • {date} • {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
};

export default DesignModal;
