import { Role } from "./Role";

export const ROLES: Role[] = [
  {
    name: 'RESPONSABLE', path: [
      '/responsable/home',
      '/responsable/fournisseurs',
      '/responsable/propositions',
      '/responsable/listenoir',
      '/responsable/consulterBesoin',
      '/responsable/EnregistrerMat',
      '/responsable/gestionRessources'
    ]
  },
  {
    name: 'CHEF_DEPARTEMENT', path: [
      '/departement/home',
      '/departement/myProfile',
      '/departement/besoin',
      '/departement/gestion-besoins',
      '/departement/compte'
    ]
  },
  {
    name: 'ENSEIGNANT', path: [
      '/departement/home',
      '/departement/myProfile',
      '/departement/besoin'
      ]
  },
  {
    name: 'TECHNICIEN', path: [
      '/service-de-maintenance/home',
      '/service-de-maintenance/myProfile',
      '/service-de-maintenance/pannes',
      '/service-de-maintenance/constats',
      '/service-de-maintenance/constat'
    ]
  },
  {
    name: 'FOURNISSEUR', path: [
      
    ]
  }
];
