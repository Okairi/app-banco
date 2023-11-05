import { Component, OnInit } from '@angular/core';
import { BankService } from '../../service/bank.service';
import { delay, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list-bank',
  templateUrl: './list-bank.component.html',
  styleUrls: ['./list-bank.component.scss'],
})
export class ListBankComponent implements OnInit {
  bankList: any = [];
  lisTransaction: any = [];
  isLoading = true;
  isLoadingCard = false;
  selectedCardIndex: number = -1;

  constructor(private serviceBank: BankService, private rutaActiva: Router) {}

  ngOnInit(): void {
    this.serviceBank.getBanks().subscribe({
      next: (val: any) => {
        console.log(val);
        this.isLoading = false;
        this.bankList = val.results;
      },
    });
  }

  showBank(name: string, display_name: string) {
    this.isLoading = true;

    const obj = {
      institution: name,
      username: 'bnk100',
      password: 'full',
    };

    this.serviceBank.createLinksBanks(obj).subscribe({
      next: (value: any) => {
        this.isLoading = false;
        console.log(value);
        this.rutaActiva.navigate(['/bank/details', value.id, display_name]);
      },
    });
  }
}
