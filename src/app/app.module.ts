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
  MatPaginatorModule, MatDialogModule
} from '@angular/material';
import { CitiesmrfListComponent } from './cms/citiesmrf-list/citiesmrf-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsersComponent,
    SettingsComponent,
    CamerasComponent,
    CmsComponent,
    HomeComponent,
    CitiesmrfListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxDaDataModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
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
    MatDialogModule
  ],
  providers: [CitiesmrfListComponent],
  bootstrap: [AppComponent],
  entryComponents: [CitiesmrfListComponent]
})
export class AppModule { }
