import {
  Injectable
} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import {
  Observable
} from 'rxjs';
import { FirebaseService } from './firebase.service';
import {
  ServisService
} from './servis.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public servis: FirebaseService,public router:Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable < boolean | UrlTree > | Promise < boolean | UrlTree > | boolean | UrlTree {
    if (!this.servis.OturumKontrol()) {
      this.router.navigate(['girisyap'])
      return false;
    } else {
      return true;
    }
  }

}
