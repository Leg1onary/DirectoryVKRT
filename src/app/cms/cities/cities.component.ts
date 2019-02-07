import { Component, OnInit } from '@angular/core';

import {CitiesService} from '../../shared/cities.service';
import {MrfService} from '../../shared/mrf.service';
import {NotificationService} from '../../shared/notification.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  constructor(private service: CitiesService,
              private departmentService: MrfService,
              private notificationService: NotificationService,
              public dialogRef: MatDialogRef<CitiesComponent>) { }

  ngOnInit() {
    this.service.getCity();
  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();

  }

  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get('$key').value) {
        this.service.insertCity(this.service.form.value);
      } else {
        this.service.updateCity(this.service.form.value);
      }
      this.service.insertCity(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success('Успешно добавлено');
      this.onClose();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
