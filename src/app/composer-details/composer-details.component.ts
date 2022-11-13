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

//imports added
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
// import { Composer } from '../composer.class';

import { ComposerService } from '../composer.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css'],
})
export class ComposerDetailsComponent implements OnInit {
  //variable declarations
  composerId: number;
  composer!: IComposer;

  constructor(
    private route: ActivatedRoute,
    private composerService: ComposerService
  ) {
    this.composerId = parseInt(
      this.route.snapshot.paramMap.get('composerId')!,
      10
    );

    // checks to see if composerId has a value
    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {}
}
