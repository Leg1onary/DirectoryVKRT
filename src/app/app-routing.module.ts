import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CamerasComponent} from './cameras/cameras.component';
import {CmsComponent} from './cms/cms.component';
import {SettingsComponent} from './settings/settings.component';
import {UsersComponent} from './users/users.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cameras',
    component: CamerasComponent
  },
  {
    path: 'cms',
    component: CmsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
