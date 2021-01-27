import { Injectable } from '@angular/core';
import { CanActivate,
          ActivatedRouteSnapshot,
          RouterStateSnapshot,
          Router
        } from '@angular/router';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // redireciona para tela de login
  constructor(
    private router: Router,
    private accountService: AccountService
    ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.accountService.isUserLoggedIn()) {
      return true; // entra na rota
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
