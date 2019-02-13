import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {DialogService} from '../shared/dialog.service';
import {NotificationService} from '../shared/notification.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(public  afAuth: AngularFireAuth, public router: Router,
              private notificationService: NotificationService,
              private dialogService: DialogService) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {}
  logout() {
    this.dialogService.openConfirmDialog('Вы уверены, что хотите выйти?')
      .afterClosed().subscribe(res => {
      if (res) {
        this.notificationService.warn('Пользователь разлогинен');
        this.afAuth.auth.signOut();
        this.router.navigate(['login']);
      }
    });
  }
}
