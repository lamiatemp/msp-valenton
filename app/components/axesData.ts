export interface Axe {
  id: number;
  title: string;
  description: string;
  icon: string; // path to SVG
}

export const axes: Axe[] = [
  {
    id: 1,
    title: 'Accès aux soins',
    description: `Accès aux soins pendant une large amplitude horaire. Les professionnels de santé de notre structure s'organisent pour vous garantir un accueil toute l'année, y compris pendant les vacances scolaires.\n\nNotre secrétariat est joignable selon les modalités suivantes :\n• Du lundi au vendredi de 8h à 19h\n• Le samedi de 9h à 12h\n\nEn dehors de ces horaires d’ouverture, des informations vous sont communiquées pour vous orienter immédiatement vers les solutions les plus adaptées au regard de votre état de santé :\n• Le SAMI de Limeil-Brévannes (3 rue Claude Bernard, Limeil-Brévannes) vous accueille sans rendez-vous du lundi au vendredi entre 20 heures et minuit, le samedi de 16 heures à minuit et le dimanche de 8 heures à minuit.\n• En cas d’urgence vitale, composez le 15.`,
    icon: '/images/icons/health-outline.svg',
  },
  {
    id: 2,
    title: 'Accueil et accompagnement',
    description: `L’organisation en maison de santé nous permet de vous assurer un accueil par du personnel dédié du lundi au vendredi, de 9h à 19h.\n\nCet accueil organisé permet, au-delà de la prise de rendez-vous auprès des professionnels intervenant dans la structure, de :\n• Coordonner les informations vous concernant entre les différents professionnels de la structure amenés à assurer votre suivi médical ;\n• Vous orienter vers les professionnels de santé ou services internes ou extérieurs à la structure dont vous avez besoin ;\n• Organiser les échanges nécessaires avec les établissements de santé ou établissements et services médico-sociaux lorsque votre état de santé le nécessite et notamment avant et après toute hospitalisation.`,
    icon: '/images/icons/contact-support-outline-rounded.svg',
  },
];
