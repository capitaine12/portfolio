import { useRef, useState, useCallback } from "react";

type TouchPoint = number;

const SNAP_DISTANCE = 80; // px → seuil snap retour
const SNAP_OUT = 120;     // px → preview sortie

export type SwipePreviewHandlers = {
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: () => void;
};

export type SwipePreviewReturn = {
  previewHandlers: SwipePreviewHandlers;
  previewStyle: React.CSSProperties;
  resetPreview: () => void;
};

export function useSwipePreview(): SwipePreviewReturn {
  const startX = useRef<TouchPoint | null>(null);

  const [translateX, setTranslateX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      startX.current = e.touches[0].clientX;
      setIsDragging(true);
    },
    []
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (startX.current === null) return;

      const deltaX =
        e.touches[0].clientX - startX.current;

      setTranslateX(deltaX);
    },
    []
  );

  const onTouchEnd = useCallback(() => {
    if (startX.current === null) return;

    setIsDragging(false);

    // 🔹 SNAP LOGIC
    if (Math.abs(translateX) < SNAP_DISTANCE) {
      // 🔁 snap back center
      setTranslateX(0);
    } else {
      // ➡️ snap out directionnel
      setTranslateX(
        translateX > 0 ? SNAP_OUT : -SNAP_OUT
      );

      // reset après animation
      window.setTimeout(() => {
        setTranslateX(0);
      }, 280);
    }

    startX.current = null;
  }, [translateX]);

  const resetPreview = useCallback(() => {
    setTranslateX(0);
    setIsDragging(false);
    startX.current = null;
  }, []);

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
        : "transform 280ms cubic-bezier(.22,.61,.36,1)",
      willChange: "transform",
    },

    resetPreview,
  };
}
