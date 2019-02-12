import { Component, OnInit } from '@angular/core';
import {CmshistoryService} from '../../shared/cmshistory.service';
import {NotificationService} from '../../shared/notification.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-cms-helement',
  templateUrl: './cms-helement.component.html',
  styleUrls: ['./cms-helement.component.scss']
})
export class CmsHelementComponent implements OnInit {

  constructor(private service: CmshistoryService,
              private notificationService: NotificationService,
              public dialogRef: MatDialogRef<CmsHelementComponent>) { }

  ngOnInit() {
    this.service.getCmsHistory();
  }

  onSubmit() {
    if (this.service.form.valid) {
        this.service.updateCmsNumber(this.service.form.value);
      }
      this.service.form.reset();
     this.notificationService.success('Успешно добавлено');
      this.onClose();
    }

  onClose() {
    this.service.form.reset();
    this.dialogRef.close();
  }
}

