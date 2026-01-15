import type { ButtonHTMLAttributes, ReactNode } from "react";

export type StackType = "react" | "tailwind" | "laravel" | "vue" | "nodejs" | "django" | "flutter" | "html" | "css" | "javascript";
export type IconType = "Instagram" | "LinkedIn" | "whatsapp" | "Email";

export interface Project {
  id: number;
  title: string;
  description: string;

  thumbnail: string;
  cover: string;
  images: string[];

  stacks: StackType[];
  link?: string;
}

export interface ProjectCardProps {
project: Project;
}

export interface NavItem {
  label: string;
  path: string;
}
export interface HeroProps {
  onMoreClick?: () => void;
  onDownloadCV?: () => void;
}

export interface Design {
  id: number;
  title: string;
  client?: string;
  date: string;
  image: string;
}

export interface SideTitleProps {
  text: string;
  className?: string;
}

export interface DesignModalProps {
  images: string[];
  currentIndex: number;
  title: string;
  date: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export interface Service {
  id: number;
  title: string;
  description: string[]; 
  image: string;
}


export interface Contact{
  name: string;
  icon: IconType;
  link: string;
}

export interface ButtonProps 
extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'download';
  icon?: ReactNode;
  loading?: boolean;
  ariaLabel?: string;
  error?: string;
}

/* :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
/* :::::::::::::::::::::::::::::::Swipe handling :::::::: :::::::::::::: */

export type UseSwipeDragProps = {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
};