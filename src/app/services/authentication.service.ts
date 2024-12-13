import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
  }

  @Output()
  public nameLoaded = new EventEmitter<string>();
  @Output()
  public isAuthenticationLoaded: EventEmitter<boolean> = new EventEmitter<boolean>();

  public logIn(name: string) {
    localStorage.setItem('user', JSON.stringify({'name': name}));
    console.log("connexion");
    this.nameLoaded.emit(name);
    this.isAuthenticationLoaded.emit(true);
  }

  public getName(): string {
    const user = localStorage.getItem('user');
    if (user)
      return JSON.parse(user).name;
    return '';
  }

  public logOut() {
    localStorage.removeItem('user');
    this.nameLoaded.emit('');
    console.log("déconnexion")
    this.isAuthenticationLoaded.emit(false);
  }

  public isAuthenticated(): boolean {
    return this.getName() != '';
  }
}
