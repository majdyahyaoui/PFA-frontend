import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ClasseService } from './services/classe.service' ;
import { ConnectionService }from './services/connection.service';
import { MatiereService }from './services/matiere.service' ;

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { UserComponent } from './user/user.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule, MatListModule,

} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';

import { ProfessorProfileComponent } from './professor-profile/professor-profile.component';
import { PopupComponent } from './popup/popup.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InsertnoteComponent } from './insertnote/insertnote.component';
import { UpdateNoteComponent } from './update-note/update-note.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
    MatDialogModule,
    MatListModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  entryComponents: [
    PopupComponent,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SignupComponent,
    SigninComponent,
    UserComponent,
    ProfessorProfileComponent,
    PopupComponent,
    AboutUsComponent,
    InsertnoteComponent,
    UpdateNoteComponent,

  ],
  providers: [ClasseService,ConnectionService,MatiereService],
  bootstrap: [AppComponent]
})
export class AppModule { }
