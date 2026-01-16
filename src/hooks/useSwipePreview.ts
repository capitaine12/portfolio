import { useRef, useState } from "react";

type SwipePreviewProps = {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  threshold?: number;
};

export const useSwipePreviewIOS = ({
  onSwipeLeft,
  onSwipeRight,
  threshold = 80,
}: SwipePreviewProps) => {
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

    // résistance façon iOS
    const resistance = Math.abs(delta) > 120
      ? 120 + (delta - Math.sign(delta) * 120) * 0.3
      : delta;

    setTranslateX(resistance);
  };

  const onTouchEnd = () => {
    setIsDragging(false);

    if (Math.abs(translateX) > threshold) {
      const direction = translateX > 0 ? 1 : -1;

      // slide out
      setTranslateX(direction * window.innerWidth);

      setTimeout(() => {
        direction > 0 ? onSwipeRight() : onSwipeLeft();
        setTranslateX(0);
      }, 200);
    } else {
      // snap back
      setTranslateX(0);
    }

    startX.current = null;
  };

  return {
    handlers: {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
    },
    style: {
      transform: `translateX(${translateX}px)`,
      transition: isDragging
        ? "none"
        : "transform 0.25s cubic-bezier(.22,.61,.36,1)",
      willChange: "transform",
    } as React.CSSProperties,
  };
};
