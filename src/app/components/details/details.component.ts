import {Component, OnInit} from '@angular/core';
import {Character} from "../../models/character";
import {ActivatedRoute} from "@angular/router";
import {CharacterRepositoryService} from "../../repositories/character-repository.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    HttpClientModule,
    NgIf,
    AsyncPipe,
    NgForOf
  ],
  providers: [CharacterRepositoryService],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent implements OnInit {

  public character: Character | undefined;

  constructor(
    private route: ActivatedRoute,
    private characterRepositoryService: CharacterRepositoryService
  ) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("id de l'url :" + id);
    if (id) {
      this.loadCharacter(id);
    }
  }

  public loadCharacter(id: number): void{
    this.characterRepositoryService.getCharacter(id).subscribe(
      response => {
        this.character = response;
      }
    )
  }
}

