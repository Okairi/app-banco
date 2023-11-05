import {
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BankService } from '../../service/bank.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-details-bank',
  templateUrl: './details-bank.component.html',
  styleUrls: ['./details-bank.component.scss'],
})
export class DetailsBankComponent implements OnInit {
  isLoading = false;
  title: string = '';
  resultsTotal: any = [];
  balance: any;
  constructor(
    private rutaActiva: ActivatedRoute,
    private serviceBank: BankService
  ) {}

  ngOnInit(): void {
    this.rutaActiva.params.subscribe({
      next: (val: any) => {
        console.log(val);
        this.title = val.info;

        this.viewBalance(val.id);
      },
    });
  }

  viewBalance(id: string) {
    this.isLoading = true; // Indicar que se está cargando
    this.serviceBank.listTransactions(id).subscribe({
      next: (val: any) => {
        this.handleResponse(val, id);
      },
    });
  }

  handleResponse(val: any, id: string) {
    if (val.count < 1) {
      console.log(
        'El valor es menor a 1. Esperando antes de realizar una nueva solicitud...'
      );

      this.serviceBank
        .listTransactions(id)
        .pipe(delay(6000))
        .subscribe({
          next: (newVal: any) => {
            this.handleResponse(newVal, id);
          },
        });
    } else {
      this.resultsTotal = val.results;
      this.isLoading = false;
      console.log(val);

      let totalInflow = 0;
      let totalOutflow = 0;

      val.results.forEach((entry: any) => {
        if (entry.type === 'INFLOW') {
          totalInflow += entry.amount;
        } else if (entry.type === 'OUTFLOW') {
          totalOutflow += entry.amount;
        }
      });
      this.balance = totalInflow - totalOutflow;
    }
  }
}
