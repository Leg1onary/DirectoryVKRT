import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {NotificationService} from '../../shared/notification.service';
import {DialogService} from '../../shared/dialog.service';
import {AngularFireList} from 'angularfire2/database';
import {CmshistoryService} from '../../shared/cmshistory.service';
import {CmsHelementComponent} from '../cms-helement/cms-helement.component';

@Component({
  selector: 'app-cmshistory',
  templateUrl: './cmshistory.component.html',
  styleUrls: ['./cmshistory.component.scss']
})
export class CmshistoryComponent implements OnInit {

  constructor(public service: CmshistoryService,
              private dialog: MatDialog,
              private notificationService: NotificationService,
              private dialogService: DialogService) { }
  listData: AngularFireList<any>;
  displayedColumns: string[] = ['CmsNumber', 'Organization', 'Address', 'Email', 'UserAdd', 'DateAdd', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
    this.service.getCmsHistory().subscribe(
      list => {
        let array = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        // @ts-ignore
        this.listData = new MatTableDataSource(array);
        // @ts-ignore
        this.listData.sort = this.sort;
        // @ts-ignore
        this.listData.paginator = this.paginator;
        // @ts-ignore
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(ele => {
            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
          });
        };
      });
  }
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    // @ts-ignore
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

   onEdit(row) {
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.width = '60%';
    this.dialog.open(CmsHelementComponent, dialogConfig);
  }
  onDelete($key) {
    this.dialogService.openConfirmDialog('Вы уверены, что нужно удалить данную запись?')
      .afterClosed().subscribe(res => {
      if (res) {
        this.service.deleteCmsHistory($key);
        this.notificationService.warn('Успешно удалено');
      }
    });
  }

}
