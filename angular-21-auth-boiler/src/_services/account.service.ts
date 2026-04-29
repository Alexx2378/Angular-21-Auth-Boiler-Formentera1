import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from '@app/_models/account';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private accountSubject = new BehaviorSubject<Account | null>(null);
  public account$ = this.accountSubject.asObservable();

  constructor() {}

  public get accountValue(): Account | null {
    return this.accountSubject.value;
  }

  login(email: string, password: string) {
    // simulate login
    const account = { email, jwtToken: 'fake-jwt-token' } as Account;
    this.accountSubject.next(account);
    return account;
  }

  logout() {
    this.accountSubject.next(null);
  }

  register(params: any) {
    console.log('Registered:', params);
  }

  verifyEmail(token: string) {
    console.log('Verify token:', token);
  }

  forgotPassword(email: string) {
    console.log('Forgot password:', email);
  }

  resetPassword(token: string, password: string) {
    console.log('Reset password:', token, password);
  }
}