import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router ,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router) { }

  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       // console.log(route);//'candidates'
        if (localStorage.getItem('isLogged')) {
            this.router.navigate(['./dashboard']);
            return false;
        }
        
        
        return true;
      }
}
