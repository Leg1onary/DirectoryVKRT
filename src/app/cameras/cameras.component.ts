import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface CamerasElement {
  name: string;
  version: string;
  link: string;
}

const ELEMENT_DATA: CamerasElement[] = [
  {name: 'DS-2CD2432F-I(W)', version: 'R0', link: 'https://portal.rtk-dc.ru/disk/showFile/3651/?&ncc=1&filename=r0.zip'},
  {name: 'DS-2CD2032-I', version: 'R0', link: 'https://portal.rtk-dc.ru/disk/showFile/3651/?&ncc=1&filename=r0.zip'},
  {name: 'DS-2CD1402FD-IW', version: 'R2', link: 'https://portal.rtk-dc.ru/disk/showFile/3652/?&ncc=1&filename=r2.zip'},
  {name: 'DS-2CD-VC1W', version: 'R2', link: 'https://portal.rtk-dc.ru/disk/showFile/3652/?&ncc=1&filename=r2.zip'},
  {name: 'HiWatch DS-I114W', version: 'R2', link: 'https://portal.rtk-dc.ru/disk/showFile/3652/?&ncc=1&filename=r2.zip'},
  {name: 'HiWatch DS-I122', version: 'R2', link: 'https://portal.rtk-dc.ru/disk/showFile/3652/?&ncc=1&filename=r2.zip'},
  {name: 'HiWatch DS-I120', version: 'R2', link: 'https://portal.rtk-dc.ru/disk/showFile/3652/?&ncc=1&filename=r2.zip'},
  {name: 'HiWatch DS-I220', version: 'R2', link: 'https://portal.rtk-dc.ru/disk/showFile/3652/?&ncc=1&filename=r2.zip'},
  {name: 'HiWatch DS-N241W', version: 'R2', link: 'https://portal.rtk-dc.ru/disk/showFile/3652/?&ncc=1&filename=r2.zip'},
  {name: 'DS-2CD2022WD-I', version: 'R6', link: 'https://portal.rtk-dc.ru/disk/showFile/3653/?&ncc=1&filename=r6.zip'},
  {name: 'DS-2CD2022WD-I', version: 'R6', link: 'https://portal.rtk-dc.ru/disk/showFile/3653/?&ncc=1&filename=r6.zip'},
  {name: 'DS-2CD2142FWD-IS', version: 'R6', link: 'https://portal.rtk-dc.ru/disk/showFile/3653/?&ncc=1&filename=r6.zip'},
  {name: 'DS-2CD2442FWD-IW', version: 'R6', link: 'https://portal.rtk-dc.ru/disk/showFile/3653/?&ncc=1&filename=r6.zip'},
  {name: 'DS-2CD2622FWD-IS', version: 'R6', link: 'https://portal.rtk-dc.ru/disk/showFile/3653/?&ncc=1&filename=r6.zip'},
  {name: 'DS-2CD2522FWD-IS', version: 'R6', link: 'https://portal.rtk-dc.ru/disk/showFile/3653/?&ncc=1&filename=r6.zip'},
  {name: 'DS-2CD2542FWD-IS', version: 'R6', link: 'https://portal.rtk-dc.ru/disk/showFile/3653/?&ncc=1&filename=r6.zip'},
  {name: 'DS-2CD2542FWD-IWS', version: 'R6', link: 'https://portal.rtk-dc.ru/disk/showFile/3653/?&ncc=1&filename=r6.zip'},
  {name: 'DS-2CD2722FWD-IS', version: 'R6', link: 'https://portal.rtk-dc.ru/disk/showFile/3653/?&ncc=1&filename=r6.zip'},
  {name: 'DS-2CD2742FWD-IS', version: 'R6', link: 'https://portal.rtk-dc.ru/disk/showFile/3653/?&ncc=1&filename=r6.zip'},
  {name: 'DS-2CD2742FWD-IZS', version: 'R6', link: 'https://portal.rtk-dc.ru/disk/showFile/3653/?&ncc=1&filename=r6.zip'},
];

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss']
})
export class CamerasComponent implements OnInit {
  displayedColumns: string[] = ['name', 'version', 'link'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit() {
  }

}
