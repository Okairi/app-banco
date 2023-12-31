import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';
import { ListBankComponent } from './components/list-bank/list-bank.component';
import { DetailsBankComponent } from './components/details-bank/details-bank.component';
import { BankPageComponent } from './page/bank-page/bank-page.component';
import { AcordionComponent } from './components/acordion/acordion.component';

@NgModule({
  declarations: [ListBankComponent, DetailsBankComponent, BankPageComponent, AcordionComponent],
  imports: [CommonModule, BankRoutingModule, HttpClientModule],
})
export class BankModule {}
