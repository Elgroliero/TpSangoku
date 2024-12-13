import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Character} from "../models/character";
import {catchError, map, Observable, retry, tap, throwError, timeout} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharacterRepositoryService {

  private readonly BASE_URL = "https://dragonball-api.com/api"

  constructor(private http: HttpClient) {
  }

  public getAllCharacters(): Observable<Character[]> {
    return this.http.get<{ items: Character[] }>(`${this.BASE_URL}/characters`).pipe(
      map(response => response.items),
      catchError(this.handleError)
    );
  }
  public getCharacter(id: number) {
    return this.http.get<Character>(`${this.BASE_URL}/characters/${id}`).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('ERROR :', error);
    return throwError(() => new Error('ROBLEME !'));
  }
}
