// Title: Assignment 4.2 Inversion of Control and Dependency Injection
// Author: Prof Krasso
// Date: Nov 12 2022
// Modified: Detres
//https://www.npmjs.com/package/bootstrap-icons
//https://angular.io/api/router/RouterLink
//https://angular.io/tutorial/toh-pt5
//https://stackoverflow.com/questions/
//https://stackoverflow.com/questions/56271351/how-to-get-id-from-the-url-using-snapshot-or-activatedroute-subscriber-in-angula
//https://www.tabnine.com/code/javascript/functions/%40angular%2Frouter/ParamMap/get

// importing of IComposer Interface

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

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

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number): IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
}
