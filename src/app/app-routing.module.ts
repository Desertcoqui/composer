// Title: Assignment 3.2 Passing Data to routes, Part 1
// Author: Prof Krasso
// Date: Nov 6 2022
// Modified: Detres
// Description: Assignment 3.2 Passing Data to routes, Part 1
//Week-3 exercises/videos
//https://www.npmjs.com/package/bootstrap-icons
//https://angular.io/api/router/RouterLink
//https://angular.io/tutorial/toh-pt5
//https://stackoverflow.com/questions/
//41370760difference-between-routerlink-and-routerlink -->
//https://stackoverflow.com/questions/56271351/how-to-get-id-from-the-url-using-snapshot-or-activatedroute-subscriber-in-angula
//https://www.tabnine.com/code/javascript/functions/%40angular%2Frouter/ParamMap/get

//Imported statements
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

//Routes from Imports
const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent,
  },
  {
    path: 'composer-list',
    component: ComposerListComponent,
  },
  {
    path: 'composer-details/:composerId',
    component: ComposerDetailsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
