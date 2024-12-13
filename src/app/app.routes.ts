import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {DetailsComponent} from "./components/details/details.component";
import {authGuard} from "./guards/auth.guard";

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: HomeComponent},
  {path: 'details/:id', component: DetailsComponent, canActivate: [authGuard]},
];
