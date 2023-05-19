export interface IRegion {
  FisheryManagement: null | string
  Habitat: null | string
  HabitatImpacts: null | string
  ImageGallery: SpeciesIllustrationPhoto[] | SpeciesIllustrationPhoto | null
  Location: null | string
  Management: null | string
  NOAAFisheriesRegion: NOAAFisheriesRegion
  Population: null | string
  PopulationStatus: null | string
  ScientificName: string
  SpeciesAliases: string
  SpeciesIllustrationPhoto: SpeciesIllustrationPhoto
  SpeciesName: string
  AnimalHealth: null | string
  Availability: string
  Biology: string
  Bycatch: null | string
  Calories: null | string
  Carbohydrate: null | string
  Cholesterol: null | string
  Color: null | string
  DiseaseTreatmentandPrevention: null
  DiseasesinSalmon: null | string
  DisplayedSeafoodProfileIllustration: null
  EcosystemServices: null | string
  EnvironmentalConsiderations: null | string
  EnvironmentalEffects: null | string
  FarmingMethods: null | string
  FarmingMethods_: null | string
  FatTotal: null | string
  Feeds_: null | string
  Feeds: null | string
  FiberTotalDietary: null | string
  FishingRate: null | string
  Harvest: null | string
  HarvestType: HarvestType
  HealthBenefits: null | string
  Human_Health_: null | string
  HumanHealth: null | string
  PhysicalDescription: string
  Production: null | string
  Protein: null | string
  Quote: string
  QuoteBackgroundColor: string
  Research: null | string
  SaturatedFattyAcidsTotal: null | string
  Selenium: null | string
  ServingWeight: ServingWeight | null
  Servings: null | string
  Sodium: null | string
  Source: string
  SugarsTotal: null | string
  Taste: null | string
  Texture: null | string
  Path: string
  last_update: string
}

export enum HarvestType {
  Farmed = "Farmed",
  Wild = "Wild",
}

export interface SpeciesIllustrationPhoto {
  src: string
  alt: string
  title: string
}

export enum NOAAFisheriesRegion {
  Alaska = "Alaska",
  GreaterAtlantic = "Greater Atlantic",
  PacificIslands = "Pacific Islands",
  Southeast = "Southeast",
  WestCoast = "West Coast",
}

export enum ServingWeight {
  NA = "n/a",
  ServingWeight100GRaw = "100 g (raw) ",
  The100G = "100 g",
  The100G3OzRaw = "100 g (3½ oz) raw",
  The100GRaw = "100 g (raw)",
  The113G = "113 g",
  The113G4OzFresh = "113 g / 4 oz (fresh)",
  The113GFresh = "113 g (fresh)",
  The114GRaw = "114 g (raw)",
  The4OzRaw = "4 oz. (raw)",
}
