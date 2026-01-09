import Masonry from "react-masonry-css";
import DesignCard from "./DesignCard";
import DesignModal from "./DesignModal";
import { designs } from "@/data/designs";
import { useDesignModal } from "@/hooks/useDesignModal";
import { useEffect } from "react";

const breakpointColumnsObj = {
  default: 4,
  1280: 3,
  1024: 2,
  640: 1,
};

export default function DesignGrid() {
  const images = designs.map(d => d.image);

  const {
    currentIndex,
    isOpen,
    open,
    close,
    prev,
    next,
  } = useDesignModal(images.length);

useEffect(() => {
  if (currentIndex === null) return;

  const preload = new Image();
  const nextImage = images[currentIndex + 1];

  if (nextImage) {
    preload.src = nextImage;
  }
}, [currentIndex, images]);


  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="flex flex-col gap-6"
      >
        {designs.map((design, index) => (
          <DesignCard
            key={design.id}
            image={design.image}
            title={design.title}
            onClick={() => open(index)}
          />
        ))}
      </Masonry>

{isOpen && currentIndex !== null && (
  <DesignModal
    images={images}
    currentIndex={currentIndex}
    title={designs[currentIndex].title}
    date={designs[currentIndex].date}
    onClose={close}
    onPrev={prev}
    onNext={next}
  />
)}

    </>
  );
}
