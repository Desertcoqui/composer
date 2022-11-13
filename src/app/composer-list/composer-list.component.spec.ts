// <!-- // Title: Assignment 3.2 Passing Data to routes, Part 1
// // Author: Prof Krasso
// // Date: Nov 6 2022
// // Modified: Detres
// // Description: Assignment 3.2 Passing Data to routes, Part 1
// //Week-3 exercises/videos
// //https://www.npmjs.com/package/bootstrap-icons
// //https://angular.io/api/router/RouterLink
// //https://angular.io/tutorial/toh-pt5
// https://stackoverflow.com/questions/41370760/difference-between-routerlink-and-routerlink
// https://www.youtube.com/watch?v=2nuUKwyaCzU&t=2s
// https://www.youtube.com/watch?time_continue=5&v=jBcIjOtctIY&feature=emb_logo
// https://cyberactive.bellevue.edu/ultra/courses/_513884_1/cl/outline-->

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerListComponent } from './composer-list.component';

describe('ComposerListComponent', () => {
  let component: ComposerListComponent;
  let fixture: ComponentFixture<ComposerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComposerListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComposerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
