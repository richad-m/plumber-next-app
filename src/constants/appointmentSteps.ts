export enum AppointmentSteps {
  QUALIFICATION_1 = "qualification1",
  QUALIFICATION_2 = "qualification2,",
}

export const NEXT_STEPS: Partial<Record<AppointmentSteps, AppointmentSteps>> = {
  [AppointmentSteps.QUALIFICATION_1]: AppointmentSteps.QUALIFICATION_2,
};

export enum FirstStepOptions {
  CHAUFFE_EAU = "Chauffe-eau",
  ROBINETS = "Réparation de robinets",
  TOILETTES = "Réparations de toilettes",
  FUITES = "Fuites d'eau",
  CANALISATIONS = "Canalisation bouchées",
  AUTRES = "Autres problèmes de plomberie",
}

export const FIRST_TO_SECOND_STEP_OPTIONS: Partial<
  Record<FirstStepOptions, string[]>
> = {
  [FirstStepOptions.CHAUFFE_EAU]: [
    "Chauffe-eau qui fuit",
    "Je n'ai plus d'eau chaude",
    "L'éléctricité disjoncte",
    "Autre",
  ],
  [FirstStepOptions.ROBINETS]: ["Evier / Lavabo", "Baignoire / douche"],
  [FirstStepOptions.TOILETTES]: [
    "Toilettes bouchées",
    "Fuite d'eau",
    "L'eau coule de la cuvette en continu",
    "Mon réservoir ne se remplit pas (ou très doucement)",
    "Nouvelle installation ou remplacement",
    "Autre",
  ],
  [FirstStepOptions.FUITES]: [
    "Chauffe-eau",
    "Toilettes",
    "Evier / lavabo",
    "Sous l'évier",
    "Baignoire / douche",
    "Mur",
    "Plafond",
    "Dehors",
    "Autre",
  ],
  [FirstStepOptions.CANALISATIONS]: [
    "Toilettes",
    "Evier de cuisine",
    "Lavabo de salle de bain / WC",
    "Machine à laver / Lave-vaisselle",
    "Baignoire / douche",
    "Autre",
  ],
};
