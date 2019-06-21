import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CommunityListComponent } from './community/community-list/community-list.component';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { CommunityCreateEditComponent } from './community/community-create-edit/community-create-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { MessageService } from './service/message.service';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AccountCreateEditComponent } from './account/account-create-edit/account-create-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CommunityListComponent,
    CommunityCreateEditComponent,
    AccountListComponent,
    AccountCreateEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [DataService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
