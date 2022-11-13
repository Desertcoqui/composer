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
//https://bobbyhadz.com/blog/typescript-argument-type-null-not-assignable-parameter-type-string
//https://www.youtube.com/watch?time_continue=2&v=4O7eAN3sZ24&feature=emb_logo

//Imports
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
//import removed due to file deletion
// import { Composer } from '../composer.class';

import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  /* Defines Variables and initializes array */
  composers: Array<IComposer>;
  //new form control object with instance
  txtSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
    this.txtSearchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((val) => this.filterComposers(val!)); //<--non-null assertion
  }
  ngOnInit(): void {}

  //filter composer function, which calls the alert function
  filterComposers(name: string) {
    alert(name);
  }
}
