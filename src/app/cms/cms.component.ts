import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
  records: string[] = ['Record 1', 'Record 2', 'Record 3', 'Record 4', 'Record 5'];
  selected = 'yes';
  checked: false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.complete = false;

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
      secondCtrl: ['', Validators.required]
    });
    this.fourFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required]
    });
    this.fiveFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.sixFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
  }

  formInfo() {
    this.complete = true;
  }
}
