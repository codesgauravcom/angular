import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DigitalEra';
  todaydate=new Date();
  weekdays=["Sunday","Monday","Tuesday","Wednesday","thursday","friday","Saturday"];

}
