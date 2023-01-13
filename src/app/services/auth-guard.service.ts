import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivate, Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  canActivate() {
    return this.afAuth.authState.pipe(map(auth => {
      if (!auth) {
        this.router.navigate(['login']);
        return false;
      } else {
        return true;
      }
    }));
  }
}

