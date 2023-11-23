import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-propco';
  images = [1, 2, 3].map(() => `https://picsum.photos/${window.innerWidth}/${window.innerHeight}?random&t=${Math.random()}`);
}
