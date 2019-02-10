import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {NotificationService} from '../shared/notification.service';
import {AngularFireAuth} from 'angularfire2/auth';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ TodoService ]
})
export class HomeComponent implements OnInit {
  toDoListArray: any[];
  inputFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();
  visibleList: boolean;
  currentUser: string;
  checked: boolean;
  constructor(private toDoService: TodoService,
              private notificationService: NotificationService,
              private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.checked = false;
    this.currentUser = this.afAuth.auth.currentUser.email;
    this.toDoService.getToDoList().snapshotChanges()
      .subscribe(item => {
        this.toDoListArray = [];
        item.forEach(element => {
          let x: Object;
          x = element.payload.toJSON();
          x['$key'] = element.key;
          if (this.currentUser == x['username'] || x['forAll']) {
          this.toDoListArray.push(x);
          this.visibleList = true;
          }
        })
        // sort array isChecked false -> true
        this.toDoListArray.sort((a, b) => {
          return a.isChecked - b.isChecked;
        })
      });
  }

  onAdd(itemTitle, forAll) {
    this.toDoService.addTitle(itemTitle.value, this.afAuth.auth.currentUser.email, forAll);
    itemTitle.value = null;
    this.notificationService.success(':: Успешно добавлено');
  }

  alterCheck($key: string, isChecked) {
    this.toDoService.checkOrUnCheckTitle($key, !isChecked);
  }
  onDelete($key: string) {
    this.toDoService.removeTitle($key);
    if (this.toDoListArray.length === 1) {
      this.visibleList = false;
    }
    this.notificationService.warn('! Запись удалена');
  }
}
