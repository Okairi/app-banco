import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginBackGuard: CanActivateFn = (route, state) => {
  let tokenBack = localStorage.getItem('token');
  let ruta = inject(Router);

  if (tokenBack) {
    ruta.navigate(['bank']);
  }

  return true;
};
