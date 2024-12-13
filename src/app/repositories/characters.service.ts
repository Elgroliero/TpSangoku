import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Characters} from "../models/characters";
import {catchError, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private readonly BASE_URL = "https://dragonball-api.com/api/characters";

  constructor(private http: HttpClient) {
  }

  public getAllCharacters(): Observable<Characters[]> {
    return this.http.get<{
      items: Characters[]
    }>(`${this.BASE_URL}`).pipe(map(response => response.items),);
  }
}
