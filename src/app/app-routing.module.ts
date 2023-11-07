import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginGuard } from './login.guard';
import { loginBackGuard } from './login-back.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [loginBackGuard],
    loadChildren: () => import('./auth/auth.module').then((x) => x.AuthModule),
  },
  {
    path: 'bank',
    loadChildren: () => import('./bank/bank.module').then((x) => x.BankModule),
    canActivate: [loginGuard],
  },

  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
