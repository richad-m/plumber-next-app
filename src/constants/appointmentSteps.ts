import { Icons } from "./icons";

export enum AppointmentSteps {
  QUALIFICATION_1 = "qualification1",
  QUALIFICATION_2 = "qualification2,",
  IMPORT_PHOTOS = "import_photos",
  DESCRIPTION = "description",
  CONTACT = "contact",
  CONFIRMATION = "confirmation",
}

export const AppointmentStepsWithSubmitButton = [
  AppointmentSteps.CONTACT,
  AppointmentSteps.DESCRIPTION,
  AppointmentSteps.IMPORT_PHOTOS,
  AppointmentSteps.CONFIRMATION,
];

export const NEXT_STEPS: Partial<Record<AppointmentSteps, AppointmentSteps>> = {
  [AppointmentSteps.QUALIFICATION_1]: AppointmentSteps.QUALIFICATION_2,
  [AppointmentSteps.QUALIFICATION_2]: AppointmentSteps.IMPORT_PHOTOS,
  [AppointmentSteps.IMPORT_PHOTOS]: AppointmentSteps.DESCRIPTION,
  [AppointmentSteps.DESCRIPTION]: AppointmentSteps.CONTACT,
  [AppointmentSteps.CONTACT]: AppointmentSteps.CONFIRMATION,
};

export const PREVIOUS_STEPS: Partial<
  Record<AppointmentSteps, AppointmentSteps>
> = {
  [AppointmentSteps.QUALIFICATION_2]: AppointmentSteps.QUALIFICATION_1,
  [AppointmentSteps.CONFIRMATION]: AppointmentSteps.CONTACT,
};

export enum FirstStepOptions {
  CHAUFFE_EAU = "Chauffe-eau",
  ROBINETS = "Réparations de robinets",
  TOILETTES = "Réparations de toilettes",
  FUITES = "Fuites d'eau",
  CANALISATIONS = "Canalisation bouchées",
  AUTRES = "Autres problèmes de plomberie",
}

export enum SecondStepsOptions {
  CHAUFFE_EAU_FUIT = "Chauffe-eau qui fuit",
  PLUS_EAU_CHAUDE = "Je n'ai plus d'eau chaude",
  ELECTRICITE_DISJONCTE = "L'éléctricité disjoncte",
  AUTRE = "Autre",
  EVIER_LAVABO = "Evier / Lavabo",
  BAIGNOIRE_DOUCHE = "Baignoire / Douche",
  TOILETTES_BOUCHEES = "Toilettes bouchées",
  FUITE_EAU = "Fuite d'eau",
  EAU_COULE_CUVETTE = "L'eau coule de la cuvette en continu",
  RESERVOIR_NON_REMPLI = "Mon réservoir ne se remplit pas (ou très doucement)",
  NOUVELLE_INSTALLATION_REMPlACEMENT = "Nouvelle installation ou remplacement",
  CHAUFFE_EAU = "Chauffe-eau",
  TOILETTES = "Toilettes",
  SOUS_EVIER = "Sous l'évier",
  MUR = "Mur",
  PLAFOND = "Plafond",
  DEHORS = "Dehors",
  EVIER_CUISINE = "Evier de cuisine",
  LAVABO_BAIN_WC = "Lavabo de salle de bain / WC",
  MACHINE_LAVER_LAVE_VAISSELLE = "Machine à laver / Lave-vaisselle",
  DESCRIPTION = "DESCRIPTION",
}

export enum ThirdStepOptions {
  SANS_RESERVOIR = "Sans réservoir",
  STANDARD = "Standard",
  AUTRE_PAS_SUR = "Autre(s) / je ne suis pas sûr",
  INSTALLER_CHANGER_EVIER = "Je souhaite installer ou changer d'évier / lavabo",
  FLAQUE_SOUS_EVIER = "Il y a une flaque sous mon évier / lavabo",
  CANALISATION_BOUCHEES = "Canalisations(s) bouchée(s)",
  ROBINET_FUIT = "Robinet qui fuit",
  PLUS_EAU_CHAUDE = "Je n'ai plus d'eau chaude",
  FAIBLE_DEBIT_EAU = "J'ai un faible débit d'eau",
  AUTRE = "Autre(s)",
  INSTALLER_CHANGER_DOUCHE = "Je souhaite installer / changer de robinet de baignoire / douche",
  FLAQUE_BAIGNOIRE = "Il y a une flaque sous ma baignoire / douche",
  BAIGNOIRE_DOUCHE_FUITE = "Baignoire / douche qui fuit",
  DESCRIPTION = "DESCRIPTION",
}

