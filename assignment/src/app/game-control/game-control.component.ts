import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() timerTick = new EventEmitter<number>();
  @Output() timerStopped = new EventEmitter<void>();
  number: number = 0;
  timer;
  isDisabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onGameStartedClicked() {
    this.isDisabled = true;
    this.timer = setInterval(()=> {
      this.number++;
      this.timerTick.emit(this.number);
    },1000);
  }

  onGameStoppedClicked() {
    this.isDisabled = false;
    clearInterval(this.timer);
    this.timerStopped.emit();
    this.number = 0;
  }


}
