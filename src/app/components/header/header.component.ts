import {Component, Input, OnInit} from '@angular/core';
import {NavComponent} from "../nav/nav.component";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Input() public name!: string;

  constructor(private authService: AuthenticationService) {

  }

  ngOnInit() {
    this.authService.nameLoaded.subscribe(name => this.name = name);
  }
}
