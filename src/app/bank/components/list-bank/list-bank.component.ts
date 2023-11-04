import { Component, OnInit } from '@angular/core';
import { BankService } from '../../service/bank.service';

@Component({
  selector: 'app-list-bank',
  templateUrl: './list-bank.component.html',
  styleUrls: ['./list-bank.component.scss'],
})
export class ListBankComponent implements OnInit {
  bankList: any = [];
  constructor(private serviceBank: BankService) {}
  ngOnInit(): void {
    this.serviceBank.getBanks().subscribe({
      next: (val: any) => {
        console.log(val);
        this.bankList = val.results;
      },
    });
  }
}
