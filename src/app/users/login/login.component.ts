import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: any;
  constructor(public  afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState
      .subscribe(auth => {
        if (auth) {
          this.router.navigateByUrl('');
        }
      });
  }
  ngOnInit() {
  }
  loginFB() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(
      (success) => {
        console.log(success);
        this.router.navigate(['']);
      }).catch(
      (err) => {
        console.log(err);
        this.error = err;
      });
  }
  loginGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      (success) => {
        console.log(success);
        this.router.navigate(['']);
      }).catch(
      (err) => {
        console.log(err);
        this.error = err;
      });
}
}
