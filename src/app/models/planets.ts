import {Characters} from "./characters";

export interface Planets {
  id: number,
  name: string,
  image: string,
  ki: string,
  deletedAt: string | null,
  characters: Characters[]
}
