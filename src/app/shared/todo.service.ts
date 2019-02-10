import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getToDoList() {
    this.toDoList = this.firebasedb.list('toDoList');
    return this.toDoList;
  }
  addTitle(title: string, username: string, forAll: boolean) {
    this.toDoList.push({
      title: title,
      username: username,
      dateAdd: Date(),
      forAll: forAll,
      isChecked: false
    });
  }
  checkOrUnCheckTitle($key: string, flag: boolean) {
    this.toDoList.update($key, {isChecked: flag});
  }
  removeTitle($key: string) {
    this.toDoList.remove($key);
  }

}
