import { useRef, useState } from "react";

type SwipeGalleryProps = {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  threshold?: number;
};

export const useSwipeGallery = ({
  onSwipeLeft,
  onSwipeRight,
  threshold = 60,
}: SwipeGalleryProps) => {
  const startX = useRef<number | null>(null);
  const [translateX, setTranslateX] = useState(0);
  const [transition, setTransition] = useState("none");

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    setTransition("none");
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const delta = e.touches[0].clientX - startX.current;
    setTranslateX(delta);
  };

  const onTouchEnd = () => {
    //setIsDragging(false);

    if (translateX > threshold) {
      // swipe droite
      setTransition("transform 0.25s ease-out");
      setTranslateX(window.innerWidth); // l'image sort à droite
      setTimeout(() => {
        onSwipeRight();
        setTranslateX(0);
        setTransition("none");
      }, 250);
    } else if (translateX < -threshold) {
      // swipe gauche
      setTransition("transform 0.25s ease-out");
      setTranslateX(-window.innerWidth); // l'image sort à gauche
      setTimeout(() => {
        onSwipeLeft();
        setTranslateX(0);
        setTransition("none");
      }, 250);
    } else {
      // pas assez -> snap back
      setTransition("transform 0.2s ease-out");
      setTranslateX(0);
    }

    startX.current = null;
  };

  return {
    handlers: { onTouchStart, onTouchMove, onTouchEnd },
    style: {
      transform: `translateX(${translateX}px)`,
      transition: transition,
      willChange: "transform",
    } as React.CSSProperties,
  };
};
