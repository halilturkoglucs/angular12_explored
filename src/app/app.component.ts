import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [`
    h1 {
      color: brown;
    }
  `],
  providers: []
})
export class AppComponent {
  title = 'demo01';
  value = 7;
}
