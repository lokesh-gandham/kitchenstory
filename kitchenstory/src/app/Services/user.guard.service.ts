import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginServiceService } from './login.service.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate{

  constructor(private loginService: LoginServiceService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginService.isLoggedIn() && this.loginService.getUserRole() == 'USER') {
      return true;
    }
    this.router.navigate(['/user/login']);
    return false;

  }

}