export const SECOND_TO_THIRD_STEP_OPTIONS: Partial<
  Record<SecondStepsOptions, ThirdStepOptions[]>
> = {
  [SecondStepsOptions.EVIER_LAVABO]: [
    ThirdStepOptions.INSTALLER_CHANGER_EVIER,
    ThirdStepOptions.FLAQUE_SOUS_EVIER,
    ThirdStepOptions.CANALISATION_BOUCHEES,
    ThirdStepOptions.ROBINET_FUIT,
    ThirdStepOptions.PLUS_EAU_CHAUDE,
    ThirdStepOptions.FAIBLE_DEBIT_EAU,
    ThirdStepOptions.AUTRE,
  ],
  [SecondStepsOptions.BAIGNOIRE_DOUCHE]: [
    ThirdStepOptions.INSTALLER_CHANGER_DOUCHE,
    ThirdStepOptions.FLAQUE_BAIGNOIRE,
    ThirdStepOptions.CANALISATION_BOUCHEES,
    ThirdStepOptions.BAIGNOIRE_DOUCHE_FUITE,
    ThirdStepOptions.PLUS_EAU_CHAUDE,
    ThirdStepOptions.FAIBLE_DEBIT_EAU,
    ThirdStepOptions.AUTRE,
  ],
};

export const FIRST_TO_SECOND_STEP_OPTIONS: Partial<
  Record<FirstStepOptions, SecondStepsOptions[]>
> = {
  [FirstStepOptions.CHAUFFE_EAU]: [
    SecondStepsOptions.CHAUFFE_EAU_FUIT,
    SecondStepsOptions.PLUS_EAU_CHAUDE,
    SecondStepsOptions.ELECTRICITE_DISJONCTE,
    SecondStepsOptions.AUTRE,
  ],
  [FirstStepOptions.ROBINETS]: [
    SecondStepsOptions.EVIER_LAVABO,
    SecondStepsOptions.BAIGNOIRE_DOUCHE,
  ],
  [FirstStepOptions.TOILETTES]: [
    SecondStepsOptions.TOILETTES_BOUCHEES,
    SecondStepsOptions.FUITE_EAU,
    SecondStepsOptions.EAU_COULE_CUVETTE,
    SecondStepsOptions.RESERVOIR_NON_REMPLI,
    SecondStepsOptions.NOUVELLE_INSTALLATION_REMPlACEMENT,
    SecondStepsOptions.AUTRE,
  ],
  [FirstStepOptions.FUITES]: [
    SecondStepsOptions.CHAUFFE_EAU,
    SecondStepsOptions.TOILETTES,
    SecondStepsOptions.EVIER_LAVABO,
    SecondStepsOptions.SOUS_EVIER,
    SecondStepsOptions.BAIGNOIRE_DOUCHE,
    SecondStepsOptions.MUR,
    SecondStepsOptions.PLAFOND,
    SecondStepsOptions.DEHORS,
    SecondStepsOptions.AUTRE,
  ],
  [FirstStepOptions.CANALISATIONS]: [
    SecondStepsOptions.TOILETTES,
    SecondStepsOptions.EVIER_CUISINE,
    SecondStepsOptions.LAVABO_BAIN_WC,
    SecondStepsOptions.MACHINE_LAVER_LAVE_VAISSELLE,
    SecondStepsOptions.BAIGNOIRE_DOUCHE,
    SecondStepsOptions.AUTRE,
  ],
};

export const LABEL_TO_ICON: Partial<Record<FirstStepOptions, Icons>> = {
  [FirstStepOptions.CHAUFFE_EAU]: Icons.WaterHeaterIcon,
  [FirstStepOptions.TOILETTES]: Icons.ToiletIcon,
  [FirstStepOptions.ROBINETS]: Icons.FaucetIcon,
  [FirstStepOptions.CANALISATIONS]: Icons.PipeIcon,
  [FirstStepOptions.FUITES]: Icons.WaterIcon,
};

