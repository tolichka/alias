import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  qwe = '';

  func(b) {
    console.log('State is ' + b);
    this.qwe = b;
  }
}
