import type { UseSwipeDragProps } from "@/types/types";
import { useRef, useState } from "react";


export const useSwipeDrag = ({
  onSwipeLeft,
  onSwipeRight,
}: UseSwipeDragProps) => {
  const startX = useRef<number | null>(null);
  const containerWidth = useRef(0);

  

  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const onTouchStart = (
    e: React.TouchEvent<HTMLElement>
  ) => {
    startX.current = e.touches[0].clientX;
    containerWidth.current = e.currentTarget.offsetWidth;
    setIsDragging(true);
  };

  const onTouchMove = (
    e: React.TouchEvent<HTMLElement>
  ) => {
    if (startX.current === null) return;

    const currentX = e.touches[0].clientX;
    const delta = currentX - startX.current;

    const resistance = 0.4;
    setTranslateX(delta * resistance);
  };

  const onTouchEnd = () => {
    if (startX.current === null) return;

    const threshold = containerWidth.current * 0.25;

    if (translateX < -threshold) {
      setTranslateX(-containerWidth.current);
      setTimeout(onSwipeLeft, 200);
    } else if (translateX > threshold) {
      setTranslateX(containerWidth.current);
      setTimeout(onSwipeRight, 200);
    } else {
      setTranslateX(0);
    }

    setIsDragging(false);
    startX.current = null;

  

  };
  
  const resetPosition = () => {
  setTranslateX(0);
};

  return {
    swipeHandlers: {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
    },
    swipeStyle: {
      transform: `translateX(${translateX}px)`,
      transition: isDragging
        ? "none"
        : "transform 0.3s ease-out",
    },
    isDragging,
    resetPosition,
  };
};