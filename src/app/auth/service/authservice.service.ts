import { Injectable } from '@angular/core';

import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  constructor(private auth: Auth) {}

  public objUser: any = {};
  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}
