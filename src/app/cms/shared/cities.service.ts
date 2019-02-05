import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  constructor(private firebase: AngularFireDatabase) { }

  citiesList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    Name: new FormControl('', Validators.required),
    department: new FormControl(0)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      Name: '',
      department: 0,
    });
  }

  getCity() {
    this.citiesList = this.firebase.list('cities');
    return this.citiesList.snapshotChanges();
  }

  insertCity(city) {
    this.citiesList.push({
      Name: city.Name,
      department: city.department
    });
  }

  updateCity(city) {
    this.citiesList.update(city.$key,
      {
        Name: city.Name,
        department: city.department
      });
  }

  deleteCity($key: string) {
    this.citiesList.remove($key);
  }
}
