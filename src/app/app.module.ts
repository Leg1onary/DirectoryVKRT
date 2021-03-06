import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { CamerasComponent } from './cameras/cameras.component';
import { CmsComponent } from './cms/cms.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
// @ts-ignore
import {NgxDaDataModule} from '@kolkov/ngx-dadata';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {
  MatCardModule, MatCheckboxModule, MatDividerModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule,
  MatOptionModule,
  MatSelectModule, MatSnackBarModule, MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatPaginatorModule, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatToolbarModule
} from '@angular/material';
import { CitiesmrfListComponent } from './cms/citiesmrf-list/citiesmrf-list.component';
import { CitiesComponent } from './cms/cities/cities.component';
import {CitiesService} from './shared/cities.service';
import {MrfService} from './shared/mrf.service';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import {CmshistoryComponent} from './cms/cmshistory/cmshistory.component';
import { LoginComponent } from './users/login/login.component';
import { EmailComponent } from './users/email/email.component';
import { SignupComponent } from './users/signup/signup.component';
import {AuthGuardService} from './shared/auth-guard.service';
import { ProfileComponent } from './users/profile/profile.component';
import { CmsHelementComponent } from './cms/cms-helement/cms-helement.component';
import {CmshistoryService} from './shared/cmshistory.service';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsersComponent,
    SettingsComponent,
    CamerasComponent,
    CmsComponent,
    HomeComponent,
    CitiesmrfListComponent,
    CitiesComponent,
    MatConfirmDialogComponent,
    CmshistoryComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    ProfileComponent,
    CmsHelementComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxDaDataModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatIconModule,
    MatGridListModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatToolbarModule
  ],
  providers: [CitiesService, AuthGuardService, CmshistoryService, MrfService, { provide: MatDialogRef, useValue: {} }
    , { provide: MAT_DIALOG_DATA, useValue: [] }],
  bootstrap: [AppComponent],
  entryComponents: [CitiesComponent, CmsHelementComponent, MatConfirmDialogComponent]
})
export class AppModule { }
