import {Component} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {CharactersService} from "../../repositories/characters.service";
import {Observable} from "rxjs";
import {Characters} from "../../models/characters";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [CharactersService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public characters$?: Observable<Characters[]>;

  constructor(private charactersService: CharactersService) {
    this.characters$ = this.charactersService.getAllCharacters();
  }

  private getAllCharacters() {
    this.characters$ = this.charactersService.getAllCharacters();
  }


}
