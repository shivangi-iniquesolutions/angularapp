import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })


export class AuthGuard implements CanActivate {

    isLoggedIn = false;

    constructor(
        private router: Router,
        private tokenStorage: TokenStorageService
    ) {}

      canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(this.tokenStorage.getUser()){
            this.isLoggedIn = true;
          return true; 
          

        }else{
          alert("You don't have permission to view this page");
          // not logged in so redirect to login page with the return url
            this.router.navigate(['/login']);
            return false;
        }
      }
        
    
}