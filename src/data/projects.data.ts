import type { Project } from "@/types/types";
import tumbnail1 from "@/assets/images/web/p1.png";
import parainage1 from "@/assets/images/web/p2.png";
import parainage2 from "@/assets/images/web/p4.png";
import parainage3 from "@/assets/images/web/p5.png";
import parainage4 from "@/assets/images/web/p6.png";

import tumbnail2 from "@/assets/images/web/c1.png";
import cxd1 from "@/assets/images/web/c2.png"
import cxd2 from "@/assets/images/web/c3.png"
import cxd3 from "@/assets/images/web/c4.png"
import cxd4 from "@/assets/images/web/c5.png"
import cxd5 from "@/assets/images/web/c6.png"
import cxd6 from "@/assets/images/web/c7.png"

import thumbnail3 from "@/assets/images/web/h1.png";
import h1 from "@/assets/images/web/h2.png";
import h2 from "@/assets/images/web/h3.png";
import h3 from "@/assets/images/web/h4.png";
import h4 from "@/assets/images/web/h5.png";
import h5 from "@/assets/images/web/h6.png";
import h6 from "@/assets/images/web/h7.png";
import h7 from "@/assets/images/web/h8.png";

export const projects: Project[] = [
  
  {
    id: 1,
    title: "Parainage",
    description: "Site de parrainage des élections nationales",
    thumbnail: tumbnail1,
    cover: tumbnail1,
    images: [
      tumbnail1,
      parainage1,
      parainage2,
      parainage3,
      parainage4,
    ],
    stacks: ["html", "css", "javascript"],
    link: "https://humm-niam.com",
  },
    {
    id: 2,
    title: "Cosmos X Docs",
    description: "Etre un blue et timide n'aide pas l'etudiants(es) a trouver les documents anciens au près de leurs ainés. Cosmos X Docs est une plateforme de partage de documents entre étudiants(es) de l'université.",
    thumbnail: tumbnail2,
    cover: tumbnail2,
    images: [
      tumbnail2,
      cxd1,
      cxd2,
      cxd3,
      cxd4,
      cxd5,
      cxd6,
    ],
    stacks: ["tailwind", "laravel"],
  },
      {
    id: 3,
    title: "Humm Niam",
    description: "Site de partage de recettes de cuisine",
    thumbnail: thumbnail3,
    cover: thumbnail3,
    images: [
      thumbnail3,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      h7,
    ],
    stacks: ["react", "tailwind"],
  },
];
