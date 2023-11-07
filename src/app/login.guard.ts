import { CanActivateFn, Router } from '@angular/router';
import { Inject, inject } from '@angular/core';
import { AuthserviceService } from './auth/service/authservice.service';

export const loginGuard: CanActivateFn = (route, state) => {
  let ruta = inject(Router);

  let token = localStorage.getItem('token');

  if (token) {
    return true;
  } else {
    ruta.navigate(['auth']);
  }

  return token ? true : false;
};
