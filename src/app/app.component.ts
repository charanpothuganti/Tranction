import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tranction';


  public getPresetDate() {
    return new Date(1997, 6, 1, 12, 32);
  }
  
}
