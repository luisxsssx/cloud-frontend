import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { map, from } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const account_service = inject(AuthService)
  return from(account_service.isAuthenticated()).pipe(
    map((isAuthenticated: any) => {
      if (isAuthenticated) {
        return true;
      } else {
        return false;
      }
    })
  );
};