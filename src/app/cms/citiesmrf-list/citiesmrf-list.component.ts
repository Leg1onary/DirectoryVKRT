import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import {CitiesService} from '../../shared/cities.service';
import {MrfService} from '../../shared/mrf.service';
import {AngularFireList} from 'angularfire2/database';
import {CitiesComponent} from '../cities/cities.component';
import {NotificationService} from '../../shared/notification.service';
import {DialogService} from '../../shared/dialog.service';

@Component({
  selector: 'app-citiesmrf-list',
  templateUrl: './citiesmrf-list.component.html',
  styleUrls: ['./citiesmrf-list.component.scss']
})
export class CitiesmrfListComponent implements OnInit {
  constructor(private service: CitiesService,
              private mfrService: MrfService,
              private dialog: MatDialog,
              private notificationService: NotificationService,
              private dialogService: DialogService) { }
  listData: AngularFireList<any>;
  displayedColumns: string[] = ['Name', 'mfrName', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
    this.service.getCity().subscribe(
      list => {
        let array = list.map(item => {
          let mfrName = this.mfrService.getMrfName(item.payload.val()['department']);
          return {
            $key: item.key,
            mfrName,
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

  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.width = '60%';
    this.dialog.open(CitiesComponent, dialogConfig);
  }
  onEdit(row) {
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.width = '60%';
    this.dialog.open(CitiesComponent, dialogConfig);
  }
  onDelete($key) {
    this.dialogService.openConfirmDialog('Вы уверены, что нужно удалить данную запись?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.service.deleteCity($key);
          this.notificationService.warn('Успешно удалено');
        }
    });
  }

}
