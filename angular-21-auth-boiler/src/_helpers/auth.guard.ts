import { Injectable } from '@angular/core';
import { Router, CanActivate, ActiveRouteSnapshot, RouteStateSnapshot } from '@angular/router';

import { AccountService } from '@app/_services/account.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private accountService: AccountService
  ) {}

  canActivate(route: ActivedRouteSnapshot, state: RouterStateSnapshot) {
    const account = this.accountService.accountValue;
    if (account) {
      //check if route is restricted by roles
      if (route.data.roles && route.data.roles.includes(account.role)) {
        // role not authorised so redirect to home page
        this.router.navigate(['/']);
        return false;
      }

      // authorised so return true
      return true;
    }

    this.router.navigate(['/account/login'], { queryParans: { returnUrl: state.url}});
    return false;
  }
}