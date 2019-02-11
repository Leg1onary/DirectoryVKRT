import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { Router } from '@angular/router';
import {NotificationService} from '../../shared/notification.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']

})
export class EmailComponent implements OnInit {
  state: string;
  error: any;
  constructor(public  afAuth: AngularFireAuth, private router: Router,
              private notificationService: NotificationService) {
    this.afAuth.authState
      .subscribe(auth => {
        if (auth) {
          this.router.navigateByUrl('');
        }
      });
  }
  onSubmit(formData) {
    if (formData.valid) {
      this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password).then(
        (success) => {
          this.notificationService.success('Успешная авторизация');
          this.router.navigate(['']);
        }).catch(
        (err) => {
          this.error = err;
          if (this.error.code === 'auth/invalid-email') {
            this.notificationService.warn('! Некорректный email');
          }
          if (this.error.code === 'auth/wrong-password') {
            this.notificationService.warn('! Ошибка авторизации');
          }
        });
    }
  }
  ngOnInit() {
  }

}
