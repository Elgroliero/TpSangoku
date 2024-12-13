import {Component, Input, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  @Input() name!: string | null;
  @Input() isAuthenticated: boolean = false;

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.authService.nameLoaded.subscribe(name => this.name = name);
    this.authService.isAuthenticationLoaded.subscribe(result => this.isAuthenticated = result);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  public logOut(): void {
    this.authService.logOut();
    this.name = this.authService.getName();
    this.authService.isAuthenticationLoaded.subscribe(result => this.isAuthenticated = result);
  }
}


