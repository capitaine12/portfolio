import { useState } from "react";

export function useDesignModal(total: number) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const open = (index: number) => setCurrentIndex(index);
  const close = () => setCurrentIndex(null);

  const prev = () =>
    setCurrentIndex((i) =>
      i !== null && i > 0 ? i - 1 : i
    );

  const next = () =>
    setCurrentIndex((i) =>
      i !== null && i < total - 1 ? i + 1 : i
    );

  return {
    currentIndex,
    isOpen: currentIndex !== null,
    open,
    close,
    prev,
    next,
  };
}
