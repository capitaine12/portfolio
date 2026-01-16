import type { NavItem } from "../types/types";
import {
  BsHouse,
  BsPalette,
  BsFolder,
  BsGear,
  BsEnvelope,
} from "react-icons/bs";


export const navItems: NavItem[] = [
  { label: "Accueil", path: "/" },
  { label: "Design", path: "/design" },
  { label: "Projets", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export const items = [
  { label: "Accueil", path: "/", icon: BsHouse },
  { label: "Design", path: "/design", icon: BsPalette },
  { label: "Projets", path: "/projects", icon: BsFolder },
  { label: "Services", path: "/services", icon: BsGear },
  { label: "Contact", path: "/contact", icon: BsEnvelope },
  
];