import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BankService {
  constructor(private http: HttpClient) {}

  getBanks() {
    return this.http.get(`${environment.BASE_URL}/institutions/`);
  }

  createLinksBanks(obj: any) {
    return this.http.post(`${environment.BASE_URL}/links/`, obj);
  }

  listTransactions(id: string) {
    const ruta = `${environment.BASE_URL}/transactions/?page=1&link=${id}`;

    return this.http.get(ruta);
  }
}
