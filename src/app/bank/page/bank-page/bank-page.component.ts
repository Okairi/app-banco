import { Component, OnInit, inject } from '@angular/core';
import { user } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-page',
  templateUrl: './bank-page.component.html',
  styleUrls: ['./bank-page.component.scss'],
})
export class BankPageComponent implements OnInit {
  userNameLogin = '';
  ngOnInit(): void {
    let userName = localStorage.getItem('user')!;

    this.userNameLogin = userName;
  }
  router = inject(Router);
  showLogout: boolean = false;

  toggleLogoutButton() {
    this.showLogout = !this.showLogout;
  }

  logout() {
    localStorage.removeItem('token');
    this.showLogout = false;
    this.router.navigate(['auth']);
  }
}
