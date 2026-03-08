import type { NavItem } from "../types/types";
import {
  BsHouse,
  BsCollection,
  BsFolder,
  BsGear,
  BsChatSquareDots,
} from "react-icons/bs";


export const navItems: NavItem[] = [
  { label: "Accueil", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Galerie", path: "/design" },
  { label: "Projets", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export const items = [
  { label: "Accueil", path: "/", icon: BsHouse },
  { label: "Services", path: "/services", icon: BsGear },
  { label: "Galerie", path: "/design", icon: BsCollection },
  { label: "Projets", path: "/projects", icon: BsFolder },
  { label: "Contact", path: "/contact", icon: BsChatSquareDots },
  
];