import { CanActivate, Router} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable} from '@angular/core';
import 'rxjs-compat/add/operator/do';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/take';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.afAuth.authState
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
      if (!authenticated) {
        this.router.navigate(['login']);
      }
    });
  }
}
