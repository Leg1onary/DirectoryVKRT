import { Component, OnInit } from '@angular/core';
import {AngularFireAuth, AUTH_PROVIDERS} from 'angularfire2/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']

})
export class EmailComponent implements OnInit {
  state: string;
  error: any;
  constructor(public  afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState
      .subscribe(auth => {
        if (auth) {
          this.router.navigateByUrl('');
        }
      });
  }
  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password).then(
        (success) => {
          this.router.navigate(['']);
        }).catch(
        (err) => {
          this.error = err;
        })
    }
  }
  ngOnInit() {
  }

}
