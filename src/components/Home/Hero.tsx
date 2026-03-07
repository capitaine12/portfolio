import React from "react";
import {HeroContent} from "./HeroContent";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
    const navigate = useNavigate();
  return (
    <section   className="min-h-screen flex items-center">
      <div className="container mx-auto ">
        <HeroContent 
        onMoreClick={() => navigate('/services')}
        onDownloadCV={() => console.log('Téléchargement CV')}
        />
      </div>
    </section>
  );
};

export default Hero;
