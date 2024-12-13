import {Planet} from "./planet";
import {Transformation} from "./transformation";

export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: string | null;
  originPlanet: Planet; // Inclure la planète d'origine
  transformations: Transformation[]; // Inclure les transformations
}
