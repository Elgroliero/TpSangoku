import {CanActivateFn, Router} from '@angular/router';
import {AuthenticationService} from "../services/authentication.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(AuthenticationService);
  const router = inject(Router);
  if (userService.isAuthenticated()) {
    return true;
  } else {
    router.navigate([''], {queryParams: {message: "VOUS NE PASSEREZ PAS!"}});
  }
  return false;
};
