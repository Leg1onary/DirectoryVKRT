import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(public  afAuth: AngularFireAuth, private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {}
  logout() {
    this.afAuth.auth.signOut();
  }
}
