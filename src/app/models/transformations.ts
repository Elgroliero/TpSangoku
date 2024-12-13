import {Characters} from "./characters";

export interface Transformations {
  id: number,
  name: string,
  image: string,
  ki: string,
  deletedAt: string | null,
  characters: Characters[]
}
