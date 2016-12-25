import { Component } from '@angular/core';
import { FizzbuzzService } from './fizzbuzz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';
  number = '';
  count = '';

  constructor(private fb: FizzbuzzService) {

  }

  showFizzBuzz = () => {
      this.fb.count(this.number)
        .subscribe((data) => {
            this.count = data.Count
        });
  }
}
