import type { NavItem } from "../types/types";
import {
  BsHouse,
  BsPalette,
  BsFolder,
  BsGear,
  BsChatSquareDots,
} from "react-icons/bs";


export const navItems: NavItem[] = [
  { label: "Accueil", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Design", path: "/design" },
  { label: "Projets", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export const items = [
  { label: "Accueil", path: "/", icon: BsHouse },
  { label: "Services", path: "/services", icon: BsGear },
  { label: "Design", path: "/design", icon: BsPalette },
  { label: "Projets", path: "/projects", icon: BsFolder },
  { label: "Contact", path: "/contact", icon: BsChatSquareDots },
  
];