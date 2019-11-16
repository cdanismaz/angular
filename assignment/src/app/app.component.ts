import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  oddOrEven: string[] = [];

  onTimerTick(sec: number) {
    if(sec % 2 == 0) {
      this.oddOrEven.push('even');
    }
    else {
      this.oddOrEven.push('odd');
    }
  }

  onTimerStopped() {
    this.oddOrEven = [];
  }
}
