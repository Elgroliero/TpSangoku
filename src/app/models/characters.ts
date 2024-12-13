import {Planets} from "./planets";

export interface Characters {
  id: number;
  name: string,
  ki: string,
  maxKi: string,
  race: string,
  gender: string,
  description: string
  image: string,
  affiliation: string,
  deletedAt: string | null,
  originPlanet: Planets,
  transformations: any[];
}
