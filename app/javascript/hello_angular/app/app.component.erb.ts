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
  public bool: boolean = JSON.parse('<%= false %>');
  public arr: string[] = JSON.parse('<%= ["Music","Video","Book"] %>');
  public obj: any = JSON.parse('<%= {"key"=> "chain", "pointer" => "laser"}.to_json %>');
  public objArr: any = JSON.parse('<%= {arr: ["dog","cat"], obj: {sound: "woof"}, objArr: [{name: "David"}, {name: "Michael"}]}.to_json %>');
}
