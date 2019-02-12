import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CmshistoryService {

  constructor(private firebase: AngularFireDatabase) { }
  CmsHistoryList: AngularFireList<any>;
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    CmsNumber: new FormControl(''),
    Organization: new FormControl(''),
    Address: new FormControl(''),
    Email: new FormControl(''),
    UserAdd: new FormControl(''),
    DateAdd: new FormControl('')
  });

  getCmsHistory() {
    this.CmsHistoryList = this.firebase.list('CmsHistory');
    return this.CmsHistoryList.snapshotChanges();
  }
  insertCmsHistory(Organization, Address, Email, UserAdd) {
    this.CmsHistoryList.push({
      CmsNumber: '',
      Organization: Organization,
      Address: Address,
      Email: Email,
      UserAdd: UserAdd,
      DateAdd: Date()
    });
  }

  updateCmsNumber(CmsElement) {
    this.CmsHistoryList.update(CmsElement.$key,
      {
        CmsNumber: CmsElement.CmsNumber
      });
  }

  deleteCmsHistory($key: string) {
    this.CmsHistoryList.remove($key);
  }
  populateForm(CmsElement) {
    this.form.setValue(CmsElement);
  }
}
