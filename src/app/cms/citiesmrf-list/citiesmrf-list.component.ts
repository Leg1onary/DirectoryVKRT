import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {CitiesService} from '../shared/cities.service';
import {MrfService} from '../shared/mrf.service';
import {AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'app-citiesmrf-list',
  templateUrl: './citiesmrf-list.component.html',
  styleUrls: ['./citiesmrf-list.component.scss']
})
export class CitiesmrfListComponent implements OnInit {
  constructor(private service: CitiesService) { }
  listData: AngularFireList<any>;
  array = [];
  displayedColumns: string[] = ['Name', 'MRF', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.service.getCity().subscribe(
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
      });
  }

}
