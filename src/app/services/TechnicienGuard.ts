import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './AuthService';

@Injectable({
  providedIn: 'root'
})
export class TechnicienGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role = this.authService.getRole();
    if (role) {
      const roles = this.authService.getUserRoles(role);
      if (roles.includes(state.url)) {
        return true;
      } else {
        this.router.navigate(['/error']);
        return false;
      }
    } else {
        this.router.navigate(['/error']);
        return false;
    }

  }
}
