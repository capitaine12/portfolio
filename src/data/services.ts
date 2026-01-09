import type { Service } from "@/types/types";

export const services: Service[] = [
  {
    id: 1,
    title: "Design UI & Intégration Web",
    description: [
      "Intégration fidèle des maquettes (Figma → Web)",
      "Création d'interfaces utilisateur attrayantes et fonctionnelles",
      "Intégration de designs responsives et optimisés pour tous les appareils",
    ],
    image: "/images/service-1.jpg",
  },
  {
    id: 2,
    title: "Développement Web sur mesure",
    description: [
      "Conception d’interfaces web modernes, performantes et responsives avec React, Angular et Tailwind CSS.",
      "Utilisation des dernières technologies pour garantir une expérience utilisateur optimale",
    ],
    image: "/images/service-2.jpg",
  },
  {
    id: 3,
    title: "Sécurisation & Authentification",
    description: [
      "Authentification centralisée (Keycloak, JWT, OAuth2)",
      "Gestion des rôles et permissions Bonnes pratiques de sécurité applicative",
    ],
    image: "/images/service-2.jpg",
  },
];
