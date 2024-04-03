import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('At route guard - isLoggedIn: ', authService.isLoggedInState);

  if (!authService.isLoggedInState) {
    return router.parseUrl('login')
  }
  return true;
};
