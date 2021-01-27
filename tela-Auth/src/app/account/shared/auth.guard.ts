import { Injectable } from '@angular/core';
import { CanActivate,
          ActivatedRouteSnapshot,
          RouterStateSnapshot,
          Router
        } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // redireciona para tela de login
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = window.localStorage.getItem('token');
    if (token) {
      return true; // entra na rota
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
