import {Planet} from "./planet";
import {Transformation} from "./transformation";
import {Race} from "../constants/constants";

export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: Race;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: string | null;
  originPlanet: Planet;
  transformations: Transformation[];
}
