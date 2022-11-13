// Title: Assignment 4.3 Handling Form Events with Observables
// Author: Prof Krasso
// Date: Nov 13 2022
// Modified: Detres
//Week-3 exercises/videos
//https://www.npmjs.com/package/bootstrap-icons
//https://angular.io/api/router/RouterLink
//https://angular.io/tutorial/toh-pt5
//https://stackoverflow.com/questions/
//41370760difference-between-routerlink-and-routerlink
//https://stackoverflow.com/questions/56271351/how-to-get-id-from-the-url-using-snapshot-or-activatedroute-subscriber-in-angula
//https://www.tabnine.com/code/javascript/functions/%40angular%2Frouter/ParamMap/get

//imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComposerListComponent,
    ContactComponent,
    AboutComponent,
    ComposerDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
