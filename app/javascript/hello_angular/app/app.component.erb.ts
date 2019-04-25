import { Component } from '@angular/core';
// import templateString from './app.component.html';

@Component({
  selector: 'hello-angular',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name: string = 'Angular!';
  public str: string = '<%= "#{Rails.env} on local" %>';
  public arr: string[] = JSON.parse('<%= ["Music","Video","Book"] %>');
  public obj: any = JSON.parse('<%= {"key"=> "chain", "pointer" => "laser"}.to_json %>')
}
