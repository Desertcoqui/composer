// Title: Assignment 4.4 Async Pipe
// Author: Prof Krasso
// Date: Nov 13 2022
// Modified: Detres
//https://www.npmjs.com/package/bootstrap-icons
//https://angular.io/api/router/RouterLink
//https://angular.io/tutorial/toh-pt5
//https://stackoverflow.com/questions/
//41370760difference-between-routerlink-and-routerlink
//https://stackoverflow.com/questions/56271351/how-to-get-id-from-the-url-using-snapshot-or-activatedroute-subscriber-in-angula
//https://www.tabnine.com/code/javascript/functions/%40angular%2Frouter/ParamMap/get
// https://www.learnrxjs.io/learn-rxjs/concepts/rxjs-primer#pipe
// https://www.learnrxjs.io/learn-rxjs/operators/transformation/map
// https://www.learnrxjs.io/learn-rxjs/concepts/rxjs-primer#pipe
// https://www.learnrxjs.io/learn-rxjs/operators/filtering/filter

//Imports
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
//import removed due to file deletion
// import { Composer } from '../composer.class';

import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

//assingment 4.4 import
import { Observable } from 'rxjs';
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  /* Defines Variables and initializes array */
  // composers: Array<IComposer>;
  //composers variable updated for 4.4
  composers: Observable<IComposer[]>;
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
  // filterComposers(name: string) {
  //   alert(name);
  // }
  //deleted alert box
  filterComposers(name: string): void {
    this.composers = this.composerService.filterComposers(name);
  }
}
