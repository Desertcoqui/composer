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

// importing of IComposer Interface

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
//import for observable object, of operator and map operator
import { Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

// create and export Composer class
export class ComposerService {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 1001,
        fullName: 'Robi Draco',
        genre: 'Grunge',
      },
      {
        composerId: 1002,
        fullName: 'Aaron Copland',
        genre: 'Folk',
      },
      {
        composerId: 1003,
        fullName: 'Anton Bruckner',
        genre: 'Classical',
      },
      {
        composerId: 1004,
        fullName: 'Hans Zimmer',
        genre: 'New Age',
      },
      {
        composerId: 1005,
        fullName: 'John Rutter',
        genre: 'Classical',
      },
    ];
  }

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number): IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
  //
  filterComposers(name: string): Observable<IComposer[]> {
    //returns observable array of composer objects as full names.
    return of(this.composers).pipe(
      map((composers) =>
        composers.filter(
          (composer) => composer.fullName.toLowerCase().indexOf(name) > -1
        )
      )
    );
  }
}
