import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  currentUser: User

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> {

    this.authService.currentUser.subscribe(x => this.currentUser = x)

    if (!this.currentUser) {      
      this.router.navigate(['/login'])
      return false
    }    

    if (state.url.includes('delete') && this.currentUser.role != "Admin") {
      this.router.navigate(['/unauthorized'])
      return false
    }

    return true
  }
}
