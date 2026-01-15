import { useRef } from "react";
import type { UseSwipeProps } from "@/types/types";

export const useSwipe = ({
  onSwipeLeft,
  onSwipeRight,
  minDistance = 50,
}: UseSwipeProps) => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    )
      return;

    const distance =
      touchStartX.current - touchEndX.current;

    if (Math.abs(distance) < minDistance) return;

    if (distance > 0) {
      onSwipeLeft?.();
    } else {
      onSwipeRight?.();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return {
    swipeHandlers: {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
    },
  };
};
