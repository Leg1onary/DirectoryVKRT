import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {CitiesService} from '../shared/cities.service';
import {MrfService} from '../shared/mrf.service';
import {AngularFireList} from 'angularfire2/database';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {CmsComponent} from '../cms.component';

@Component({
  selector: 'app-citiesmrf-list',
  templateUrl: './citiesmrf-list.component.html',
  styleUrls: ['./citiesmrf-list.component.scss']
})
export class CitiesmrfListComponent implements OnInit {
  constructor(private service: CitiesService,
              private mfrService: MrfService,
              private dialog: MatDialog) { }
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
    this.dialog.open(CmsComponent);
  }

}