export interface ThirdStepOptionsMap {
  [key: string]: undefined;
}

export interface SecondStepsOptionsMap {
  [key: string]: ThirdStepOptionsMap | undefined;
}

export interface FirstStepOptionsMap {
  [key: string]: SecondStepsOptionsMap | undefined;
}

export type FlowType = Partial<Record<FirstStepOptions, FirstStepOptionsMap>>;

export const FLOW: FlowType = {
  [FirstStepOptions.CHAUFFE_EAU]: {
    [SecondStepsOptions.CHAUFFE_EAU_FUIT]: undefined,
    [SecondStepsOptions.PLUS_EAU_CHAUDE]: undefined,
    [SecondStepsOptions.ELECTRICITE_DISJONCTE]: undefined,
    [SecondStepsOptions.AUTRE]: undefined,
  },
  [FirstStepOptions.ROBINETS]: {
    [SecondStepsOptions.EVIER_LAVABO]: {
      [ThirdStepOptions.INSTALLER_CHANGER_EVIER]: undefined,
      [ThirdStepOptions.FLAQUE_SOUS_EVIER]: undefined,
      [ThirdStepOptions.CANALISATION_BOUCHEES]: undefined,
      [ThirdStepOptions.ROBINET_FUIT]: undefined,
      [ThirdStepOptions.PLUS_EAU_CHAUDE]: undefined,
      [ThirdStepOptions.FAIBLE_DEBIT_EAU]: undefined,
      [ThirdStepOptions.AUTRE]: undefined,
    },
    [SecondStepsOptions.BAIGNOIRE_DOUCHE]: {
      [ThirdStepOptions.INSTALLER_CHANGER_DOUCHE]: undefined,
      [ThirdStepOptions.FLAQUE_BAIGNOIRE]: undefined,
      [ThirdStepOptions.CANALISATION_BOUCHEES]: undefined,
      [ThirdStepOptions.BAIGNOIRE_DOUCHE_FUITE]: undefined,
      [ThirdStepOptions.PLUS_EAU_CHAUDE]: undefined,
      [ThirdStepOptions.FAIBLE_DEBIT_EAU]: undefined,
      [ThirdStepOptions.AUTRE]: undefined,
    },
  },
  [FirstStepOptions.TOILETTES]: {
    [SecondStepsOptions.TOILETTES_BOUCHEES]: undefined,
    [SecondStepsOptions.FUITE_EAU]: undefined,
    [SecondStepsOptions.EAU_COULE_CUVETTE]: undefined,
    [SecondStepsOptions.RESERVOIR_NON_REMPLI]: undefined,
    [SecondStepsOptions.NOUVELLE_INSTALLATION_REMPlACEMENT]: undefined,
    [SecondStepsOptions.AUTRE]: undefined,
  },
  [FirstStepOptions.FUITES]: {
    [SecondStepsOptions.CHAUFFE_EAU]: undefined,
    [SecondStepsOptions.TOILETTES]: undefined,
    [SecondStepsOptions.EVIER_LAVABO]: undefined,
    [SecondStepsOptions.SOUS_EVIER]: undefined,
    [SecondStepsOptions.BAIGNOIRE_DOUCHE]: undefined,
    [SecondStepsOptions.MUR]: undefined,
    [SecondStepsOptions.PLAFOND]: undefined,
    [SecondStepsOptions.DEHORS]: undefined,
    [SecondStepsOptions.AUTRE]: undefined,
  },
  [FirstStepOptions.CANALISATIONS]: {
    [SecondStepsOptions.TOILETTES]: undefined,
    [SecondStepsOptions.EVIER_CUISINE]: undefined,
    [SecondStepsOptions.LAVABO_BAIN_WC]: undefined,
    [SecondStepsOptions.MACHINE_LAVER_LAVE_VAISSELLE]: undefined,
    [SecondStepsOptions.BAIGNOIRE_DOUCHE]: undefined,
    [SecondStepsOptions.AUTRE]: undefined,
  },
};
