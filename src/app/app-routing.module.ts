import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CamerasComponent} from './cameras/cameras.component';
import {CmsComponent} from './cms/cms.component';
import {SettingsComponent} from './settings/settings.component';
import {UsersComponent} from './users/users.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './users/login/login.component';
import {EmailComponent} from './users/email/email.component';
import {SignupComponent} from './users/signup/signup.component';
import {AuthGuardService} from './shared/auth-guard.service';
import {ProfileComponent} from './users/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'cameras', component: CamerasComponent, canActivate: [AuthGuardService] },
  { path: 'cms', component: CmsComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
