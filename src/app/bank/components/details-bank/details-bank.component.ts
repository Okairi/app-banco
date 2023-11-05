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

  constructor(
    private rutaActiva: ActivatedRoute,
    private serviceBank: BankService
  ) {}

  ngOnInit(): void {
    this.rutaActiva.params.subscribe({
      next: (val: any) => {
        console.log(val.id);

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
        .pipe(
          delay(6000) // Agrega un retraso de 5 segundos (por ejemplo)
        )
        .subscribe({
          next: (newVal: any) => {
            this.handleResponse(newVal, id); // Llamada recursiva para comprobar el nuevo valor
          },
        });
    } else {
      this.isLoading = false; // Se ha obtenido un valor válido, ya no se está cargando
      console.log(val);
      // Realizar otras acciones con el valor obtenido si es necesario
    }
  }
}
