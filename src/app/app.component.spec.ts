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

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'enhanced-composer-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('enhanced-composer-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'enhanced-composer-app app is running!'
    );
  });
});
