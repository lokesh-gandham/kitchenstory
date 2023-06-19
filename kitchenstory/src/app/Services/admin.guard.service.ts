import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginServiceService } from './login.service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(private loginService: LoginServiceService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginService.isLoggedIn() && this.loginService.getUserRole() == 'ADMIN') {
      return true;
    }
    this.router.navigate(['/admin/login']);
    return false;

  }
}
