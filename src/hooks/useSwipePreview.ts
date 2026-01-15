import { useRef, useState } from "react";

export const useSwipePreview = () => {
  const startX = useRef<number | null>(null);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (startX.current === null) return;

    const delta = e.touches[0].clientX - startX.current;
    setTranslateX(delta * 0.35); // résistance douce
  };

  const onTouchEnd = () => {
    setTranslateX(0);
    setIsDragging(false);
    startX.current = null;
  };

  return {
    previewHandlers: {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
    },
    previewStyle: {
      transform: `translateX(${translateX}px)`,
      transition: isDragging
        ? "none"
        : "transform 0.25s ease-out",
    } as React.CSSProperties,
  };
};
