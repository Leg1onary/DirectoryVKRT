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
  mrfList: AngularFireList<any>;
  array = [];
  constructor(private service: CitiesService) { }

  ngOnInit() {
    this.service.getCity().subscribe(
      list => {
        let array = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
          this.listData = new MatTableDataSource(array);
        });
      });
  }

}
