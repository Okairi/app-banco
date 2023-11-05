import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBankComponent } from './components/list-bank/list-bank.component';
import { DetailsBankComponent } from './components/details-bank/details-bank.component';
import { BankPageComponent } from './page/bank-page/bank-page.component';

const routes: Routes = [
  {
    path: '',
    component: BankPageComponent,
    children: [
      {
        path: 'list',
        component: ListBankComponent,
      },
      {
        path: 'details/:id',
        component: DetailsBankComponent,
      },

      {
        path: '**',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankRoutingModule {}
