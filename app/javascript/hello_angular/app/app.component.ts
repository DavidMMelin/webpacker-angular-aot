import { Component } from '@angular/core';
// import templateString from './app.component.html';

@Component({
  selector: 'hello-angular',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name: string = 'Angular!';
}
