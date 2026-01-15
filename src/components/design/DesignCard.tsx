import { useState, type FC } from 'react';
import { BsFullscreen } from 'react-icons/bs';

interface DesignCardProps {
  image: string;
  title: string;
  onClick: () => void;
}

const DesignCard: FC<DesignCardProps> = ({ image, title, onClick }) => {
   const [loaded, setLoaded] = useState(false);
  return (
    <div
      onClick={onClick}
      className="
    group relative cursor-pointer
    overflow-hidden rounded-xl
    shadow-md
    transition-all duration-300 ease-out
    hover:shadow-2xl
    active:scale-[0.97]
  ">
            {/* Skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
      )}
      {/* Image */}
      <img
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`
          w-full object-cover
          transition-all duration-500
          ${loaded ? "opacity-100 blur-0" : "opacity-0 blur-md"}
          group-hover:scale-105
        `}
      />

      {/* Overlay hover */}
      <div
        className="
          absolute inset-0 
        bg-black/30
          opacity-0 
          group-hover:opacity-100
          flex items-center justify-center
          transition-opacity
          
        "
      >
        
        <BsFullscreen className="text-white text-4xl sm:text-5xl" />
      </div>
      {/* 
<div
  className="
    absolute inset-0
    bg-black/20
    flex items-center justify-center
    opacity-100
    sm:opacity-0 sm:group-hover:opacity-100
    transition-opacity
  "
>
  <BsFullscreen className="text-white text-3xl sm:text-5xl" />
</div>
 */}
    </div>
  );
};

export default DesignCard;
