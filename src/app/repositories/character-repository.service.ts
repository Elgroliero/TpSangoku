import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Character} from "../models/character";
import {map, Observable} from "rxjs";
import {BASE_URL} from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CharacterRepositoryService {

  private readonly BASE_URL = BASE_URL;

  constructor(private http: HttpClient) {
  }

  public getAllCharacters(): Observable<Character[]> {
    return this.http.get<{ items: Character[] }>(`${this.BASE_URL}/characters`).pipe(
      map(response => response.items)
    );
  }

  public getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.BASE_URL}/characters/${id}`).pipe(
      map(response => {
        return response;
      })
    );
  }

}
