import {Component, OnInit} from '@angular/core';
import {CharacterRepositoryService} from "../../repositories/character-repository.service";
import {catchError, map, Observable, shareReplay, tap, throwError} from "rxjs";
import {Character} from "../../models/character";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    HttpClientModule,
    AsyncPipe,
    NgIf,
    RouterLink
  ],
  providers: [CharacterRepositoryService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  public characters$?: Observable<Character[]>;
  public paginatedCharacters$?: Observable<Character[]>;
  public currentPage: number = 1;
  public pageSize: number = 6;
  public totalPages: number = 1;

  constructor(private characterRepositoryService: CharacterRepositoryService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  public loadCharacters(): void {
    this.characters$ = this.characterRepositoryService.getAllCharacters().pipe(
      map((characters: Character[]) => {
        this.totalPages = Math.ceil(characters.length / this.pageSize);
        return characters;
      }),
      shareReplay(1)
    );

    this.paginatedCharacters$ = this.characters$.pipe(
      map(characters => this.getPaginatedCharacters(characters, this.currentPage))
    );
  }

  private getPaginatedCharacters(characters: Character[], page: number): Character[] {
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return characters.slice(startIndex, endIndex);
  }

  public changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;

    this.paginatedCharacters$ = this.characters$?.pipe(
      map(characters => this.getPaginatedCharacters(characters, this.currentPage))
    );
  }

  public previousPage(): void {
    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }

  public nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }
}
