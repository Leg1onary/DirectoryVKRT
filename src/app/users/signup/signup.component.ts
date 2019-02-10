import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  state: string;
  error: any;
  constructor(public  afAuth: AngularFireAuth, private router: Router) { }
  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password).then(
        (success) => {
          this.router.navigate(['']);
        }).catch(
        (err) => {
          this.error = err;
        });
    }
  }

  ngOnInit() {
  }

}
