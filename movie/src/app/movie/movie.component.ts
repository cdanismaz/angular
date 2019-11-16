import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Movie} from "../model/movie.model";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie : Movie;
  //@ViewChild('ratingInput', {static: true}) ratinginput: ElementRef;

  @Output() ratingChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onRatingClicked() {
    //this.ratingChanged.emit(this.ratinginput.nativeElement.value);
  }

  onRatingChanged(event: Event) {
    //console.log(element);
    let newRating = (<HTMLInputElement>event.target).value;
    this.ratingChanged.emit(Number(newRating));
  }
}
