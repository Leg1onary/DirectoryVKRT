import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DaDataConfig, DaDataType} from '@kolkov/ngx-dadata';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss']
})
export class CmsComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourFormGroup: FormGroup;
  fiveFormGroup: FormGroup;
  sixFormGroup: FormGroup;
  complete: boolean;
  selected = 'yes';
  checked: false;
  CameraArray: any[];
  configAddress: DaDataConfig = {
    apiKey: '06bb5a438e1971e7f6c99d0e32cccc7b11c6da91',
    type: DaDataType.address,
  };

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.complete = false;
    this.CameraArray = [];

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      firstCtrl: [''],
      secondCtrl: [''],
      thirdCtrl: ['']
    });
    this.thirdFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required],
      thirdCtrl: ['', Validators.required]
    });
    this.fourFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required]
    });
    this.fiveFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.sixFormGroup = this._formBuilder.group({
      currentAddress: ['', Validators.required]
    });
  }

  addCamera(sn: string, model: string) {
    this.CameraArray.push({sn, model});
    this.secondFormGroup.value.secondCtrl = '';
    this.secondFormGroup.value.firstCtrl = '';
  }
  DeleteItem(index) {
    this.CameraArray.splice(index, 1);
  }

  formInfo() {
    this.complete = true;
  }
}
